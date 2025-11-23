import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { AlertTriangle, Power, Wifi } from 'lucide-react';

const VideoPlayer = ({ camera }) => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Controla se o vídeo está ligado ou não
  const [isLive, setIsLive] = useState(false);

  // Efeito para Ligar/Desligar o Player
  useEffect(() => {
    // Se estiver desligado ou sem URL, destrói o player se existir
    if (!isLive || !camera.stream_url) {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
      return;
    }

    // Se estiver ligado, cria o player
    if (!playerRef.current && videoContainerRef.current) {
        setLoading(true);
        setError(false);

        const videoElement = document.createElement("video-js");
        videoElement.classList.add('vjs-big-play-centered', 'vjs-fluid');
        videoContainerRef.current.innerHTML = ''; 
        videoContainerRef.current.appendChild(videoElement);

        const playerOptions = {
            autoplay: 'muted',
            controls: true,
            responsive: true,
            fluid: true,
            preload: 'auto',
            muted: true,
            sources: [{
                src: camera.stream_url,
                type: 'application/x-mpegURL'
            }]
        };

        const player = playerRef.current = videojs(videoElement, playerOptions, () => {
            setLoading(false);
        });

        player.on('error', () => { setError(true); setLoading(false); });
        player.on('playing', () => { setLoading(false); setError(false); });
    }

    // Limpeza
    return () => {
        if (playerRef.current && !playerRef.current.isDisposed()) {
            playerRef.current.dispose();
            playerRef.current = null;
        }
    };
  }, [isLive, camera.stream_url]);

  return (
    <div className="relative w-full h-full aspect-video bg-black border border-gray-800 rounded-sm overflow-hidden group">
      
      {/* Container do Vídeo */}
      <div ref={videoContainerRef} className="w-full h-full" />

      {/* TELA DE STANDBY */}
      {!isLive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-950/80 z-30">
            <div className="text-gray-500 font-mono text-xs mb-2 tracking-widest">SYSTEM STANDBY</div>
            <button 
                onClick={() => setIsLive(true)}
                className="group/btn flex items-center gap-2 px-4 py-2 bg-gray-900 border border-f1-red/50 hover:bg-f1-red hover:text-white transition-all rounded text-f1-red"
            >
                <Power className="w-5 h-5" />
                <span className="font-bold text-sm">CONNECT FEED</span>
            </button>
        </div>
      )}

      {/* Botão para DESLIGAR */}
      {isLive && (
        <div className="absolute top-2 right-2 z-40 opacity-0 group-hover:opacity-100 transition-opacity">
             <button 
                onClick={() => setIsLive(false)}
                className="bg-black/70 hover:bg-red-600 text-white p-2 rounded border border-gray-700 backdrop-blur-sm"
                title="Disconnect Feed"
            >
                <Power className="w-4 h-4" />
            </button>
        </div>
      )}

      {/* Loading Overlay */}
      {isLive && loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 pointer-events-none">
          <div className="w-8 h-8 border-2 border-f1-red border-t-transparent rounded-full animate-spin mb-2"></div>
          <p className="text-f1-red font-mono text-[10px] animate-pulse">ESTABLISHING LINK...</p>
        </div>
      )}

      {/* Error Overlay */}
      {isLive && error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
          <AlertTriangle className="w-8 h-8 text-f1-red mb-2" />
          <p className="text-f1-red font-mono text-xs font-bold">SIGNAL LOST</p>
          <button 
            onClick={() => setIsLive(false)}
            className="mt-4 text-xs text-gray-400 hover:text-white underline"
          >
            Reset Connection
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;