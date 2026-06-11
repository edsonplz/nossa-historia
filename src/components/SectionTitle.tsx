import { Heart } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 flex flex-col items-center">
      <Heart className="text-rose-400 w-6 h-6 mb-2 animate-pulse" fill="currentColor" />
      <h2 className="text-3xl md:text-4xl font-romantic font-bold text-slate-800">{title}</h2>
      {subtitle && <p className="text-sm md:text-base text-slate-500 mt-2 max-w-md">{subtitle}</p>}
    </div>
  );
}