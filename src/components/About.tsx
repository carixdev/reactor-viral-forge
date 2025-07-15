import { Zap, Target, Rocket } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-white mb-6">
              Why Choose{' '}
              <span className="text-primary">
                AI Reactor
              </span>
            </h2>
            <p className="text-body text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're not just another AI tool. We're your complete content automation solution, 
              designed to turn your ideas into viral short-form videos effortlessly.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="glass-card text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-h3 font-bold text-white mb-4">
                AI-Powered Creation
              </h3>
              <p className="text-body text-white/80">
                Our advanced AI models analyze trending topics, generate engaging scripts, 
                and create compelling visuals automatically.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="glass-card text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-h3 font-bold text-white mb-4">
                Multi-Platform Reach
              </h3>
              <p className="text-body text-white/80">
                Automatically optimize and distribute content across TikTok, YouTube Shorts, 
                Instagram Reels, X, and LinkedIn.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={600}>
            <div className="glass-card text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-h3 font-bold text-white mb-4">
                Viral Optimization
              </h3>
              <p className="text-body text-white/80">
                Machine learning algorithms continuously optimize content for maximum 
                engagement and viral potential.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="scaleIn" delay={800}>
          <div className="text-center">
            <div className="glass-card-featured p-8 inline-block">
              <h3 className="text-h2 font-bold text-white mb-4">
                The Future of Content is Here
              </h3>
              <p className="text-body text-white/80 max-w-2xl mx-auto">
                Join thousands of creators who have revolutionized their content strategy 
                with AI Reactor's cutting-edge automation technology.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;