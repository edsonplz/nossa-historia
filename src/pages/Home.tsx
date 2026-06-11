import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Hero from '@/sections/Hero';
import MusicPlayer from '@/components/MusicPlayer';
import RelationshipCounter from '@/components/RelationshipCounter';
import SectionTitle from '@/components/SectionTitle';
import TimelineSection from '@/sections/TimelineSection';
import GallerySection from '@/sections/GallerySection';
import LoveLetterSection from '@/sections/LoveLetterSection';
import QuizSection from '@/sections/QuizSection';
import FinalSurpriseSection from '@/sections/FinalSurpriseSection'; // Novo Import
import Footer from '@/components/Footer'; // Novo Import

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartExperience = () => {
    setIsPlaying(true);
    
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#ec4899', '#fda4af']
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Player de Trilha Sonora */}
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* 1. Hero Section */}
      <Hero onStartExperience={handleStartExperience} />

      {/* 2. Contador de Tempo */}
      <section id="relationship-counter" className="py-24 w-full bg-stone-50 border-t border-stone-100 flex flex-col items-center justify-center">
        <SectionTitle 
          title="O Tempo Voa Com Você" 
          subtitle="A contagem exata da nossa jornada e de cada momento transformado em eternidade." 
        />
        <RelationshipCounter />
      </section>

      {/* 3. Timeline */}
      <TimelineSection />

      {/* 4. Galeria */}
      <GallerySection />

      {/* 5. Carta de Amor */}
      <LoveLetterSection />

      {/* 6. Quiz do Casal */}
      <QuizSection />

      {/* 7. Surpresa Final Ativada */}
      <FinalSurpriseSection />

      {/* Rodapé da Aplicação */}
      <Footer />
    </div>
  );
}