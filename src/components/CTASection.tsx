import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg opacity-95" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para acelerar sua empresa?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar seus processos e impulsionar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="px-10 py-5 text-xl font-semibold transition-bounce hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Fale conosco agora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-8">
            Consulta gratuita • Sem compromisso • Resposta em 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;