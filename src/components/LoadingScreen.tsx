import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [loadingText, setLoadingText] = useState("Loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const texts = ["Loading", "Creative", "Experience"];
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-24 h-24 animate-float">
            {/* Background shapes */}
            <div className="absolute inset-0 bg-gradient-logo rounded-lg transform rotate-45 animate-rotate opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-logo rounded-lg transform -rotate-45 animate-pulse-slow"></div>
            
            {/* Main logo shape */}
            <div className="absolute inset-4 bg-gradient-logo rounded-lg transform rotate-12 shadow-2xl"></div>
            <div className="absolute inset-6 bg-gradient-logo rounded-md transform -rotate-12"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          
          {/* Loading Text */}
          <p className="text-xl text-muted-foreground animate-pulse">
            {loadingText}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-logo transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-gradient-middle/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-end/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;