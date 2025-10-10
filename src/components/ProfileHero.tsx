import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, Github } from "lucide-react";

const ProfileHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-95" />
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-primary p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold gradient-text">
                MS
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Marlow Sousa
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Tech Lead RPA • Empreendedor • Generalista Tecnológico
          </p>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformando processos em resultados com RPA e IA. 
            De engenheiro mecânico a líder técnico, construindo automações que escalam 
            e empreendimentos que libertam.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero"
              className="px-8 py-6 text-lg transition-bounce hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em contato
            </Button>
            
            <Button 
              size="lg" 
              variant="outline-hero"
              className="px-8 py-6 text-lg transition-bounce hover:scale-105"
            >
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline-hero"
              className="px-8 py-6 text-lg transition-bounce hover:scale-105"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-6 justify-center text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow" />
              <span>8+ anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow" />
              <span>Eng. Mecânica FEI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow" />
              <span>MBA IA & Data Science</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-glow" />
              <span>Multilíngue (PT/EN/ES/DE/FR)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
