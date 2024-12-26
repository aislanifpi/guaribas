import { ArrowRight } from 'lucide-react';
import { Button } from './components/Button';
import { StartupCard } from './components/StartupCard';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

const startups = [
  'TikTests',
  'Bee Cerrado',
  'Conexão Mel',
  'Tech Mel',
  'Agenda Aí',
  'Eagles Software',
  'Pechincha',
  'Reetroot',
];

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3")',
        }}
      >
        <div className="absolute top-4 left-4">
          <Logo className="mix-blend-screen" />
        </div>
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Guaribas Valley - O Futuro das Startups no Sertão do Piauí Começa Aqui!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Uma comunidade de inovação, tecnologia e empreendedorismo criada pelos alunos do IFPI,
            integrada ao ecossistema Vale do Mel.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('contato')}>
              Junte-se a Nós! <ArrowRight className="ml-2 inline" />
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('startups')}>
              Conheça nossas Startups
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Sobre o Guaribas Valley
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            O Guaribas Valley é uma comunidade de startups criada por alunos do IFPI Campus Picos
            para fomentar inovação, tecnologia e empreendedorismo no sertão do Piauí. Somos parte
            do ecossistema Vale do Mel e buscamos criar soluções tecnológicas que gerem impacto
            regional e global.
          </p>
        </div>
      </section>

      {/* Startups Section */}
      <section id="startups" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Startups Membros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startups.map((startup) => (
              <StartupCard key={startup} name={startup} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Integração com o Vale do Mel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            O Guaribas Valley faz parte do ecossistema local de inovação Vale do Mel, um espaço
            colaborativo que une startups, empresas e empreendedores para construir um futuro mais
            inovador no Piauí. Inspirados por comunidades como o Carnaúba Valley, seguimos
            fortalecendo nosso impacto.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Seja um Membro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Quer fazer parte do Guaribas Valley? Preencha o formulário abaixo e junte-se à nossa
            comunidade!
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;