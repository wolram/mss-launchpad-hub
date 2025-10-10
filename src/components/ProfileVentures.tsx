import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Rocket, Target, TrendingUp } from "lucide-react";

const ProfileVentures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Jornada Empreendedora
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Construindo dois empreendimentos em paralelo ao trabalho como Tech Lead. 
              Meta: R$20k MRR líquidos por 6 meses consecutivos para transição full empreendedor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-strong border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">MSS Consultoria</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  Automation-first: RPA + IA para processos de negócio
                </p>
                <p className="text-muted-foreground">
                  Consultoria especializada em automação de processos robóticos e inteligência 
                  artificial aplicada. Foco em PMEs e mid-market que precisam de eficiência 
                  operacional e escala.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span>Serviços: RPA Health Check, Implementação, Sustentação</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>Fase: Validação de ICP e primeiros clientes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-strong border-0 bg-gradient-to-br from-secondary/10 to-accent/10">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Startup SaaS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  Journaling + Life-Ops automatizado e Observability para RPA/IA
                </p>
                <p className="text-muted-foreground">
                  Plataforma que combina journaling automático com observabilidade avançada 
                  para operações de RPA e IA. Captura dados de múltiplas fontes (Apple Health, 
                  M365, MCPS) para insights acionáveis.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span>Target: Profissionais tech e líderes de RPA/IA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>Fase: MVP em desenvolvimento</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Modelo de Transição</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                Mantendo atuação como PJ (Tech Lead RPA) como colchão de segurança e 
                construção de portfólio, enquanto escalo os empreendimentos próprios. 
                A meta é clara: provar tração consistente antes de dar o salto.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-white font-semibold">
                <Target className="h-5 w-5" />
                <span>Meta: R$20k MRR × 6 meses consecutivos</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileVentures;
