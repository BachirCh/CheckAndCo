import { FloatingChessPieces } from "@/components/layout/floating-pieces";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { SparklesCore } from "@/components/layout/sparkles";

export const metadata = {
  title: "Checkmate&Connect | Where Chess Meets Business",
  description: "Join a vibrant community of chess enthusiasts and entrepreneurs. Discover events, tournaments, and networking opportunities that blend strategic thinking with business acumen.",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Checkmate&Connect | Where Chess Meets Business",
    description: "Join a vibrant community of chess enthusiasts and entrepreneurs. Discover events, tournaments, and networking opportunities that blend strategic thinking with business acumen.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Checkmate&Connect | Where Chess Meets Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Checkmate&Connect | Where Chess Meets Business",
    description: "Join a vibrant community of chess enthusiasts and entrepreneurs. Discover events, tournaments, and networking opportunities that blend strategic thinking with business acumen.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={700}
          className="w-full h-100dvh"
          particleColor={"#FFFFFF"}
        />
      </div>

      {/* Floating chess pieces */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <FloatingChessPieces count={25} />
      </div>
      <div className="z-50">
        <HeroSection />
        <SponsorsSection />
        <BenefitsSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialSection />
        {/* <TeamSection /> */}
        <CommunitySection />
        {/* <PricingSection /> */}
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </>
  );
}
