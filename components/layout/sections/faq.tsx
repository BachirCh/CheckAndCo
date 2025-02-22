import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Where do the events take place?",
    answer: "Currently, events are held at Commons Zerktouni, Casablanca, every Wednesday at 6 PM. They are free and open to everyone!",
    value: "item-1",
  },
  {
    question: "What kind of events does Checkmate&Connect organize?",
    answer:
      "Our community hosts chess tournaments, entrepreneurship meetups, and networking sessions designed to bring like-minded people together.",
    value: "item-2",
  },
  {
    question:
      "How can I book a seat for an event?",
    answer:
      "Simply head to our events page and reserve your spot—it’s quick and easy!",
    value: "item-3",
  },
  {
    question: "Can I suggest a topic or host a workshop?",
    answer: "Absolutely! We welcome fresh ideas. Reach out via our Contact page, and let’s discuss.",
    value: "item-4",
  },
  {
    question:
      "Is Checkmate&Connect open to beginners?",
    answer: "Yes! Whether you’re new to chess, business, or networking, our events cater to all levels.",
    value: "item-5",
  },
  {
    question:
      "Can I bring a friend?",
    answer: "Of course! The more, the merrier. Invite your friends and grow the community together.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
