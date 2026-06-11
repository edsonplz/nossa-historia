export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Índice da resposta correta (0 a 3)
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Quem disse \"Eu te amo\" pela primeira vez? ❤️",
    options: ["Eu", "Você", "Os dois juntos", "Ninguém lembra"],
    correctAnswer: 1 // Altere conforme a realidade de vocês
  },
  {
    id: 2,
    question: "Qual foi o lugar do nosso primeiro beijo? 💋",
    options: ["No cinema", "Na porteira", "Pós Show de Nando", "Na praia"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual é a nossa comida favorita para pedir no final de semana? 🍕",
    options: ["Hambúrguer", "Pizza", "Sushi", "Comida Italiana / Massa"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Quem é mais piloto de moto? 🏍️",
    options: ["Eu", "Você"],
    correctAnswer: 0
  }
];
