import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-logo-appear">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-glow rounded-full animate-glow-pulse"></div>
            <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-core">
              <div className="w-16 h-16 border-4 border-background rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent mb-2">
            AI REACTOR
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-80 mx-auto">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary shadow-glow-primary transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-muted-foreground mt-4 font-inter">
            Initializing AI Systems... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;