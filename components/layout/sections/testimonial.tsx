"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Omar Khalil",
    userName: "Startup Founder",
    comment:
      "Checkmate&Connect helped me refine my strategic thinking—both in chess and in business. Every move I make now is more calculated and impactful.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofia Benali",
    userName: "Investment Advisor",
    comment:
      "The networking opportunities here are unmatched. I’ve met game-changers who have truly elevated my entrepreneurial journey.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Yassine Rachid",
    userName: "Business Consultant",
    comment:
      "Applying chess principles to business decision-making has transformed my approach to problem-solving. Brilliant community and insights!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Hanae Idrissi",
    userName: "Tech Entrepreneur",
    comment:
      "From strategy workshops to high-value connections, Checkmate&Connect is a must for ambitious entrepreneurs. Highly recommended!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Karim El Amrani",
    userName: "Growth Strategist",
    comment:
      "The perfect blend of chess and business strategy. I’ve gained insights that give me an edge in negotiations and scaling my ventures.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Leaders & Innovators Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map(({ image, name, userName, comment, rating }) => (
            <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  {`"${comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{name}</CardTitle>
                      <CardDescription>{userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
