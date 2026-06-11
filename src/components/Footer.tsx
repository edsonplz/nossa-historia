import React from 'react';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-stone-50 border-t border-stone-100 text-center text-xs text-slate-400 font-medium tracking-wide">
      <p>Feito com ❤️ por você sabe quem • {anoAtual}</p>
    </footer>
  );
}