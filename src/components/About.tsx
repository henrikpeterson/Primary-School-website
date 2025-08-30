import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Sagesse",
      description: "Développement de l'intelligence et de la réflexion critique"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Discipline",
      description: "Formation du caractère et des bonnes habitudes"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Réussite",
      description: "Excellence académique et épanouissement personnel"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">À propos de nous</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une école d'excellence au cœur de <span className="text-primary">Grand Lomé</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Le Complexe Scolaire La Grandeur est une école privée laïque agréée, 
            dédiée à l'épanouissement et à la réussite de chaque enfant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Informations principales */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Notre mission</h3>
                <p className="text-muted-foreground">
                  Offrir une éducation de qualité dans un environnement sécurisé et bienveillant, 
                  en respectant notre devise : <strong className="text-primary">Sagesse, Discipline, Réussite</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Agréments officiels</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="font-medium text-sm">Préscolaire</div>
                    <div className="text-xs text-muted-foreground">Agrément n°0-162J/MEPST/CAB/SG/CCAEPLC/SE</div>
                  </div>
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <div className="font-medium text-sm">Primaire</div>
                    <div className="text-xs text-muted-foreground">Agrément n°0/263/P/MEPST/CAB/SG/CCAEPLC/SE</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary">Notre emplacement</div>
                  <div className="text-sm text-muted-foreground">
                    Agoè Vakpossito à 300m du carrefour Fish<br />
                    Grand Lomé, Togo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Nos valeurs fondamentales</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
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

export default About;