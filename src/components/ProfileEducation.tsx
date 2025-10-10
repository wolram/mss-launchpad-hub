import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const ProfileEducation = () => {
  const education = [
    {
      degree: "MBA em Inteligência Artificial Aplicada a Negócios",
      institution: "FGV - Fundação Getulio Vargas",
      period: "2025 - 2027",
      status: "Em andamento"
    },
    {
      degree: "MBA em Data Science e Analytics",
      institution: "USP/Esalq",
      period: "2020 - 2022",
      status: "Concluído"
    },
    {
      degree: "Engenharia Mecânica",
      institution: "FEI - Fundação Educacional Inaciana",
      period: "Concluído",
      status: "Bacharel"
    }
  ];

  const certifications = [
    "UiPath Certified Professional",
    "Automation Anywhere Certified",
    "ITIL V3 Foundation",
    "ITIL V4 Foundation",
    "Cobit 5 Foundation"
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Formação & Certificações
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinando engenharia tradicional com tecnologias emergentes. 
              Aprendizado contínuo como filosofia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Formação Acadêmica</h3>
              </div>
              
              {education.map((item, index) => (
                <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-all">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-foreground">
                        {item.degree}
                      </h4>
                      <p className="text-muted-foreground font-medium">
                        {item.institution}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.period}</span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Certificações Profissionais</h3>
              </div>
              
              <Card className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-subtle hover:bg-accent/50 transition-all">
                        <div className="mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3">Idiomas</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Português</span>
                      <span className="text-sm font-medium text-muted-foreground">Nativo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Inglês</span>
                      <span className="text-sm font-medium text-muted-foreground">Fluente</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Espanhol</span>
                      <span className="text-sm font-medium text-muted-foreground">Profissional</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Alemão / Francês</span>
                      <span className="text-sm font-medium text-muted-foreground">Básico</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEducation;
