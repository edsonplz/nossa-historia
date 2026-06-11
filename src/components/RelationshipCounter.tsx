import { motion } from 'framer-motion';
import { useRelationshipTime } from '@/hooks/useRelationshipTime';
import AnimatedReveal from './AnimatedReveal';

interface CounterCardProps {
  value: number;
  label: string;
}

// Subcomponente de Card com animação individual ao atualizar o número
function CounterCard({ value, label }: CounterCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/70 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col items-center justify-center min-w-[85px] sm:min-w-[110px] md:min-w-[130px]"
    >
      <motion.span
        key={value} // O atributo key força o Framer Motion a re-animar o número sempre que ele mudar
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent font-sans"
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span className="text-[10px] md:text-xs uppercase font-semibold text-slate-400 tracking-wider mt-1">
        {label}
      </span>
    </motion.div>
  );
}

export default function RelationshipCounter() {
  // Altere para a data em que vocês começaram a namorar oficialmente (Ano-Mês-Dia THora:Minuto:Segundo)
  const dataDeInicio = "2025-09-27T20:00:00"; 
  const tempo = useRelationshipTime(dataDeInicio);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <AnimatedReveal>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:flex-row gap-3 md:gap-4 max-w-4xl justify-center">
          <CounterCard value={tempo.years} label="Anos" />
          <CounterCard value={tempo.months} label="Meses" />
          <CounterCard value={tempo.days} label="Dias" />
          <CounterCard value={tempo.hours} label="Horas" />
          <CounterCard value={tempo.minutes} label="Minutos" />
          <CounterCard value={tempo.seconds} label="Segundos" />
        </div>
      </AnimatedReveal>
      
      <AnimatedReveal delay={0.2}>
        <p className="mt-8 text-sm md:text-base text-slate-500 font-romantic italic text-center">
          "Cada segundo ao seu lado é uma nova página da nossa melhor história."
        </p>
      </AnimatedReveal>
    </div>
  );
}