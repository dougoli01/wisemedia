import { useFadeIn } from "@/hooks/useFadeIn";
import Navbar from "@/components/wise/Navbar";
import Hero from "@/components/wise/Hero";
import PainPoints from "@/components/wise/PainPoints";
import Services from "@/components/wise/Services";
import SocialProof from "@/components/wise/SocialProof";
import CtaBanner from "@/components/wise/CtaBanner";
import LeadForm from "@/components/wise/LeadForm";
import Footer from "@/components/wise/Footer";

const Index = () => {
  useFadeIn();

  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <SocialProof />
      <CtaBanner />
      <LeadForm />
      <Footer />
    </>
  );
};

export default Index;
