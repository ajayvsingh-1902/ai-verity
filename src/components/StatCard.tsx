import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  suffix?: string;
  icon: React.ReactNode;
  className?: string;
}

export const StatCard = ({ title, value, suffix, icon, className = "" }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const current = start + (numericValue - start) * easeOut;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const formatValue = (num: number) => {
    if (title.toLowerCase().includes('accuracy')) {
      return num.toFixed(1);
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return Math.round(num).toString();
  };

  return (
    <div className={`glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <div className="flex items-baseline space-x-1">
            <span className={`text-3xl font-bold text-primary counter-up ${isAnimating ? 'animate-pulse' : ''}`}>
              {formatValue(displayValue)}
            </span>
            {suffix && (
              <span className="text-primary text-lg font-semibold">{suffix}</span>
            )}
          </div>
        </div>
        <div className="text-primary/70 p-3 rounded-lg bg-primary/10">
          {icon}
        </div>
      </div>
    </div>
  );
};