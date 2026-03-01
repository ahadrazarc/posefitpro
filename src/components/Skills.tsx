import { Brain, Code, Database, Cpu, Globe, GitBranch, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "scikit-learn" },
        { name: "OpenCV" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
        { name: "C#" }
      ]
    },
    {
      title: "Framework",
      skills: [
        { name: ".NET" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Qt Desginer" }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { name: "GitHub" },
        { name: "Git" }
      ]
    },
    {
      title: "Testing",
      skills: [
        { name: "Selenium" }
      ]
    },
    {
      title: "Mobile App Development",
      skills: [
        { name: "Kotlin" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="bg-secondary/40 hover:bg-secondary/60 text-foreground font-medium transition-colors"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
