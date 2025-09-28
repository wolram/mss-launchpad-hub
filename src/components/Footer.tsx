import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              MSS Consultoria
            </h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Transformamos processos em resultados através de RPA, Inteligência Artificial e Produtos Digitais. 
              Consultoria prática para empresas que querem crescer mais rápido.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/mssconsultoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-background/10 hover:bg-background/20 rounded-full transition-smooth hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/mssconsultoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-background/10 hover:bg-background/20 rounded-full transition-smooth hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@mssconsultoria.com.br"
                className="p-3 bg-background/10 hover:bg-background/20 rounded-full transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-smooth">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-background/70 hover:text-background transition-smooth">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-background transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-background/70">RPA</span>
              </li>
              <li>
                <span className="text-background/70">Inteligência Artificial</span>
              </li>
              <li>
                <span className="text-background/70">Produtos Digitais</span>
              </li>
              <li>
                <span className="text-background/70">Consultoria Digital</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 MSS Consultoria. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="mailto:contato@mssconsultoria.com.br"
              className="text-background/70 hover:text-background text-sm transition-smooth"
            >
              contato@mssconsultoria.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;