import React, { useEffect, useState } from 'react';

interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  secondaryColor?: string;
  showPercentage?: boolean;
  className?: string;
  animate?: boolean;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 100,
  strokeWidth = 8,
  primaryColor = '#0BCEAF',
  secondaryColor = '#E2E8F0',
  showPercentage = true,
  className = '',
  animate = true
}) => {
  const [currentProgress, setCurrentProgress] = useState(animate ? 0 : progress);
  
  // Animation effect
  useEffect(() => {
    if (!animate) {
      setCurrentProgress(progress);
      return;
    }
    
    let start = 0;
    const end = progress;
    
    if (start === end) return;
    
    const totalDuration = 1000; // 1 second
    const incrementTime = 20;
    const step = (end - start) * (incrementTime / totalDuration);
    
    const timer = setInterval(() => {
      start += step;
      setCurrentProgress(start);
      if (step > 0 && start >= end) {
        setCurrentProgress(end);
        clearInterval(timer);
      } else if (step < 0 && start <= end) {
        setCurrentProgress(end);
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [progress, animate]);
  
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={secondaryColor}
          strokeWidth={strokeWidth}
        />
        
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={primaryColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: animate ? 'stroke-dashoffset 0.5s ease-in-out' : 'none' }}
        />
      </svg>
      
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold">{Math.round(currentProgress)}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressRing;