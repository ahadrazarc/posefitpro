import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Computer Vision Engineer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-main"></div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-start/10 rounded-full animate-float blur-xl"></div>
        <div
          className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-middle/10 rounded-full animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-end/10 rounded-full animate-float blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold break-words">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Abdul Ahad Raza
              </span>
            </h1>

            {/* Typing animation text */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
                I'm a{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Vision Engineer with a strong background in
            developing intelligent vision-based systems. I specialize in
            building solutions that help machines understand and interpret
            visual data, solving real-world problems using advanced techniques
            in image analysis, object recognition, and visual perception.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
