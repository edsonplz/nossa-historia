import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Button from '@/components/Button';

interface HeroProps {
  onStartExperience: () => void;
}

export default function Hero({ onStartExperience }: HeroProps) {
  const handleAction = () => {
    onStartExperience();
    // Executa o scroll suave até a próxima seção (o contador)
    const nextSection = document.getElementById('relationship-counter');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center p-4 relative bg-gradient-to-br from-rose-100 via-pink-50 to-stone-50">
      {/* Detalhe estético em desfoque no fundo */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl z-10 bg-white/30 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-xl border border-white/60 mx-4"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block"
        >
          <Heart className="text-rose-500 w-14 h-14 mb-6" fill="currentColor" />
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-romantic font-bold text-slate-800 mb-4 leading-tight">
          Nossa História
        </h1>
        
        <p className="text-sm md:text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          Preparei um lugar especial para navegarmos pelas nossas melhores memórias. Cada detalhe aqui foi feito pensando em você.
        </p>

        <Button onClick={handleAction} className="px-8 py-4 text-base tracking-wide">
          Preparada para recordar nossa história?
        </Button>
      </motion.div>
    </section>
  );
}