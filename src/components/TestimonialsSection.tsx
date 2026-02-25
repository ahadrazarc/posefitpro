import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Busy Mom & Fitness Enthusiast",
      avatar: "JM",
      rating: 5,
      text: "PoseFit Pro has completely transformed my home workouts. The AI coaching feels like having a personal trainer right in my living room. My form has improved dramatically!",
    },
    {
      name: "David Park",
      role: "Software Engineer",
      avatar: "DP",
      rating: 5,
      text: "As someone who sits at a desk all day, the posture corrections have been a game-changer. The app actually helped me fix my deadlift form and prevent back pain.",
    },
    {
      name: "Amanda Johnson",
      role: "Fitness Coach",
      avatar: "AJ",
      rating: 5,
      text: "I recommend PoseFit Pro to all my clients. The AI feedback is surprisingly accurate, and it's amazing how it can track multiple people during group sessions.",
    },
    {
      name: "Ryan Chen",
      role: "College Student",
      avatar: "RC",
      rating: 5,
      text: "The progress tracking keeps me motivated. Seeing my form scores improve week by week gives me the confidence to push harder. Plus, the challenges are addictive!",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who have transformed their fitness journey with PoseFit Pro
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/30 relative overflow-hidden"
            >
              <CardContent className="p-8 md:p-10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl leading-relaxed mb-8 relative z-10 font-medium">
                  "{testimonial.text}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-lg font-bold text-primary-foreground shadow-md">
                    {testimonial.avatar}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <div className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm font-medium text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">4.9★</div>
              <div className="text-sm font-medium text-muted-foreground">App Rating</div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground">2M+</div>
              <div className="text-sm font-medium text-muted-foreground">Workouts Completed</div>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
              <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
              <div className="text-sm font-medium text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;