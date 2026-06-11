import { motion } from 'framer-motion';
import { timelineData } from '@/data/timeline';
import SectionTitle from '@/components/SectionTitle';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 w-full bg-white relative">
      <div className="max-w-5xl mx-auto px-4">
        
        <SectionTitle 
          title="Nossa Linha do Tempo" 
          subtitle="Um resgate dos momentos mais lindos e marcantes que construímos lado a lado." 
        />

        <div className="relative mt-16">
          {/* Linha vertical guia */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-pink-300 to-rose-100 transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id} 
                className={`mb-12 md:mb-20 flex flex-col md:flex-row items-start justify-between w-full relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Marcador redondo */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow transform -translate-x-[7px] md:-translate-x-1/2 top-1.5 z-10" />

                {/* Card de Conteúdo Animado */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-10 md:pl-0"
                >
                  <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                    
                    {/* ============================================================= */}
                    {/* CONTAINER DE IMAGEM ADAPTADO PARA FOTOS VERTICAIS (9:16) */}
                    {/* ============================================================= */}
                    <div className="relative h-72 md:h-96 w-full overflow-hidden bg-stone-900/90 flex items-center justify-center">
                      
                      {/* 1. Imagem de fundo duplicada (Borrada e Esticada) */}
                      <img 
                        src={item.image} 
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 select-none pointer-events-none" 
                      />

                      {/* 2. Imagem principal frontal (Intacta e sem cortes) */}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-102" 
                      />
                      
                    </div>
                    {/* ============================================================= */}

                    {/* Textos do momento */}
                    <div className="p-5 md:p-6">
                      <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-romantic font-bold text-slate-800 mt-3 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}