import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      value: "90 66 35 80 / 99 45 65 28",
      action: "tel:90663580",
      actionText: "Appeler"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email principal",
      value: "cslgrandeur@gmail.com",
      action: "mailto:cslgrandeur@gmail.com",
      actionText: "Écrire"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email préscolaire",
      value: "grandeurpresco@gmail.com", 
      action: "mailto:grandeurpresco@gmail.com",
      actionText: "Écrire"
    }
  ];

  const openingHours = [
    { day: "Lundi - Vendredi", hours: "7h00 - 15h30" },
    { day: "Samedi", hours: "Sur rendez-vous" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nous contacter</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à <span className="text-primary">inscrire votre enfant</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans les démarches d'inscription.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold">Nous joindre</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{contact.title}</h4>
                        <p className="text-muted-foreground mb-3">{contact.value}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={contact.action}>{contact.actionText}</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Localisation */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Notre adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="font-semibold text-primary">Complexe Scolaire La Grandeur</div>
                  <div className="text-muted-foreground">
                    Agoè Vakpossito à 300m du carrefour Fish<br />
                    à côté du Carrefour Bon Berger <br /> 
                    Grand Lomé, Togo
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <Navigation className="h-4 w-4 mr-2" />
                      Voir sur Google Maps
                    </a>
                  </Button>
                  <Button variant="cta" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Demander des directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Formulaire de contact rapide */}
            <Card>
              <CardHeader>
                <CardTitle>Demande d'information rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="Votre numéro"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Niveau d'intérêt</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Préscolaire</option>
                    <option>Primaire</option>
                    <option>Les deux niveaux</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    placeholder="Votre message ou questions..."
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none"
                  ></textarea>
                </div>
                <Button variant="hero" className="w-full">
                  Envoyer ma demande
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Horaires et informations complémentaires */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Horaires d'accueil</h3>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Bureau d'accueil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-accent/30 rounded-lg">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Informations rapides */}
            <Card className="bg-hero-gradient text-primary-foreground">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold">Inscriptions</div>
                    <div className="text-sm opacity-90">Ouvertes toute l'année</div>
                  </div>
                  <div className="border-t border-primary-foreground/20 pt-4">
                    <div className="text-sm">
                      <strong>Réponse garantie</strong><br />
                      sous 24h
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avantages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pourquoi nous choisir ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>École agréée par le ministère</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Équipe pédagogique expérimentée</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Environnement sécurisé</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Suivi personnalisé</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>Emplacement accessible</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;