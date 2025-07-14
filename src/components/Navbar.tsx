import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, BarChart3, Brain, Settings, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Zap },
    { name: 'Generator', href: '/generator', icon: Brain },
    { name: 'Analytics', href: '/dashboard', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-primary rounded-full"></div>
              <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border border-background rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent">
              AI REACTOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-80">
              Upgrade
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border/50 space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button size="sm" className="w-full bg-gradient-primary hover:opacity-80">
                Upgrade
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;