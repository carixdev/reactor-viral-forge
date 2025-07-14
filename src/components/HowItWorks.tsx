import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "AI Analysis",
      description: "Our AI scans trending topics, breakthrough technologies, and viral patterns across social media platforms.",
      color: "primary"
    },
    {
      number: "02", 
      title: "Content Generation",
      description: "Advanced language models create engaging scripts, while AI generates stunning visuals and animations.",
      color: "accent"
    },
    {
      number: "03",
      title: "Auto-Publishing",
      description: "Content is automatically optimized for each platform and scheduled for peak engagement times.",
      color: "primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HOW IT WORKS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Three simple steps to transform your content strategy with AI automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-card/50 border-${step.color}/20 hover:border-${step.color}/40 transition-all duration-300 hover:shadow-glow-${step.color} relative`}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className={`w-12 h-12 bg-gradient-${step.color === 'accent' ? 'to-br from-accent to-primary' : 'primary'} rounded-full flex items-center justify-center shadow-glow-${step.color} font-orbitron font-bold text-background`}>
                  {step.number}
                </div>
              </div>

              <div className="mt-8">
                <h3 className={`text-2xl font-bold font-orbitron mb-4 text-${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-card/30 rounded-xl border border-primary/20">
            <p className="text-lg font-inter">
              <span className="text-primary font-semibold">Average setup time:</span> 
              <span className="text-foreground"> 5 minutes</span> • 
              <span className="text-accent font-semibold"> Time to first viral video:</span>
              <span className="text-foreground"> 24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;