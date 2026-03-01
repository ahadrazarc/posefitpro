import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Computer Vision Engineer",
      company: "ASH TECH",
      location: "Rawalpindi, Pakistan",
      duration: "Aug 2024 - Present",
      type: "Job",
      description:
        "As a Computer Vision Engineer at ASH TECH, I am responsible for designing, developing, and deploying end-to-end computer vision solutions. My work spans the entire lifecycle of vision-based systems from data collection, preprocessing, and annotation to model development, training, optimization, and deployment. I have worked extensively on tasks such as object detection, object tracking, image classification, and segmentation, utilizing both pre-trained and custom deep learning models. Additionally, I ensure the deployment of models across various platforms, optimizing them for real-time performance and cross-platform compatibility. I collaborate closely with cross-functional teams to integrate vision pipelines into production systems, contributing to both the research and engineering aspects of projects.",
    },
    {
      title: "Machine Learning Intern",
      company: "GrowUp Tech Solution",
      location: "Rawalpindi, Pakistan",
      duration: "May 2024 - Aug 2024",
      type: "Internship",
      description:
        "Contributed to the development, training, and evaluation of machine learning models, with a focus on data preprocessing and algorithm optimization. Gained experience in model training, hyperparameter tuning, and performance and deployment efficiency.",
    },
    {
      title: "Machine Learning Intern",
      company: "Interactive Speech Therapist",
      location: "Rawalpindi, Pakistan",
      duration: "Dec 2023 - June 2024",
      type: "Internship",
      description:
        "Learned Python programming and gained hands-on experience with TensorFlow for training custom datasets, as well as using YOLO for object detection with both pre-trained and custom datasets trained from scratch.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Professional Experience
          </h2>
        </div>

        <div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <Badge
                        variant="outline"
                        className="w-fit border-primary text-primary"
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
