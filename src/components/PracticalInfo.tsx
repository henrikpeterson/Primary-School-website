import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Euro, Calendar, Coffee, Wrench } from "lucide-react";

const PracticalInfo = () => {
  const schedules = [
    {
      level: "Préscolaire",
      schedule: "8h à 13h",
      description: "Lundi à vendredi",
      icon: <Clock className="h-5 w-5" />
    },
    {
      level: "Primaire", 
      schedule: "7h à 14h",
      description: "Lundi à vendredi",
      icon: <Clock className="h-5 w-5" />
    },
     {
      level: "Tous les niveaux", 
      schedule: "Mercredi",
      description: "Fin des cours a 11h30 pour tous les niveaux",
      icon: <Clock className="h-5 w-5" />
    }
  ];

  const breaks = [
    {
      time: "9h10 à 9h30",
      type: "Primaire : Récréation matinale",
      duration: "20 minutes"
    },
    {
      time: "11h30 à 12h10",
      type: "Grande récréation",
      duration: "40 minutes"
    },
    {
      time: "",
      type: "Prescolaire : 2 Récréations bien adaptees suivant les activites",
      duration: ""
    },
  ];

  const fees = [
    {
      level: "Préscolaire, Garderie",
      amount: "70.000 FCFA",
      note: "Fournitures non incluses",
      classes: "Toutes sections"
    },
    {
      level: "Primaire CP1 à CM1",
      amount: "50.000 FCFA",
      note: "Fournitures non incluses",
      classes: "5 niveaux"
    },
    {
      level: "Primaire CM2",
      amount: "55.000 FCFA",
      note: "Fournitures non incluses",
      classes: "Classe d'examen"
    }
  ];

  return (
    <section id="informations" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Informations pratiques</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Horaires</span> et tarifs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Toutes les informations importantes concernant les horaires de cours, 
            les tarifs et l'organisation de la vie scolaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Horaires */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Horaires des cours
            </h3>
            
            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{schedule.level}</div>
                      <div className="text-primary">{schedule.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{schedule.schedule}</div>
                    <div className="text-sm text-muted-foreground">{schedule.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Récréations */}
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Coffee className="h-5 w-5 mr-2 text-primary" />
                  Récréations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {breaks.map((breakTime, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{breakTime.type}</div>
                      <div className="text-xs text-muted-foreground">{breakTime.duration}</div>
                    </div>
                    <div className="text-primary font-semibold">{breakTime.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Activités spéciales */}
            <Card className="border-accent">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-primary" />
                  Activités spéciales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="font-medium text-primary">Travaux Manuels</div>
                  <div className="text-sm text-muted-foreground">Vendredi 14h15 à 15h15</div>
                  <div className="text-xs text-muted-foreground mt-1">Tous niveaux selon l'œuvre</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tarifs */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              <Euro className="h-5 w-5 mr-2 text-primary" />
              Écolage
            </h3>

            <div className="grid gap-4">
              {fees.map((fee, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{fee.level}</h4>
                        <Badge variant="outline">{fee.classes}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{fee.amount}</div>
                        <div className="text-xs text-muted-foreground">par an</div>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="text-sm text-orange-800">
                        <strong>Note:</strong> {fee.note}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Informations complémentaires */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">Informations importantes</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Les fournitures scolaires ne sont pas incluses dans l'écolage</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Le CM2 bénéficie d'un accompagnement spécialisé pour la préparation aux examens</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Possibilité de paiement échelonné (nous contacter)</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Réductions pour les familles nombreuses (à partir du 2ème enfant)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planning hebdomadaire */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Planning hebdomadaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((day) => (
                    <div key={day} className="p-3 bg-accent/30 rounded-lg">
                      <div className="font-medium">{day}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {day === 'Vendredi' ? 'Cours + TM' : 'Cours normaux'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;