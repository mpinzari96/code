import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the cost to attend?",
    answer:
      "Early bird registration is $75 per person (until March 1st), and regular registration is $95 per person. This includes all sessions, meals, and conference materials. Group discounts are available for 5 or more attendees from the same church.",
  },
  {
    question: "Who can attend the conference?",
    answer:
      "The Youth For God conference is designed for young people ages 13-25. We welcome students, young professionals, and anyone seeking to grow in their faith. Adult leaders and chaperones are also encouraged to attend.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a Bible, notebook, comfortable clothing for three days, any necessary medications, and a heart ready to learn and grow. We'll provide all conference materials, meals, and snacks.",
  },
  {
    question: "Where will I stay during the conference?",
    answer:
      "We have partnerships with several local hotels offering discounted rates for conference attendees. A list of recommended accommodations will be sent upon registration. Some local churches may also offer host family arrangements.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "We can accommodate most dietary needs including vegetarian, vegan, gluten-free, and common food allergies. Please indicate your dietary requirements on the registration form, and our catering team will ensure you're well taken care of.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Full refunds are available until April 1st. After April 1st, a $25 processing fee will be deducted. No refunds will be issued after May 1st, but registrations can be transferred to another person at no additional cost.",
  },
  {
    question: "What activities are planned?",
    answer:
      "The conference features inspiring keynote speakers, interactive workshops, worship sessions, small group discussions, recreational activities, and opportunities for fellowship. We'll also have a talent show and game night for fun community building.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1a1a1a]">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#1a1a1a]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#6B5D4F] text-balance">Find answers to common questions about Youth For God</p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#FDFBF7] border border-[#D4C4B0] rounded-lg px-6 mb-4"
                >
                  <AccordionTrigger className="text-left text-[#1a1a1a] hover:text-[#8B7355] py-6">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B5D4F] pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center bg-[#E8DED0] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#8B7355]">Still have questions?</h2>
            <p className="text-[#1a1a1a] mb-6">
              We're here to help! Reach out to our team for any additional information.
            </p>
            <div className="space-y-2">
              <p className="text-[#1a1a1a]">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@youthforgod.com" className="text-[#8B7355] hover:underline">
                  info@youthforgod.com
                </a>
              </p>
              <p className="text-[#1a1a1a]">
                <strong>Phone:</strong>{" "}
                <a href="tel:+19165550123" className="text-[#8B7355] hover:underline">
                  (916) 555-0123
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
