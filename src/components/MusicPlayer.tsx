import React, { useEffect, useRef, useState } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import musicaTema from '../assets/audio/musicatema.mp3'; // Certifique-se de ter um arquivo de áudio válido aqui

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    // Substitua por um link válido de áudio ou um arquivo local em src/assets/audio/
    audioRef.current = new Audio(musicaTema);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Autoplay bloqueado aguardando interação:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume, setIsPlaying]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-rose-100 group transition-all"
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
            title={isPlaying ? "Pausar música" : "Tocar música"}
          >
            <Music className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
          </button>

          <div className="flex items-center gap-2 w-0 overflow-hidden group-hover:w-24 transition-all duration-300 ease-in-out">
            {volume === 0 ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-rose-500" />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 accent-rose-500 h-1 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}