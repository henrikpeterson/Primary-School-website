import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/school-hero.jpg";
import studentsImage from "@/assets/students-learning.jpg";

import image2 from "@/assets/IMAGE2.jpg";
import image4 from "@/assets/IMAGE4.jpg";
import image7 from "@/assets/IMAGE7.jpg";
import image8 from "@/assets/IMAGE8.jpg";
import image9 from "@/assets/IMAGE9.jpg";
import image10 from "@/assets/IMAGE10.jpg";
import image11 from "@/assets/IMAGE11.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[80vh] flex items-center bg-section-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full text-sm font-medium text-accent-foreground">
                <Star className="h-4 w-4 fill-current" />
                <span>École privée laïque agréée</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Complexe Scolaire</span>
                <br />
                <span className="bg-hero-gradient bg-clip-text text-transparent">La Grandeur</span>
              </h1>
              
              <div className="text-xl text-primary-dark font-semibold border-l-4 border-primary pl-4">
                Sagesse • Discipline • Réussite 
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Une éducation de qualité pour vos enfants, du préscolaire au primaire, 
                dans un environnement bienveillant et stimulant à Agoè Vakpossito.
              </p>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Classes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Enseignants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Niveaux</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Découvrir nos programmes
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Nous contacter
              </Button>
            </div>

            {/* Informations pratiques */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Garderie, Préscolaire & Primaire</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Programmes en français</span>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="relative">
            <Carousel 
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-2xl shadow-hero w-[600px] h-[500px]">
                    <img
                      src={image2}
                      alt="Complexe Scolaire La Grandeur - Vue principale"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-3xl font-black mb-3">Nos Élèves</h3>
                      <p className="text-white/90 text-lg font-semibold">Des moments d'apprentissage enrichissants dans nos classes interactives</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-2xl shadow-hero w-[600px] h-[500px]">
                    <img
                      src={image7}
                      alt="Complexe Scolaire La Grandeur - Élèves en apprentissage"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-3xl font-black mb-3">Initiation a l'Informatique</h3>
                      <p className="text-white/90 text-lg font-semibold">Cours d'Informatique du CE1 au CM2</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-2xl shadow-hero w-[600px] h-[500px]">
                    <img
                      src={image9}
                      alt="Complexe Scolaire La Grandeur - Vue principale"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-3xl font-black mb-3">Sortie scolaire</h3>
                      <p className="text-white/90 text-lg font-semibold">Journée de découvertes et d’aventures pour nos élèves.</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative overflow-hidden rounded-2xl shadow-hero w-[600px] h-[500px]">
                    <img
                      src={image10}
                      alt="Complexe Scolaire La Grandeur - Vue principale"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-3xl font-black mb-3">Garderie</h3>
                      <p className="text-white/90 text-lg font-semibold">Un environnement sécurisé et stimulant pour le développement de vos enfants.</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              {/* Navigation personnalisée */}
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border-border hover:bg-card" />
            </Carousel>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;