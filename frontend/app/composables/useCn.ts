import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function useCn() {
  return (...inputs: ClassValue[]) => twMerge(clsx(inputs))
}
