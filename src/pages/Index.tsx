import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Team from "@/components/Team";
import PracticalInfo from "@/components/PracticalInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Team />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
