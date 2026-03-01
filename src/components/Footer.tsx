import { Heart, Code, Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Code className="w-6 h-6" />
              <span className="text-2xl font-bold">Abdul Ahad Raza</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Passionate software developer specializing in AI/ML, software engineering, and frontend development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#skills" className="hover:text-primary transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="flex items-center gap-2 text-muted-foreground mb-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:abdulahadraza@example.com" className="hover:text-primary transition-colors duration-200">
                ahadrazarc@gmail.com
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ahadrazarc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/ahadrazarc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/ahadrazarc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
