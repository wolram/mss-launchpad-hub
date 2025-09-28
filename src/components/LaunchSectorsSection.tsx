import { 
  Factory, 
  ShoppingCart, 
  Headphones, 
  GraduationCap, 
  Heart, 
  Dog, 
  Laptop,
  Building2
} from "lucide-react";

const sectors = [
  {
    icon: Factory,
    name: "Indústria",
    description: "Automação de processos produtivos e controle de qualidade com IA preditiva.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: ShoppingCart,
    name: "Varejo",
    description: "Gestão inteligente de estoque, chatbots de vendas e análise de comportamento do cliente.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Headphones,
    name: "Serviços",
    description: "Atendimento automatizado, agendamento inteligente e otimização de workflows.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: GraduationCap,
    name: "Educação",
    description: "Plataformas de aprendizado personalizadas e automação administrativa.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Heart,
    name: "Saúde",
    description: "Prontuários inteligentes, agendamentos automatizados e análise de dados médicos.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Dog,
    name: "Pets",
    description: "Sistemas de agendamento veterinário, controle de estoque e fidelização de clientes.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Laptop,
    name: "Digital & Startups",
    description: "Produtos digitais escaláveis, automação de marketing e analytics avançados.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Building2,
    name: "Empresarial",
    description: "ERP integrado, análise financeira automatizada e dashboards executivos.",
    color: "from-teal-500 to-teal-600"
  }
];

const LaunchSectorsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Setores{" "}
              <span className="gradient-text">Impactados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa tecnologia se adapta a qualquer setor. Veja como RPA, IA e produtos digitais 
              podem transformar seu mercado específico.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {sector.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-0.5 w-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não viu seu setor aqui? <span className="font-semibold text-primary">Nossa abordagem é universal</span> - 
              podemos adaptar nossas soluções para qualquer mercado ou necessidade específica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSectorsSection;