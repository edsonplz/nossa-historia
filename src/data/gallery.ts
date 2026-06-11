import corda from "../assets/corda.jpeg";
import pes from "../assets/pes.jpeg";
import caju from "../assets/caju.jpeg";
import simples from "../assets/simples.jpeg";
import pizza from "../assets/pizza.jpeg";
import sorte from "../assets/video/sorte.mp4";

export interface GalleryItem {
  id: number;
  url: string;
  type: 'image' | 'video';
  caption: string;
  gridClass: string; // Controla o tamanho do bloco no desktop
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    url: corda,
    type: 'image',
    caption: "Nosso amor está amarrado a kilometros daqui. ❤️",
    gridClass: "md:col-span-2 md:row-span-2" // Card Grande de Destaque
  },
  {
    id: 2,
    url: pes,
    type: 'image',
    caption: "E nossos pés estão gravados em duas praias ❤️",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: caju,
    type: 'image',
    caption: "Nesse dia tomei um gole de Cajuina.",
    gridClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: 4,
    url: simples,
    type: 'image',
    caption: "A simplicidade do nosso amor é o que me faz feliz. ❤️",
    gridClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    url: pizza,
    type: 'image',
    caption: "A pizza que a gente ama.",
    gridClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: 6,
    url: sorte,
    type: 'video',
    caption: "A sorte que temos de ter um ao outro.",
    gridClass: "md:col-span-2 md:row-span-1"
  }
];