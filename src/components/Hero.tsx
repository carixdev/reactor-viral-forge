import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/7dPnJDsgGou4OBbV/scene.splinecode"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-glow rounded-full animate-glow-pulse"></div>
              <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-core">
                <div className="w-12 h-12 border-3 border-background rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-background rounded-full"></div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent">
              AI REACTOR
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black font-orbitron leading-none mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AUTOMATED
            </span>
            <br />
            <span className="text-foreground">AI CONTENT.</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              BUILT TO
            </span>
            <br />
            <span className="text-accent">BLOW UP.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 font-inter leading-relaxed">
            AI Reactor creates short-form videos using real AI breakthroughs and tools — and posts them for you. 
            <span className="text-primary font-semibold"> Zero editing. Just virality.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Start Automating Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary/50 text-primary hover:bg-primary/10">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold font-orbitron text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-orbitron text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-orbitron text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;