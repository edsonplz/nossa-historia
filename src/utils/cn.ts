import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge'; // Removeu-se o 'Blacklist' que estava aqui

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}