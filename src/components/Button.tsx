import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
        variant === 'primary'
          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
          : 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50'
      }`}
    >
      {children}
    </button>
  );
}