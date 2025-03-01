import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Personalized Business Strategy",
    description:
      "Tailored guidance to help you make the right entrepreneurial moves and scale your business efficiently.",
  },
  {
    title: "Exclusive Networking Events",
    description:
      "Gain access to high-impact meetups where you can connect with industry leaders and visionaries.",
  },
  {
    title: "Chess-Based Problem Solving",
    description:
      "Refine your strategic thinking by applying chess principles to real-world business challenges.",
  },
  {
    title: "Mastermind Sessions",
    description:
      "Engage in focused discussions with like-minded entrepreneurs to share insights and accelerate growth.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 overflow-hidden" data-aos="fade-up">
    <h2 className="text-lg text-primary text-center mb-2 tracking-wider" data-aos="fade-right">
      Our Services
    </h2>

    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4" data-aos="fade-left">
      Empowering You to Win
    </h2>
    <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8" data-aos="fade-up" data-aos-delay="200">
      Whether you&apos;re scaling a business or mastering strategy, our tailored services help you <span className="text-gray-100 font-medium"> think ahead and stay ahead</span>.
    </h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
      {serviceList.map(({ title, description }, index) => (
        <Card
          key={title}
          className="bg-muted/60 dark:bg-card h-full relative"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </section>
  );
};
