import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Modern Languages, Rawalpindi",
      location: "Rawalpindi, Pakistan",
      duration: "Sep 2021 - Aug 2025",
      status: "Completed",
    },
    {
      degree: "Intermediate",
      institution: "Dr A.Q Khan College of Science And Information Technology Harley Campus Rawalpindi ",
      location: "Rawalpindi, Pakistann",
      duration: "Sep 2019 - Jul 2021",
      status: "Completed",
    },
    {
      degree: "Matriculation",
      institution: "F.G Boys High School No.1 Tariqabad Rawalpindi Cantt",
      location: "Rawalpindi, Pakistan", 
      duration: "June 2017 - July 2019",
      status: "Completed",
    }
  ];

  const achievements = [
    {
      title: "GitHub101 Workshop",
      organization: "IEEE Student Branch, NUML",
      year: "2024",
      type: "Workshop Participation"
    },
    {
      title: "Google Soft Skills Program",
      organization: "Pakistan Freelancers Association (PAFLA)",
      year: "2024", 
      type: "Certification"
    },
    {
      title: "Hands-On AI: Computer Vision Projects with Ultralytics and OpenCV,",
      organization: "LinkedIn Learning",
      year: "2024",
      type: "Certification"
    },
    {
      title: "Programming for Everybody",
      organization: "University of Michigan (Coursera)",
      year: "2023",
      type: "Course Completion"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Education & Achievements
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Academic Background
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <Badge 
                        variant={edu.status === "In Progress" ? "default" : "secondary"}
                        className={edu.status === "In Progress" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mt-1">
                        {achievement.organization}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="border-accent text-accent">
                        {achievement.year}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
