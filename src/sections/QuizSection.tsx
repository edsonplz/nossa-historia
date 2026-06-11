import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, XCircle, RefreshCw, Utensils, MessageCircle } from 'lucide-react'; // Adicionado MessageCircle
import { quizQuestions } from '@/data/quiz';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

export default function QuizSection() {
  // =========================================================================
  // CONFIGURAÇÃO DO SEU WHATSAPP
  // Coloque seu número com: Código do País (55) + DDD + Seu Número (tudo junto)
  // =========================================================================
  const SEU_TELEFONE = "5583993719980"; 
  const MENSAGEM_WHATSAPP = encodeURIComponent("Quero a noite misteriosa");
  const urlWhatsapp = `https://wa.me/${SEU_TELEFONE}?text=${MENSAGEM_WHATSAPP}`;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    if (optionIdx === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const totalQuestions = quizQuestions.length;
  const acertouTudo = score === totalQuestions;

  return (
    <section id="quiz" className="py-24 w-full bg-stone-50 border-t border-stone-100 flex flex-col items-center">
      <div className="max-w-2xl w-full px-6">
        <SectionTitle 
          title="Quanto Você me Conhece?" 
          subtitle="Um mini-jogo rápido para testar nossa sintonia e liberar um presente exclusivo no final!" 
        />

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-rose-100 min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                {/* Cabeçalho do Quiz */}
                <div>
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
                    Pergunta {currentQuestion + 1} de {totalQuestions}
                  </span>
                  <h3 className="text-lg md:text-xl font-romantic font-bold text-slate-800 mt-4 mb-6 leading-snug">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                </div>

                {/* Lista de Opções */}
                <div className="space-y-3 flex-1">
                  {quizQuestions[currentQuestion].options.map((option, idx) => {
                    const isCorrect = idx === quizQuestions[currentQuestion].correctAnswer;
                    const isSelected = idx === selectedOption;
                    
                    let btnStyle = "border-slate-200 hover:bg-rose-50/40 hover:border-rose-200 text-slate-700 bg-stone-50/50";
                    if (isAnswered) {
                      if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm shadow-emerald-100";
                      else if (isSelected) btnStyle = "bg-rose-50 border-rose-300 text-rose-800";
                      else btnStyle = "opacity-50 border-slate-100 text-slate-400 bg-white";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleOptionClick(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between text-sm md:text-base font-medium ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {isAnswered && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 ml-2" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {/* Ação Próxima Pergunta */}
                {isAnswered && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-end">
                    <Button onClick={handleNext} className="py-2.5 px-6 text-sm">
                      {currentQuestion === totalQuestions - 1 ? "Ver Resultado" : "Próxima Pergunta"}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              /* Tela de Resultado Final */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center justify-center my-auto"
              >
                {acertouTudo ? (
                  <>
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200 mb-4 shadow-sm animate-bounce">
                      <Award className="w-8 h-8 text-amber-500" />
                    </div>
                    <h4 className="text-2xl font-romantic font-bold text-slate-800 mb-2">Você Gabaritou! 🎉</h4>
                    <p className="text-sm text-slate-600 max-w-sm mb-6">
                      Sua sintonia está impecável. Como prêmio por conhecer tão bem a nossa jornada, você desbloqueou seu cupom!
                    </p>

                    {/* Card de Recompensa Customizado */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 p-0.5 rounded-2xl shadow-lg max-w-sm w-full border border-amber-300 mb-5"
                    >
                      <div className="bg-white p-5 rounded-[14px] flex items-center gap-4 text-left relative overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-rose-50 rounded-full opacity-40 pointer-events-none" />
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                          <Utensils className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600">Cupom Exclusivo</span>
                          <h5 className="text-base font-bold text-slate-800 mt-0.5">Vale uma Noite Misteriosa 🍝</h5>
                          <p className="text-xs text-slate-400 mt-1">Válido apenas hoje com o desenvolvedor.</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* ============================================================= */}
                    {/* BOTÃO DO WHATSAPP DO SEU GATILHO SURPRESA */}
                    {/* ============================================================= */}
                    <motion.a
                      href={urlWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-full shadow-md shadow-emerald-100 hover:bg-[#20ba5a] transition-colors text-sm md:text-base w-full max-w-sm justify-center"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      Resgatar Prêmio no WhatsApp
                    </motion.a>
                    {/* ============================================================= */}
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center border border-rose-100 mb-4 shadow-sm">
                      <RefreshCw className="w-6 h-6 text-rose-400" />
                    </div>
                    <h4 className="text-xl font-romantic font-bold text-slate-800 mb-2">Quase lá! ({score}/{totalQuestions})</h4>
                    <p className="text-sm text-slate-500 max-w-sm mb-6">
                      Alguns detalhes passaram batido, mas o amor continua o mesmo. Que tal tentar de novo para liberar o prêmio?
                    </p>
                    <Button onClick={resetQuiz} variant="secondary" className="py-2.5 px-6 text-sm flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" /> Tentar Novamente
                    </Button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}