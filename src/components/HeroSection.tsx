import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-18">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              PoseFit Pro
            </span>
            <br className="hidden sm:block" />
            Your Personal AI Fitness Coach, Anytime, Anywhere
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Experience real-time form correction, intelligent rep counting, and personalized guidance—all powered by advanced AI that sees and understands your movements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="min-w-[220px] shadow-xl">
              <Download className="mr-2 h-5 w-5" />
              Download the App
            </Button>
            <Button variant="premium" size="xl" className="min-w-[220px]">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 md:pt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by 50,000+ fitness enthusiasts worldwide</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 opacity-70">
              <div className="flex items-center gap-3">
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm font-medium text-muted-foreground">App Store</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="flex items-center gap-3">
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.8★</div>
                <div className="text-sm font-medium text-muted-foreground">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Floating Elements */}
      <div className="absolute top-1/4 right-16 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-float opacity-60" />
      <div className="absolute bottom-1/3 left-12 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float opacity-40" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-secondary/10 blur-xl animate-float opacity-50" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default HeroSection;