import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Stack />
      <Contact />
    </div>
  );
};

export default Index;
