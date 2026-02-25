import instructorsImage from "@/assets/instructors.jpg";
import { Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Sarah Chen",
      specialty: "HIIT & Strength",
      experience: "8+ years",
      rating: 4.9,
      workouts: 120,
    },
    {
      name: "Marcus Rodriguez",
      specialty: "Yoga & Flexibility",
      experience: "10+ years",
      rating: 4.8,
      workouts: 85,
    },
    {
      name: "Alex Thompson",
      specialty: "Cardio & Endurance",
      experience: "6+ years",
      rating: 4.9,
      workouts: 95,
    },
  ];

  return (
    <section className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">

      </div>
    </section>
  );
};

export default InstructorsSection;