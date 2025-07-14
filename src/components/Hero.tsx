import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Small 3D Object - Bottom Left */}
      <div className="fixed bottom-8 left-8 z-20 w-48 h-48 opacity-80">
        <spline-viewer 
          url="https://prod.spline.design/7dPnJDsgGou4OBbV/scene.splinecode"
          className="w-full h-full rounded-2xl"
        />
      </div>

      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-background/80 backdrop-blur-sm"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Glassmorphism Card */}
        <div className="bg-card/20 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <ScrollAnimation animation="fadeInUp">
            {/* Logo */}
            <div className="mb-8">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-glow rounded-full animate-glow-pulse"></div>
                <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-core">
                  <div className="w-10 h-10 border-2 border-background rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-background rounded-full"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent">
                AI REACTOR
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={200}>
            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-orbitron leading-tight mb-6">
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
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-inter leading-relaxed">
              AI Reactor creates short-form videos using real AI breakthroughs and tools — and posts them for you. 
              <span className="text-primary font-semibold"> Zero editing. Just virality.</span>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={600}>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" className="group bg-gradient-primary hover:opacity-90">
                Start Automating Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={800}>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-orbitron text-primary">10M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-orbitron text-accent">500+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-orbitron text-primary">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Auto</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;