import { ExternalLink, Github, Play, Calendar, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      title: "AI Based Fitness Training Android App",
      description: "AI Based Fitness Training Android App that provides real-time exercise feedback using computer vision and on-device machine learning. By detecting body keypoints and applying a geometrical analysis, the app guides users on proper form during workouts.",
      technologies: [],
      category: "Mobile Development",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Real-Time Violence Detection using YOLO and LSTM",
      description: "Built a real-time violence detection system by combining YOLO (You Only Look Once) for object and motion localization with LSTM (Long Short-Term Memory) networks for temporal sequence analysis. YOLO extracts spatial features from video frames, while LSTM processes the temporal dynamics to accurately detect violent behavior in live or recorded footage. Designed for applications in surveillance, public safety, and automated alert systems.",
      category: "Computer Vision",
      status: "In Progress",
      year: "2025"
    },
    {
      title: "Gesture-Controlled Gaming Interface using MediaPipe & PyAutoGUI",
      description: "Developed an interactive gaming system that replaces traditional input devices with body gestures. Utilized MediaPipe for real-time pose and hand tracking, and PyAutoGUI to simulate keyboard/mouse inputs based on user-defined gestures. Players can jump, dodge, or move using natural body motions, enabling a physically engaging gaming experience. Supports custom gesture-to-key mapping for any game, promoting health-conscious gameplay.",
      category: "Desktop Base Application",
      status: "Completed",
      year: "2023"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Development":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-secondary/50 text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Key Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                  <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 hover-scale" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-accent text-accent font-medium">
                    {project.category}
                  </Badge>
                  <Badge className={`${getStatusColor(project.status)} font-medium`}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <div className="flex flex-col items-center justify-center py-6">
                        <Github className="w-16 h-16 text-muted-foreground mb-4" />
                        <p className="text-center text-muted-foreground mb-2">
                          The source code for this project will be available soon.
                        </p>
                        <p className="text-center text-sm text-muted-foreground">
                          Stay tuned for updates!
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {project.title === "AI Based Fitness Training Android App" && (
                    <a 
                      href="https://drive.google.com/drive/folders/18UhPyw16ksSxgTFToJoUQ6NDtUmNSyS5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
