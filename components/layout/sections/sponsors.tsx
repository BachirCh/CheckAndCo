"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
interface sponsorsProps {
  url: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    url: "https://images.squarespace-cdn.com/content/v1/670bceae532e273dff6e5e8e/92bac0a0-5bc5-4950-9b18-d9ca533177cd/Artboard+152+copy.png?format=1500w",
    name: "Acmebrand",
  },
  {
    url: "https://media.licdn.com/dms/image/v2/D4E0BAQED7kgO7DGZeg/company-logo_200_200/company-logo_200_200/0/1682441585814/agileproteam_logo?e=1748476800&v=beta&t=w8DS-_HAQwdtDypvBif74GIRn8HKpwv1cm5HQXEY9Cc",
    name: "Acmelogo",
  },
  {
    url: "https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/385897034_800799962045990_3058658528700408183_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=w9OXE7ZRNqAQ7kNvgFFbfDC&_nc_oc=AdjGA5HPmWnQhJw2jL-9zliVNj-_fb2AYZmpUitEEWBX7hY-Pk-UIVsnTKO50BI8N88&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=A6IsXgAfTYKsZR9eHXXOokk&oh=00_AYAqbcgRgAOCDnmyx0mOwggcJKvAY9I3YqlnC4xxZsnL5w&oe=67C18355",
    name: "Acmesponsor",
  },
  {
    url: "https://cdn.prod.website-files.com/66d4bcfca71341e7d4a2f6a7/676176828b868fadcb7e7615_logo.webp",
    name: "Acmeipsum",
  },
  {
    url: "https://www.levelupproduct.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-level-up.4984d283.png&w=128&q=75",
    name: "Acme",
  },
  {
    url: "https://www.jodor.ma/_next/static/media/jodor2-text-white.e08f7a8c.svg",
    name: "Acme",
  },
  {
    url: "https://media.licdn.com/dms/image/v2/C4D0BAQGxPdhK5xwhNA/company-logo_200_200/company-logo_200_200/0/1630547283402/upper_team_logo?e=1748476800&v=beta&t=1r61bx2CsDzKdhHPvftIufIXDesLGgVD12VhCneeM7I",
    name: "Acme",
  },
  {
    url: "https://yahyasabraoui.com/wp-content/uploads/2023/08/Logo-1.png",
    name: "Acme",
  },

];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6 ">
        <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
          Our Partners
        </span>

      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ url, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Image
                src={url}
                sizes="32"
                width={40}
                height={40}
                alt="logo"
                className="mr-2 h-16 w-fit max-w-28 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
