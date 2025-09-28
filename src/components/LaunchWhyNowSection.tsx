import { Clock, TrendingUp, Zap } from "lucide-react";

const LaunchWhyNowSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Por que{" "}
              <span className="gradient-text">agora</span>?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              O futuro não espera. A automação e a inteligência artificial já estão redefinindo mercados. 
              Criamos a MSS Consultoria para ajudar empresas a entrarem nessa nova era com{" "}
              <span className="font-semibold text-primary">estratégia</span> e{" "}
              <span className="font-semibold text-secondary">impacto real</span>.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-medium">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Momento Certo</h3>
              <p className="text-muted-foreground leading-relaxed">
                As empresas que não se adaptarem agora ficarão para trás. 
                É o momento perfeito para implementar tecnologias transformadoras.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 md:-translate-y-4">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-medium">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Crescimento Acelerado</h3>
              <p className="text-muted-foreground leading-relaxed">
                RPA e IA não são apenas tendências - são ferramentas essenciais 
                para crescer mais rápido com menos recursos.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-medium">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Impacto Imediato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa abordagem prática garante resultados visíveis desde as primeiras semanas, 
                não apenas promessas de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchWhyNowSection;