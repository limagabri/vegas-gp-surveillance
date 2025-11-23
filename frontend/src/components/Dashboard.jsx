import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import { Activity } from 'lucide-react';

const Dashboard = () => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        // Busca a lista do Backend Python
        const response = await axios.get('http://127.0.0.1:8000/cameras');
        setCameras(response.data);
      } catch (error) {
        console.error("Erro ao buscar câmeras:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCameras();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg p-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho de Status */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
            <div>
                <h2 className="text-gray-400 font-mono text-sm uppercase tracking-widest">Active Feeds</h2>
                <p className="text-f1-red font-bold text-xl font-mono">{cameras.length} CAMERAS ONLINE</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-900 border border-gray-800 rounded">
                <Activity className="w-4 h-4 text-neon-green animate-pulse" />
                <span className="text-neon-green font-mono text-xs">SECURE CONNECTION</span>
            </div>
        </div>

        {/* LOADING STATE */}
        {loading && (
            <div className="text-white font-mono text-center mt-20">
                LOADING SURVEILLANCE SYSTEM...
            </div>
        )}

        {/* GRID DE CÂMERAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cameras.map((camera) => (
            <div key={camera.id} className="bg-panel-gray border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
              
              {/* Header da Câmera */}
              <div className="px-4 py-2 bg-black/50 border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-f1-red font-mono text-xs font-bold">
                        CAM-0{camera.id}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-f1-red animate-pulse"></div>
                    <span className="text-gray-400 text-[10px] font-mono tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Título e Localização */}
              <div className="px-4 py-3 bg-gray-900/50">
                <h3 className="text-white font-bold font-mono truncate">{camera.name}</h3>
                <p className="text-gray-500 text-xs font-mono flex items-center gap-1">
                    <span>📍</span> {camera.location}
                </p>
              </div>

              {/* O Player de Vídeo */}
              <div className="p-1 bg-black">
                 <VideoPlayer camera={camera} />
              </div>

              {/* Rodapé Técnico */}
              <div className="px-4 py-1 bg-black flex justify-between items-center text-[10px] font-mono text-gray-600 border-t border-gray-900">
                <span>{camera.lat}, {camera.lon}</span>
                <span>HLS STREAM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;