import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Ready to revolutionize your content strategy? Let's talk about how AI Reactor can transform your social media presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 border-primary/20">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-orbitron mb-2 text-primary">
                Start Your AI Journey
              </h3>
              <p className="text-muted-foreground font-inter">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 font-inter">First Name</label>
                  <Input placeholder="John" className="bg-background/50 border-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-inter">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50 border-primary/20 focus:border-primary" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-inter">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50 border-primary/20 focus:border-primary" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-inter">Company (Optional)</label>
                <Input placeholder="Your Company" className="bg-background/50 border-primary/20 focus:border-primary" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-inter">Message</label>
                <Textarea 
                  placeholder="Tell us about your content goals and how we can help..."
                  className="bg-background/50 border-primary/20 focus:border-primary min-h-32"
                />
              </div>

              <Button variant="glow" size="lg" className="w-full">
                <Zap className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-glow-accent">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-orbitron mb-2 text-accent">Email Support</h4>
                  <p className="text-muted-foreground font-inter mb-2">Get help from our expert team</p>
                  <a href="mailto:support@aireactor.com" className="text-primary hover:text-accent transition-colors font-semibold">
                    support@aireactor.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
                  <MessageSquare className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-orbitron mb-2 text-primary">Live Chat</h4>
                  <p className="text-muted-foreground font-inter mb-2">Instant support during business hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM PST</p>
                </div>
              </div>
            </Card>

            <div className="p-8 bg-gradient-subtle rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold font-orbitron mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ready to Start?
                </span>
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                Join thousands of creators who are already using AI to dominate social media.
              </p>
              <Button variant="hero" size="lg" className="w-full">
                Start Automating Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;