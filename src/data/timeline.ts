import freiDamiao from "../assets/freidamiao.jpeg"; // Substitua pelo caminho real da imagem em src/assets/images/
import festa from "../assets/festa.jpeg"; // Substitua pelo caminho real da imagem em src/assets/images/
import pedido from "../assets/pedido.jpeg"; // Substitua pelo caminho real da imagem em src/assets/images/
import juazeiro from "../assets/juazeiro.jpeg"; // Substitua pelo caminho real da imagem em src/assets/images/
import praia from "../assets/praia.jpeg"; // Substitua pelo caminho real da imagem em src/assets/images/

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "14 de Dezembro de 2024",
    title: "Como nos conhecemos",
    description: "Vou desconsiderar a vez que te dei carona e você não me deu bola e considerar a vez em que o confete nos uniu. Detalhe que meu tio já contou pra mãe que eu tava com minha namorada nessa noite.",
    image: freiDamiao // Substitua pela foto real em src/assets/images/
  },
  {
    id: 2,
    date: "23 de Agosto de 2025",
    title: "A Primeira Festa",
    description: "Primeiro show juntos, teve carro de bate bate, tiro nas balas que não acertei nada, musicas boas com nosso querido Nando Reis e uma tentativa de beijo no público que não deu muito certo.",
    image: festa // Substitua pela foto real em src/assets/images/
  },
  {
    id: 3,
    date: "27 de Setembro de 2025",
    title: "O Pedido de Namoro",
    description: "O dia em que decidimos oficializar o que nossos corações já sabiam há muito tempo. O 'sim' mais importante e feliz da minha vida!",
    image: pedido // Substitua pela foto real em src/assets/images/
  },
  {
    id: 4,
    date: "08 de Dezembro de 2025",
    title: "Nossa Primeira Viagem",
    description: "Colecionando memórias no Juazeiro, rindo de coisas bobas e descobrindo que qualquer lugar do mundo é perfeito desde que eu esteja com você.",
    image: juazeiro // Substitua pela foto real em src/assets/images/
  },
    {
    id: 5,
    date: "14 de Dezembro de 2025",
    title: "Um Fim de Semana de Praia",
    description: "Sol, mar e a melhor companhia que eu poderia desejar. O dia que Maitê queria roubar meu amor.",
    image: praia // Substitua pela foto real em src/assets/images/
  }
];