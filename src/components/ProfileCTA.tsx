import { Button } from "@/components/ui/button";
import { Mail, LinkedinIcon, MessageCircle } from "lucide-react";

const ProfileCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-95" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vamos conversar?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Seja para colaborar em projetos, discutir automação e IA, ou explorar oportunidades — 
            estou sempre aberto a conversas interessantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="px-10 py-6 text-xl font-semibold transition-bounce hover:scale-105"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email
            </Button>
            
            <Button 
              size="lg" 
              variant="outline-hero"
              className="px-10 py-6 text-xl font-semibold transition-bounce hover:scale-105"
            >
              <LinkedinIcon className="mr-3 h-6 w-6" />
              LinkedIn
            </Button>
            
            <Button 
              size="lg" 
              variant="outline-hero"
              className="px-10 py-6 text-xl font-semibold transition-bounce hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-8">
            Resposta em 24-48h • Português/English • Direto ao ponto
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCTA;
