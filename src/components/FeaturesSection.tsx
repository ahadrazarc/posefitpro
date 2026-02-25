import { Brain, Target, TrendingUp, Smartphone, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Pose Detection Technology",
      description: "Advanced AI analyzes your movements in real-time using computer vision and machine learning algorithms.",
      accent: "primary",
    },
    {
      icon: Target,
      title: "Smart Feedback",
      description: "Get instant corrections for form, posture, and technique. Prevent injuries with precise guidance.",
      accent: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and personalized insights.",
      accent: "accent",
    },
    {
      icon: Smartphone,
      title: "Works on Any Device",
      description: "No special equipment needed. Your smartphone camera is all you need to get started.",
      accent: "primary",
    },
    {
      icon: Users,
      title: "Community Challenges",
      description: "Join fitness challenges, compete with friends, and stay motivated with our global community.",
      accent: "secondary",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your workout data stays on your device. We prioritize your privacy and data security.",
      accent: "accent",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Advanced AI</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of fitness with cutting-edge technology that understands your body and optimizes your workouts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/30"
            >
              <CardContent className="p-6 md:p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    feature.accent === 'primary' ? 'bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary' :
                    feature.accent === 'secondary' ? 'bg-secondary/15 text-secondary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:shadow-lg' :
                    'bg-accent/15 text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg'
                  }`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
            Ready to experience the future of fitness?
          </p>
          <Button variant="hero" size="xl" className="shadow-xl hover:shadow-primary">
            Start Your Free Trial Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;