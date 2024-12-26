import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
      <CheckCircle size={20} />
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <X size={20} />
      </button>
    </div>
  );
}