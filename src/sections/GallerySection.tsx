import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { galleryData } from '@/data/gallery';
import SectionTitle from '@/components/SectionTitle';

export default function GallerySection() {
  const [indexSelecionado, setIndexSelecionado] = useState<number | null>(null);

  // Fecha o modal ao pressionar a tecla Esc e navega com as setas do teclado
  useEffect(() => {
    const tratarTeclado = (e: KeyboardEvent) => {
      if (indexSelecionado === null) return;
      if (e.key === 'Escape') setIndexSelecionado(null);
      if (e.key === 'ArrowRight') avancarItem();
      if (e.key === 'ArrowLeft') retrocederItem();
    };
    window.addEventListener('keydown', tratarTeclado);
    return () => window.removeEventListener('keydown', tratarTeclado);
  }, [indexSelecionado]);

  const avancarItem = () => {
    setIndexSelecionado((prev) => (prev !== null && prev < galleryData.length - 1 ? prev + 1 : 0));
  };

  const retrocederItem = () => {
    setIndexSelecionado((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryData.length - 1));
  };

  const itemAtual = indexSelecionado !== null ? galleryData[indexSelecionado] : null;

  return (
    <section id="gallery" className="py-24 w-full bg-stone-50 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle 
          title="Nosso Retrato Flutuante" 
          subtitle="Clique nas imagens para revelar as pequenas histórias e mensagens escondidas por trás de cada clique." 
        />

        {/* 1. Mosaico Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setIndexSelecionado(idx)}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 cursor-pointer bg-stone-200 group ${item.gridClass}`}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full relative">
                  <video src={item.url} muted loop playsInline className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                  </div>
                </div>
              )}
              {/* Overlay Suave de Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium truncate w-full">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Modal Lightbox Fullscreen */}
      <AnimatePresence>
        {itemAtual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
          >
            {/* Botão Fechar */}
            <button 
              onClick={() => setIndexSelecionado(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Controles Laterais */}
            <button 
              onClick={retrocederItem}
              className="absolute left-4 p-3 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-all z-40 touch-manipulation"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={avancarItem}
              className="absolute right-4 p-3 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-all z-40 touch-manipulation"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Container da Mídia Expandida */}
            <motion.div 
              key={itemAtual.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
            >
              {itemAtual.type === 'image' ? (
                <img src={itemAtual.url} alt="Memória expandida" className="max-w-full max-h-[70vh] object-contain" />
              ) : (
                <video src={itemAtual.url} controls autoPlay loop playsInline className="max-w-full max-h-[70vh]" />
              )}
            </motion.div>

            {/* Legenda Oculta Romântica */}
            <motion.div 
              key={`caption-${itemAtual.id}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-6 max-w-xl text-center px-4"
            >
              <p className="text-rose-300 text-sm md:text-base font-romantic italic leading-relaxed">
                {itemAtual.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}