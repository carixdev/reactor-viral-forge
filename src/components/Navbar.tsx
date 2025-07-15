import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, BarChart3, Zap, Settings as SettingsIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Generator', path: '/generator', icon: Zap },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-container px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="text-xl font-bold text-white uppercase tracking-wide">
              AI REACTOR
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 glass-card px-2 py-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'glass-button-primary text-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side tagline */}
            <div className="hidden md:block text-lg font-bold text-white uppercase tracking-wide">
              AI REACTOR
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl glass-card"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'glass-button-primary text-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;