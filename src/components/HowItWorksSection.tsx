import { Download, Play, Zap } from "lucide-react";
import appScreenshot from "@/assets/app-screenshot.mp4";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Download the App",
      description: "Get PoseFit Pro from the App Store or Google Play. Quick setup in under 2 minutes.",
    },
    {
      icon: Play,
      title: "Choose a Workout",
      description: "Select from hundreds of AI-guided workouts tailored to your fitness level and goals.",
    },
    {
      icon: Zap,
      title: "Get Real-time AI Feedback",
      description: "Receive instant form corrections, rep counting, and motivational coaching as you exercise.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-surface" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your fitness journey with AI-powered guidance in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Steps */}
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-18 h-18 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-primary transition-all duration-300 shadow-md">
                      <step.icon className="w-9 h-9 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* App Screenshot */}
              <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
      <div className="relative group">
        {/* Just the video, no frame */}
        <video
          src={appScreenshot}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[280px] md:max-w-xs mx-auto rounded-3xl object-cover aspect-[9/16] transition-all duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;