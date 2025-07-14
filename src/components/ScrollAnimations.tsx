import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'opacity-0 transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'fadeInUp':
        return `${baseClasses} translate-y-8`;
      case 'fadeInLeft':
        return `${baseClasses} -translate-x-8`;
      case 'fadeInRight':
        return `${baseClasses} translate-x-8`;
      case 'scaleIn':
        return `${baseClasses} scale-90`;
      case 'slideInUp':
        return `${baseClasses} translate-y-12`;
      default:
        return `${baseClasses} translate-y-8`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
    </div>
  );
};

export default ScrollAnimation;