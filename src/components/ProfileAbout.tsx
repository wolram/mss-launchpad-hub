import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Globe } from "lucide-react";

const ProfileAbout = () => {
  const values = [
    {
      icon: Zap,
      title: "Eficiência Radical",
      description: "Direto ao ponto. Zero firulas. Máximo resultado com mínimo esforço desperdiçado."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Contínuo",
      description: "Generalista que usa IA como superpoder para navegar entre múltiplas tecnologias."
    },
    {
      icon: Globe,
      title: "Liberdade por Design",
      description: "Construindo patrimônio e independência através de tecnologia e empreendedorismo."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Da Engenharia ao Futuro Digital
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Minha trajetória começou na engenharia mecânica tradicional (Festo), 
                  evoluindo para automação de processos em grandes empresas (Deloitte, DBC Company).
                </p>
                <p>
                  Hoje, como <strong className="text-foreground">Tech Lead de RPA</strong>, 
                  equilibro liderança técnica em um grande banco brasileiro com a construção 
                  de dois empreendimentos próprios.
                </p>
                <p>
                  Não sou especialista em uma única tecnologia — sou um{" "}
                  <strong className="text-foreground">generalista estratégico</strong> que 
                  usa IA para navegar entre múltiplos contextos e entregar soluções práticas.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="shadow-medium hover:shadow-strong transition-all border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-primary">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
