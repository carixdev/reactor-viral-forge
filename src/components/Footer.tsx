import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-glow rounded-full animate-glow-pulse"></div>
                <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-core">
                  <div className="w-6 h-6 border-2 border-background rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent">
                AI REACTOR
              </h3>
            </div>
            <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
              The world's first fully automated content creation platform. Transform your social media 
              presence with AI-powered viral content generation.
            </p>
            <div className="mt-6">
              <Button variant="glow" size="lg">
                Start Automating Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-orbitron mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold font-orbitron mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><a href="/cookies" className="text-muted-foreground hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="/dmca" className="text-muted-foreground hover:text-accent transition-colors">DMCA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm font-inter">
              © 2024 AI Reactor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors font-inter">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors font-inter">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;