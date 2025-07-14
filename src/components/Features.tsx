import { Card } from "@/components/ui/card";
import { 
  Bot, 
  Zap, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Shield,
  Sparkles,
  Target,
  Infinity
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Script Generation",
      description: "Advanced language models create engaging, viral-ready scripts based on trending topics and user interests.",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "Visual AI Creation",
      description: "Generate stunning visuals, animations, and effects that capture attention and drive engagement.",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Real-time monitoring of viral trends across all platforms to ensure your content stays relevant.",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered posting schedule optimization for maximum reach and engagement on each platform.",
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights and metrics to track your content's performance and optimize strategy.",
      color: "primary"
    },
    {
      icon: Target,
      title: "Multi-Platform Optimization",
      description: "Automatically adapt content format, length, and style for TikTok, Instagram, YouTube, X, and LinkedIn.",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description: "Seamless integration with all major platforms for instant content distribution and publishing.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "Advanced content filtering and brand safety measures to protect your reputation and compliance.",
      color: "accent"
    },
    {
      icon: Infinity,
      title: "24/7 Automation",
      description: "Continuous content creation and publishing without any manual intervention required.",
      color: "primary"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              POWERFUL FEATURES
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Everything you need to dominate social media with AI-powered content automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 border-${feature.color}/20 hover:border-${feature.color}/40 transition-all duration-300 hover:shadow-glow-${feature.color} group hover:-translate-y-1`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-${feature.color === 'accent' ? 'to-br from-accent to-primary' : 'primary'} rounded-lg flex items-center justify-center shadow-glow-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold font-orbitron mb-3 text-${feature.color}`}>
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-subtle rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ready to Scale Your Content?
              </span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto font-inter">
              Join the content revolution and let AI handle the heavy lifting while you focus on growing your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;