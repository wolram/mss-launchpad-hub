import { CheckCircle, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenhado para gerar impacto real e mensurável no seu negócio."
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Implementamos soluções rapidamente, sem burocracias desnecessárias."
  },
  {
    icon: CheckCircle,
    title: "Qualidade",
    description: "Utilizamos as melhores práticas e tecnologias mais avançadas do mercado."
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Sobre a MSS Consultoria
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  Somos uma consultoria feita para a era digital. Nossa missão é simplificar processos, aplicar tecnologia de ponta e ajudar sua empresa a crescer de forma sustentável.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com expertise em RPA, Inteligência Artificial e desenvolvimento de produtos digitais, transformamos desafios complexos em oportunidades de crescimento. Acreditamos que a tecnologia deve servir às pessoas, não o contrário.
                </p>
                
                <div className="flex items-center space-x-4 text-sm font-medium text-primary">
                  <span className="px-4 py-2 bg-primary/10 rounded-full">Inovação</span>
                  <span className="px-4 py-2 bg-secondary/10 rounded-full">Praticidade</span>
                  <span className="px-4 py-2 bg-primary/10 rounded-full">Resultados</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 rounded-full gradient-bg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-smooth">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;