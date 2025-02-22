import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "Expand Your Network",
    description:
      "Meet like-minded entrepreneurs, chess enthusiasts, and strategic thinkers. Build meaningful connections that last.",
  },
  {
    icon: "Lightbulb",
    title: "Sharpen Your Mind",
    description:
      "Join exclusive workshops, chess tournaments, and strategy sessions designed to challenge and grow your skills.",
  },
  {
    icon: "Rocket",
    title: "Boost Your Business",
    description:
      "Gain insights from industry leaders and leverage our platform to propel your business or career to new heights.",
  },
  {
    icon: "Calendar",
    title: "Exclusive Events",
    description:
      "Access curated events that combine chess, entrepreneurship, and networking in a dynamic and engaging way.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why Join?</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Next Move Starts Here
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Checkmate&Connect is your gateway to mastering the art of strategy, 
            whether on the chessboard or in the world of business and networking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  {/* <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span> */}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
