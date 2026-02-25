import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the real-time tracking work?",
      answer: "PoseFit Pro uses advanced computer vision and machine learning algorithms to analyze your movements through your device's camera. Our AI models can detect key body points and provide instant feedback on your form, posture, and exercise execution without any special equipment or wearables.",
    },
    {
      question: "Do I need special equipment to use PoseFit Pro?",
      answer: "No special equipment is required! PoseFit Pro works with just your smartphone or tablet camera. However, for the best experience, we recommend having enough space to move freely and good lighting. Optional equipment like dumbbells or resistance bands can enhance certain workouts, but isn't necessary to get started.",
    },
    {
      question: "How accurate is the AI form correction?",
      answer: "Our AI has been trained on millions of exercise movements and achieves 95%+ accuracy in pose detection. The system continuously learns and improves, and we regularly update our models based on user feedback and new research in biomechanics.",
    },
    {
      question: "What types of workouts are available?",
      answer: "We offer a comprehensive library including HIIT, strength training, yoga, pilates, cardio, flexibility, and mobility workouts. New content is added weekly, featuring expert trainers and targeting all fitness levels from beginner to advanced.",
    },
    {
      question: "Is my workout data private and secure?",
      answer: "Absolutely. Your privacy is our top priority. All pose detection and analysis happens in real-time using your device's camera - no video is ever recorded or stored. Only anonymous workout metrics are saved to help improve your experience and track your progress.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings or the app store. If you cancel, you'll continue to have access to premium features until the end of your current billing period.",
    },
    {
      question: "What devices are supported?",
      answer: "PoseFit Pro is available for iOS 14+ and Android 8+. For the best experience, we recommend devices with at least 3GB RAM and a decent camera. The app is optimized for both phones and tablets.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about PoseFit Pro.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl md:rounded-2xl px-4 md:px-6 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 py-5 md:py-6">
                  <span className="text-base md:text-lg font-semibold tracking-tight">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 md:pb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-20 space-y-8">
          <h3 className="text-xl md:text-2xl font-semibold">Still have questions?</h3>
          <p className="text-muted-foreground text-base md:text-lg">
            Our support team is here to help you get the most out of PoseFit Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-sm hover:shadow-md font-medium">
              Contact Support
            </div>
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground hover:shadow-primary transition-all duration-300 cursor-pointer hover:scale-[1.02] shadow-md font-semibold">
              Live Chat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;