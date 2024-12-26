import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-emerald-400">Sobre nós</a></li>
              <li><a href="#startups" className="hover:text-emerald-400">Nossas Startups</a></li>
              <li><a href="#eventos" className="hover:text-emerald-400">Calendário de Eventos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="flex items-center space-x-4 mb-4">
              <Mail size={20} />
              <span>contato@guaribasvalley.com.br</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-emerald-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-emerald-400"><Linkedin size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Apoio</h3>
            <p className="text-gray-300">
              Parte do ecossistema Vale do Mel, com apoio do Sebrae Piauí.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}