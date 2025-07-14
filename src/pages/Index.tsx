import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
