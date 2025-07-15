import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

interface AnimatedStatsProps {
  title: string;
  endValue: number;
  suffix?: string;
  description: string;
  delay?: number;
}

const AnimatedStats = ({ title, endValue, suffix = '', description, delay = 0 }: AnimatedStatsProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = endValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCount(Math.min(currentStep * stepValue, endValue));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setCount(endValue);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, endValue]);

  return (
    <Card className="floating-card p-6 text-center">
      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
        {Math.round(count)}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {description}
      </div>
    </Card>
  );
};

export default AnimatedStats;