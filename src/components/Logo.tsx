import { useState, useEffect } from 'react';

export function Logo({ className = '' }: { className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://ghjfxceqdpxtqyntnoim.supabase.co/storage/v1/object/public/images/guaribas-valley-logo.png';
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}>
      <img
        src="https://ghjfxceqdpxtqyntnoim.supabase.co/storage/v1/object/public/images/guaribas-valley-logo.png"
        alt="Guaribas Valley Logo"
        className="h-24 w-auto"
      />
    </div>
  );
}