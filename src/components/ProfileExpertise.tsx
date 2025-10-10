import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Code, Workflow, Database, Brain, Globe2 } from "lucide-react";

const ProfileExpertise = () => {
  const skills = [
    {
      category: "RPA & Automação",
      icon: Bot,
      items: ["UiPath (Studio, Orchestrator, REFramework)", "Automation Anywhere (V11, A360)", "Power Automate", "n8n"]
    },
    {
      category: "Desenvolvimento",
      icon: Code,
      items: ["Python", "SQL", "C#", "VBA", "JavaScript/TypeScript"]
    },
    {
      category: "Processos & Metodologia",
      icon: Workflow,
      items: ["BPMN", "ITIL V3/V4", "Agile/Scrum", "Design Thinking", "Lean/Kaizen"]
    },
    {
      category: "Dados & IA",
      icon: Brain,
      items: ["LLMs (Claude, GPT, Gemini)", "Data Analysis", "ML Basics", "Prompt Engineering"]
    },
    {
      category: "Infraestrutura",
      icon: Database,
      items: ["SQL Server", "PostgreSQL", "Oracle", "GitHub", "Microsoft 365"]
    },
    {
      category: "Idiomas",
      icon: Globe2,
      items: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Profissional)", "Alemão/Francês (Básico)"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generalista tecnológico com foco em automação, processos e IA aplicada. 
              Pragmático e tool-agnostic — uso o que resolve o problema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all border-0">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileExpertise;
