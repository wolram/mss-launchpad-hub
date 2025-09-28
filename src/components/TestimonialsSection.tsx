import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Histórias de Sucesso
          </h2>
          
          <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-2xl font-light text-foreground/60 mb-8 italic">
                "Em breve, histórias de impacto dos nossos clientes."
              </p>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Estamos construindo casos de sucesso que demonstram o poder da automação, 
                  inteligência artificial e produtos digitais na transformação de negócios.
                </p>
                
                <p className="text-base text-muted-foreground">
                  Seja parte desta jornada e construa conosco a próxima história de sucesso.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;