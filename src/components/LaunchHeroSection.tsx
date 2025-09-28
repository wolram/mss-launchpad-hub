import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TransformationAnimation from "./TransformationAnimation";

const LaunchHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animation Section */}
          <div className="mb-12">
            <TransformationAnimation />
          </div>
          
          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Nasce uma consultoria para{" "}
              <span className="gradient-text">
                transformar ideias
              </span>{" "}
              em{" "}
              <span className="gradient-text">
                resultados
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecnologia, automação e inteligência aplicadas a todos os setores. 
              A MSS Consultoria chegou para revolucionar a forma como sua empresa cresce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                variant="default"
                className="px-8 py-4 text-lg font-semibold shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Descubra como podemos transformar seu negócio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-accent transition-all duration-300"
              >
                Conheça nossa história
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchHeroSection;