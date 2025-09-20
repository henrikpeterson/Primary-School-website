import { GraduationCap, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Complexe Scolaire La Grandeur</h3>
                <p className="text-sm opacity-90">Sagesse • Discipline • Réussite</p>
              </div>
            </div>
            <p className="text-sm opacity-90 max-w-md">
              École privée laïque agréée offrant une éducation de qualité du préscolaire au primaire 
              dans un environnement bienveillant et stimulant.
            </p>
            <div className="space-y-2 text-sm">
              <div className="opacity-75">
                <strong>Préscolaire:</strong> Agrément n°0-162J/MEPST/CAB/SG/CCAEPLC/SE
              </div>
              <div className="opacity-75">
                <strong>Primaire:</strong> Agrément n°0/263/P/MEPST/CAB/SG/CCAEPLC/SE
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 opacity-75" />
                <div>
                  <div>90 66 35 80 / 99 45 65 28</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 opacity-75" />
                <div className="space-y-1">
                  <div>cslgrandeur@gmail.com</div>
                  <div>grandeurpresco@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 opacity-75" />
                <div>
                  Agoè Vakpossito à 300m<br />
                  du carrefour Fish<br />
                  à côté du Carrefour Bon Berger <br /> 
                  Grand Lomé, Togo
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horaires</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Préscolaire</div>
                <div className="opacity-75">Lun-Ven: 8h à 13h</div>
              </div>
              <div>
                <div className="font-medium">Primaire</div>
                <div className="opacity-75">Lun-Ven: 7h à 14h</div>
              </div>
              <div>
                <div className="font-medium">Travaux Manuels</div>
                <div className="opacity-75">Vendredi: 14h15 à 15h15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-1 opacity-75">
              <span>© {currentYear} Complexe Scolaire La Grandeur. Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-1 mt-4 md:mt-0 opacity-75">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 fill-current" />
              <span>pour l'éducation de vos enfants</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;