import { Bot, Brain, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "RPA",
    subtitle: "Automação de Processos Robóticos",
    description: "Automatize tarefas repetitivas e ganhe eficiência. Elimine trabalhos manuais e foque no que realmente importa para o crescimento da sua empresa.",
    features: ["Redução de custos operacionais", "Maior precisão nas operações", "Liberação da equipe para tarefas estratégicas"]
  },
  {
    icon: Brain,
    title: "IA",
    subtitle: "Inteligência Artificial",
    description: "Use inteligência artificial para tomar decisões melhores e mais rápidas. Transforme dados em insights acionáveis para seu negócio.",
    features: ["Análise preditiva avançada", "Otimização de processos", "Personalização em escala"]
  },
  {
    icon: Smartphone,
    title: "Produtos Digitais",
    subtitle: "Soluções Sob Medida",
    description: "Criamos soluções sob medida que geram escala e receita. Do conceito ao lançamento, desenvolvemos produtos que realmente funcionam.",
    features: ["Aplicativos web e mobile", "Sistemas personalizados", "Integrações completas"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para acelerar sua transformação digital e maximizar resultados
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-smooth border-0 shadow-medium bg-card/50 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full gradient-bg w-16 h-16 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold gradient-text">
                  {service.title}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {service.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;