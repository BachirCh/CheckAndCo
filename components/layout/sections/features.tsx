import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Users",
    title: "Community-Driven",
    description:
      "Join a thriving network of entrepreneurs, chess enthusiasts, and professionals ready to collaborate and grow together.",
  },
  {
    icon: "Brain",
    title: "Strategic Thinking",
    description:
      "Refine your decision-making and problem-solving skills through chess, business insights, and expert-led discussions.",
  },
  {
    icon: "Handshake",
    title: "Genuine Connections",
    description:
      "Build meaningful relationships with like-minded individuals who share your passion for success and strategy.",
  },
  {
    icon: "Lightbulb",
    title: "Inspiring Events",
    description:
      "Access exclusive workshops, networking events, and chess tournaments designed to challenge and elevate you.",
  },
  {
    icon: "Trophy",
    title: "Master Your Game",
    description:
      "Learn from top entrepreneurs and chess masters, gaining insights that sharpen both your business acumen and gameplay.",
  },
  {
    icon: "Globe",
    title: "Worldwide Reach",
    description:
      "Engage with a diverse community of thinkers and innovators from different industries and backgrounds.",
  },
];

export const FeaturesSection = () => {
  return (
       <section id="features" className="container py-24 sm:py-32" data-aos="fade-up">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider" data-aos="fade-right">
        Our Unique Edge
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4" data-aos="fade-left">
        Why <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">C&C?</span>
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="200">
        We blend the <strong> strategic depth of chess</strong>, the <strong> innovation of entrepreneurship</strong>, and the <strong> power of networking</strong> to create a space where you can thrive.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }, index) => (
          <Card key={title} className="h-full bg-background border-0 shadow-none" data-aos="zoom-in" data-aos-delay={index * 100}>
            <CardHeader className="flex justify-center items-center">
              <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                <Icon name={icon as keyof typeof icons} size={24} color="hsl(var(--primary))" className="text-primary" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
