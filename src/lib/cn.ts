import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  // Combina clases condicionales y resuelve conflictos de Tailwind (ej: "p-2" vs "p-4").
  return twMerge(clsx(inputs));
}
