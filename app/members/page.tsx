import LinkedInIcon from "@/components/icons/linkedin-icon";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    "firstName": "Achraf",
    "lastName": "OUAJID",
    "image": "https://media.licdn.com/dms/image/v2/D4E35AQEeb9yw-PXR8g/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1707123854904?e=1741006800&v=beta&t=AOELyAf4wVMed-IxCNj8AYS3N9MMcweosBqgszDGhmk",
    "jobTitle": "Software Developer",
    "company": "Hsabati",
    "url": "https://www.linkedin.com/in/achraf-ouajid-077862227"
  },
  {
    "firstName": "Bachir",
    "lastName": "Cherrat",
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQGxoGhO6Tuozw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715523375709?e=1746057600&v=beta&t=H6er5lZHBhKoub4PYybrBy-MvhbqegXEwsuidrtUzng",
    "jobTitle": "Senior UX/UI Designer",
    "company": "Globant",
    "url": "https://www.linkedin.com/in/bachircherrat"
  },
  {
    "firstName": "Imad",
    "lastName": "Lgoud",
    "image": "https://media.licdn.com/dms/image/v2/D4E35AQGXMAzD0IA88A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738958950510?e=1741006800&v=beta&t=bfRoB35Y9ZdR995w_zinEd22QX9ntCBae1H7i492fiE",
    "jobTitle": "Agency Owner",
    "company": "Filmory Agency",
    "url": "https://www.linkedin.com/in/imad-lgoud-6366402a2/"
  },
  {
    "firstName": "Ali",
    "lastName": "Fourka",
    "image": "https://media.licdn.com/dms/image/v2/C5603AQE7uHIfKwwFHg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517584507827?e=1746057600&v=beta&t=LLHZDdGDEuI1psVHurfhbMkfKCuna0MdKrnQYImM2uo",
    "jobTitle": "Consultant IT",
    "company": "Asura Technology",
    "url": "https://www.linkedin.com/in/afourka"
  },
  {
    "firstName": "El Mehdi",
    "lastName": "Tabar",
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQEdKQKEpTKDgg/profile-displayphoto-shrink_800_800/B4EZS8URRCGgAc-/0/1738326218417?e=1746057600&v=beta&t=L35Ln2tYfmo23SwhcGblBxfDMPT7GsTfAFwBnZFOBzw",
    "jobTitle": "Web Developer",
    "company": "",
    "url": "https://www.linkedin.com/in/el-mehdi-tabar-a00677328/"
  },
  {
    "firstName": "Ali",
    "lastName": "EL Kandoussi",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQHzFlh9iDGBJQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699912259013?e=1746057600&v=beta&t=-BBTgCLLMRAbxkx1GXhtu5wQaxp3Eh2NSRAVUf-oaMU",
    "jobTitle": "Startup founder",
    "company": "Datamium",
    "url": "https://www.linkedin.com/in/ali-el-kandoussi-8854a61a1/"
  },
  {
    "firstName": "Chakib",
    "lastName": "DEKIK",
    "image": "https://res.cloudinary.com/dnamxu2im/image/upload/v1740401408/CheckAndCo/neykfieze2gtjdrvzt25.jpg",
    "jobTitle": "Product Manager / Facilitator",
    "company": "UPPER TEAM",
    "url": "https://www.linkedin.com/in/chakib-dekik/"
  },
  {
    "firstName": "Mathieu",
    "lastName": "Gaillarde",
    "image": "https://media.licdn.com/dms/image/v2/D5603AQF-GirYNX5Epw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708885609394?e=1746057600&v=beta&t=QJX3BbOlEgwn4zIROb_eHJcPzkvhe7a-xkFiEEVIkTg",
    "jobTitle": "VC Analyst",
    "company": "Azur",
    "url": "https://www.linkedin.com/in/mathieu-gaillarde/"
  },
  {
    "firstName": "Ayoub",
    "lastName": "IZIAD",
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQEABRhj-xea-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719343379652?e=1746057600&v=beta&t=j9VYdb3NteUT1KRiUVqXLMMqo8snvpfCuk3GxwiBJQI",
    "jobTitle": "Entrepreneur",
    "company": "IZI ADS",
    "url": "https://www.linkedin.com/in/iziadayoub/"
  },
  {
    "firstName": "Hicham",
    "lastName": "Houmane",
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQES3593fg7Frg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712224801905?e=1746057600&v=beta&t=Ca3v-e_4YJXpm4vkoe0xfRUURhL_D0M-891OUPaJ5wY",
    "jobTitle": "Lean-Agile Coach",
    "company": "Agile Pro Team",
    "url": "https://www.linkedin.com/in/hhoumane"
  },
  {
    "firstName": "Mehdi",
    "lastName": "Bellabal",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQHse89dzREBpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1572905812022?e=1746057600&v=beta&t=d9vB-UnEM5bR8WZHKt04AY9jP5HSX76BO_s0K5N_-RA",
    "jobTitle": "Software Engineer",
    "company": "Globant",
    "url": "https://www.linkedin.com/in/el-mehdi-bellabal-aa506a178/"
  },
  {
    "firstName": "Omar",
    "lastName": "DAFQUIH",
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQGPSyc3m96JZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727213182478?e=1746057600&v=beta&t=l6_aMMYiwvXwgV_7QxMG2K3B4a2STmwAWAJL2z2IbFY",
    "jobTitle": "Catalog design specialist (Freelancing)",
    "url": "https://www.linkedin.com/in/omar-designer"
  },
  {
    "firstName": "Mouhamadou Fallou",
    "lastName": "Konteye",
    "image": "https://media.licdn.com/dms/image/v2/C4D03AQGfOHpGvNANQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646824969440?e=1746057600&v=beta&t=wskuXtylRRF_iKZgtmpqlJUXEJEDskdMVEOX8QA33PM",
    "jobTitle": "Software Developer",
    "company": "Hsabati",
    "url": "https://www.linkedin.com/in/konteye"
  }
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            data-aos="fade-up"
          >
            <div className="flex items-start h-full">
              <CardHeader className="p-2 aspect-[3/4] w-24 h-full">
                <Image
                  src={member.image}
                  alt=""
                  width={300}
                  height={300}
                  className="aspect-square object-cover transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01] rounded-md"
                />
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-full p-3">
                <div className="flex flex-col">
                  <div className="text-lg font-medium">
                    {member.firstName}
                    <span className="text-primary ml-2">{member.lastName}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {member.jobTitle}
                    {member.company && <span>&nbsp;@ {member.company}</span>}
                  </div>
                </div>
                <Link
                  key={index}
                  href={member.url}
                  target="_blank"
                  className="hover:opacity-80 transition-all"
                >
                  <LinkedInIcon />
                </Link>
              </CardContent>
            </div>

          </Card>

        ))}
      </div>
    </div>
  );
}
