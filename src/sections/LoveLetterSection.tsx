import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

export default function LoveLetterSection() {
  // Substitua pelo seu texto real e personalizado [cite: 97]
  const textoCarta = 
    "Desde o momento em que você entrou na minha vida, tudo ganhou mais cor, mais sentido e muito mais alegria. Olhar para trás e ver tudo o que construímos juntos até aqui me dá a certeza de que escolher você todos os dias é a melhor decisão que eu poderia tomar. Obrigado por ser minha parceira, meu porto seguro e o meu amor. Feliz Dia dos Namorados! ❤️";

  // Transforma o texto em uma array de palavras para o efeito progressivo 
  const palavras = textoCarta.split(" ");

  // Configurações de animação do container pai (gerencia o atraso entre os filhos)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, // Tempo de espera entre cada palavra surgir
        delayChildren: 0.3     // Espera um pouco após entrar na tela para começar
      },
    },
  };

  // Configurações de animação para cada palavra individual
  const palavraVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="love-letter" className="py-24 w-full bg-white border-t border-stone-100 relative">
      {/* Detalhe visual de textura de fundo simulando papel de carta */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Uma Carta Para Você" 
          subtitle="Palavras que vêm direto do coração, escritas para lembrar o quanto você é importante." 
        />

        {/* Card Estilizado como Carta Elegante [cite: 103] */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="bg-stone-50/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-rose-100/80 shadow-inner text-center relative overflow-hidden"
        >
          {/* Bordas decorativas clássicas de carta de amor */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400" />
          
          {/* Renderização com Efeito Progressivo (Typewriter)  */}
          <motion.p 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-base md:text-xl font-romantic italic leading-relaxed text-slate-700 font-medium tracking-wide text-justify md:text-center"
          >
            {palavras.map((palavra, index) => (
              <motion.span
                key={index}
                variants={palavraVariants}
                className="inline-block mr-1.5 mb-1 select-none"
              >
                {palavra}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 1 }} // Surge suavemente após o término do texto
            className="mt-8 pt-6 border-t border-rose-100/60 text-right font-romantic font-bold text-rose-500 text-lg md:text-xl"
          >
            Com todo o meu amor, ❤️
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}