import { MapPin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-text bg-clip-text text-transparent">
            About Me
          </h2>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <Avatar className="relative w-64 h-64 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage 
                  src={profilePhoto} 
                  alt="Abdul Ahad Raza - Computer Vision Engineer" 
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold">AR</AvatarFallback>
              </Avatar>
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Abdul Ahad Raza</h3>
              <p className="text-lg text-primary font-medium">Computer Vision Engineer</p>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Rawalpindi, Pakistan</span>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ahadrazarc@gmail.com</span>
              </div>
            </div>

            {/* Bio */}
            <div className="prose prose-lg text-muted-foreground">
              <p style={{ textAlign: "justify" }}>
                I'm Abdul Ahad Raza, a Computer Vision Engineer with a Bachelor's degree in Computer Science from the
                National University of Modern Languages (NUML). I specialize in building intelligent systems that help computers understand the visual world.
                My expertise lies in real-time image processing, object detection, and deploying scalable ML pipelines.
                I’m driven by a deep interest in AI, and I continuously explore emerging technologies to design impactful solutions that make a difference.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/ahadrazarc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View LinkedIn
                </Button>
              </a>

              {/* CV Download Button */}
              <a href="/AbdulAhadRazaCV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download CV
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">2+</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">10+</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
