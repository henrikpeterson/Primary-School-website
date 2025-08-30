import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Crown, BookOpen, Baby } from "lucide-react";

const Team = () => {
  const teamStructure = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Direction",
      members: "1 dame",
      description: "Direction générale de l'établissement",
      color: "bg-primary"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Direction Pédagogique Primaire",
      members: "1 monsieur",
      description: "Supervision pédagogique du primaire",
      color: "bg-primary-light"
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Direction Pédagogique Préscolaire",
      members: "1 dame",
      description: "Supervision pédagogique du préscolaire",
      color: "bg-primary-dark"
    }
  ];

  const teachers = [
    {
      level: "Préscolaire",
      count: "2 dames",
      description: "Spécialisées dans l'éveil et le développement des tout-petits",
      icon: <Baby className="h-5 w-5" />,
      classes: "2 classes"
    },
    {
      level: "Primaire",
      count: "3 dames et 3 messieurs",
      description: "Enseignement fondamental selon le programme officiel",
      icon: <BookOpen className="h-5 w-5" />,
      classes: "6 classes"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Notre équipe</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une équipe <span className="text-primary">expérimentée et dévouée</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre établissement compte une équipe pédagogique qualifiée et expérimentée, 
            dirigée par une direction compétente pour assurer la réussite de vos enfants.
          </p>
        </div>

        {/* Structure de direction */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Structure de direction</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {teamStructure.map((role, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${role.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform`}>
                    {role.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{role.title}</h4>
                  <Badge variant="outline" className="mb-3">{role.members}</Badge>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corps enseignant */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-8">Corps enseignant</h3>
            <div className="space-y-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {teacher.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{teacher.level}</h4>
                          <Badge variant="secondary">{teacher.classes}</Badge>
                        </div>
                        <div className="text-primary font-medium mb-2">{teacher.count}</div>
                        <p className="text-sm text-muted-foreground">{teacher.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistiques équipe */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Notre force</h3>
            
            <div className="bg-hero-gradient p-6 rounded-xl text-primary-foreground">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">11</div>
                <div className="text-sm opacity-90">Membres de l'équipe</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-accent/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Enseignants</div>
              </div>
              <div className="text-center p-4 bg-accent/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Directeurs</div>
              </div>
            </div>

            <Card className="p-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Répartition par niveau
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Préscolaire</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-primary/20 rounded-full">
                      <div className="w-1/4 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">25%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Primaire</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-primary/20 rounded-full">
                      <div className="w-3/4 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">75%</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-3">Engagement qualité</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Formation continue des enseignants</li>
                <li>• Suivi pédagogique personnalisé</li>
                <li>• Encadrement bienveillant</li>
                <li>• Respect des programmes officiels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;