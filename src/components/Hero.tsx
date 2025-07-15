import { ArrowRight, Play } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Small 3D Object - Bottom Left */}
      <div className="fixed bottom-8 left-8 z-20 w-32 h-32 opacity-80">
        <spline-viewer 
          url="https://prod.spline.design/7dPnJDsgGou4OBbV/scene.splinecode"
          className="w-full h-full rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Glassmorphism Card */}
        <div className="glass-container p-8 md:p-12">
          <div className="text-left">
            <ScrollAnimation animation="fadeInUp">
              <h2 className="text-hero font-extrabold leading-tight mb-6 text-white">
                Automated AI
                <br />
                Content.
                <br />
                Built to{' '}
                <span className="text-primary">
                  Blow Up.
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <p className="text-body text-white/80 max-w-3xl mb-8 leading-relaxed">
                AI Reactor creates short-form videos using real AI breakthroughs and tools — and posts them for you. 
                <span className="text-primary font-semibold"> Zero editing. Just virality.</span>
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="glass-button-primary text-lg px-8 py-4 flex items-center justify-center">
                  Start Automating Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="glass-button-secondary text-lg px-8 py-4 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="flex space-x-12 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10M+</div>
                  <div className="text-small text-white/60">Videos Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500K+</div>
                  <div className="text-small text-white/60">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-small text-white/60">Uptime</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;