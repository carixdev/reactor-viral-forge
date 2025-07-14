import { Card } from "@/components/ui/card";
import { Zap, Target, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              ABOUT AI REACTOR
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            The world's first fully automated content creation platform that turns AI breakthroughs 
            into viral short-form videos across all major social platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
                <Zap className="w-8 h-8 text-background" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-primary">
              AI-Powered Creation
            </h3>
            <p className="text-muted-foreground font-inter">
              Our advanced AI models analyze trending topics, generate engaging scripts, 
              and create compelling visuals automatically.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-accent">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-glow-accent">
                <Target className="w-8 h-8 text-background" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-accent">
              Multi-Platform Reach
            </h3>
            <p className="text-muted-foreground font-inter">
              Automatically optimize and distribute content across TikTok, YouTube Shorts, 
              Instagram Reels, X, and LinkedIn.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
                <Rocket className="w-8 h-8 text-background" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-primary">
              Viral Optimization
            </h3>
            <p className="text-muted-foreground font-inter">
              Machine learning algorithms continuously optimize content for maximum 
              engagement and viral potential.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-subtle rounded-2xl border border-primary/20">
            <h3 className="text-3xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                The Future of Content is Here
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Join thousands of creators who have revolutionized their content strategy 
              with AI Reactor's cutting-edge automation technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;