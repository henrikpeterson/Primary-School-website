import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Baby, GraduationCap, BookOpen, Users, Clock, Euro } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";

const Programs = () => {
  const programs = [
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Préscolaire",
      subtitle: "3-5 ans",
      description: "Formation des petits dans un environnement adapté et sécurisé",
      sections: [
        "Section 1 - Petits (3-4 ans)",
        "Section 2 - Grands (4-5 ans)"
      ],
      classes: 2,
      teachers: "2 dames",
      price: "45.000 FCFA",
      schedule: "8h à 13h",
      agreement: "n°0-162J/MEPST/CAB/SG/CCAEPLC/SE",
      features: [
        "Éveil et développement",
        "Activités ludiques",
        "Préparation au primaire",
        "Encadrement personnalisé"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Primaire",
      subtitle: "6-11 ans",
      description: "Enseignement fondamental selon le programme officiel",
      sections: [
        "1er cycle : CP1 au CP2",
        "2ème cycle : CE1 au CE2", 
        "3ème cycle : CM1 au CM2"
      ],
      classes: 6,
      teachers: "3 dames et 3 messieurs",
      price: "CP1-CM1: 45.000 FCFA / CM2: 50.000 FCFA",
      schedule: "7h à 14h",
      agreement: "n°0/263/P/MEPST/CAB/SG/CCAEPLC/SE",
      features: [
        "Programme français complet",
        "Anglais dès le CP1",
        "Informatique CE1-CM2",
        "Travaux manuels"
      ]
    }
  ];

  const subjects = [
    { name: "Français", level: "Tous niveaux", type: "Fondamental" },
    { name: "Anglais", level: "CP1 au CM2", type: "Secondaire" },
    { name: "Informatique", level: "CE1 au CM2", type: "Moderne" },
    { name: "Travaux Manuels", level: "Tous niveaux", type: "Pratique" }
  ];

  return (
    <section id="programmes" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nos programmes</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une éducation <span className="text-primary">complète et adaptée</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Du préscolaire au primaire, nous accompagnons chaque enfant dans son développement 
            académique et personnel avec des programmes agréés par le ministère.
          </p>
        </div>

        {/* Programmes principaux */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-hero transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {program.icon}
                </div>
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">{program.subtitle}</Badge>
                <p className="text-muted-foreground">{program.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Sections */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-primary" />
                    Sections
                  </h4>
                  <div className="space-y-2">
                    {program.sections.map((section, idx) => (
                      <div key={idx} className="text-sm bg-accent/30 p-2 rounded">{section}</div>
                    ))}
                  </div>
                </div>

                {/* Informations pratiques */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{program.classes} classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{program.schedule}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span><strong>Enseignants:</strong> {program.teachers}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Euro className="h-4 w-4 text-primary" />
                    <span><strong>Écolage:</strong> {program.price}</span>
                  </div>
                </div>

                {/* Caractéristiques */}
                <div>
                  <h4 className="font-semibold mb-3">Points forts</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="text-xs bg-primary/5 p-2 rounded text-primary font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agrément */}
                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    <strong>Agrément:</strong> {program.agreement}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Matières enseignées */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Matières enseignées</h3>
              <div className="grid gap-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                    <div>
                      <div className="font-medium">{subject.name}</div>
                      <div className="text-sm text-muted-foreground">{subject.level}</div>
                    </div>
                    <Badge variant="secondary">{subject.type}</Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="font-medium text-primary mb-2">Activités spéciales</div>
                <div className="text-sm text-muted-foreground">
                  <strong>Travaux Manuels:</strong> Vendredi 14h15 à 15h15<br />
                  <strong>Récréations:</strong> 9h-9h10 et 11h30-12h10
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={studentsImage}
                alt="Élèves en apprentissage"
                className="w-full h-80 object-cover rounded-xl shadow-card"
              />
              <div className="absolute inset-0 bg-hero-gradient/10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Inscrivez votre enfant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;