import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "0",
      period: "7 days",
      description: "Perfect for trying out the basics",
      features: [
        "5 AI-guided workouts",
        "Basic pose detection",
        "Progress tracking",
        "Community access",
      ],
      cta: "Start Free Trial",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Monthly",
      price: "19",
      period: "per month",
      description: "Full access to all features",
      features: [
        "Unlimited AI workouts",
        "Advanced pose detection",
        "Real-time form corrections",
        "Expert-led sessions",
        "Progress analytics",
        "Premium support",
      ],
      cta: "Get Monthly",
      variant: "hero" as const,
      popular: true,
    },
    {
      name: "Yearly",
      price: "149",
      period: "per year",
      originalPrice: "228",
      description: "Best value - save 35%",
      features: [
        "Everything in Monthly",
        "Priority customer support",
        "Early access to new features",
        "Exclusive workout content",
        "Personal training consultations",
        "Custom nutrition plans",
      ],
      cta: "Get Yearly",
      variant: "secondary" as const,
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your fitness transformation today with our flexible pricing options
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group relative hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/30 ${
                plan.popular ? 'ring-2 ring-primary/50 shadow-primary scale-[1.03]' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4 md:pb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-bold">${plan.price}</span>
                    <div className="text-muted-foreground">
                      <div className="text-sm">/ {plan.period}</div>
                    </div>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground">
                      <span className="line-through">${plan.originalPrice}</span>
                      <span className="ml-2 text-accent font-medium">Save 35%</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mt-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.variant} 
                  size="xl" 
                  className="w-full shadow-md hover:shadow-lg"
                >
                  {plan.popular && <Zap className="mr-2 h-4 w-4" />}
                  {plan.cta}
                </Button>

                {/* Free Trial Note */}
                {plan.name !== "Free Trial" && (
                  <p className="text-xs text-muted-foreground text-center">
                    Includes 7-day free trial
                  </p>
                )}
              </CardContent>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                plan.popular ? 'bg-primary' : 'bg-gradient-primary'
              }`} />
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/20 shadow-md">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <span className="font-semibold text-lg">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Not satisfied? Get a full refund within 30 days, no questions asked. 
            We're confident you'll love PoseFit Pro and see real results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;