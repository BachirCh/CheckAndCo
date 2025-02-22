import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react"; // Using an icon that represents community

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <Users className="size-12 text-primary mb-2" />
                <div>
                  Ready to join
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    C&C?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Be part of a thriving network of strategists, entrepreneurs, and
              chess enthusiasts. Collaborate, learn, and grow with like-minded
              professionals. Your next big move starts here! ♟️🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://www.meetup.com/checkmate-connect-club-casablanca-chapter/" target="_blank">
                  Join Next Event
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
