import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Programmes", href: "#programmes" },
    { label: "Équipe", href: "#equipe" },
    { label: "Informations", href: "#informations" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <div className="bg-hero-gradient p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Complexe Scolaire</h1>
              <p className="text-sm text-primary-dark font-semibold">La Grandeur</p>
            </div>
          </div>

          {/* Contact rapide - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>90 66 35 80 / 99 45 65 28</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>cslgrandeur@gmail.com</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>90 66 35 80 / 99 45 65 28</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>cslgrandeur@gmail.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;