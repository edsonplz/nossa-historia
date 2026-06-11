import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalSurpriseSection() {
  const dispararChuvaDeCoracoes = () => {
    // Cria o molde do confete em formato de coração usando paths SVG
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.8,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#f43f5e']
    };

    // Desenha o formato do coração para o canvas-confetti
    const carimboCoracao = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
    });

    // Dispara rajadas de lados diferentes para preencher a tela do celular
    confetti({
      ...defaults,
      particleCount: 70,
      scalar: 2,
      shapes: [carimboCoracao],
      origin: { x: 0.2, y: 0.5 }
    });

    confetti({
      ...defaults,
      particleCount: 70,
      scalar: 2,
      shapes: [carimboCoracao],
      origin: { x: 0.8, y: 0.5 }
    });
  };

  return (
    <section id="final-surprise" className="py-32 w-full bg-white border-t border-stone-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Efeito sutil de luz de fundo */}
      <div className="absolute w-96 h-96 bg-rose-100/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-xl px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6 inline-block bg-rose-50 p-4 rounded-full"
        >
          <Heart className="w-12 h-12 text-rose-500 animate-pulse" fill="currentColor" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-romantic font-bold text-slate-800 mb-4"
        >
          Obrigado por ser Você
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm md:text-base text-slate-600 mb-12 max-w-md mx-auto leading-relaxed"
        >
          Nossa história continua sendo escrita dia após dia, e eu mal posso esperar por todos os próximos capítulos que vamos viver juntos. Eu te amo muito!
        </motion.p>

        {/* Botão Surpresa com Efeito Glow Animado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300 group-hover:duration-200 animate-pulse" />
          
          <button
            onClick={dispararChuvaDeCoracoes}
            className="relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 active:scale-98 transition-all flex items-center gap-2 text-sm md:text-base"
          >
            Clique aqui ❤️
          </button>
        </motion.div>
      </div>
    </section>
  );
}