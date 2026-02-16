import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Ivatech Informatics Limited offer?",
    a: "We offer a comprehensive range of services including telecommunications network planning and installation, CCTV surveillance systems, access control systems, fire detection and alarm systems, structured cabling, electrical services, renewable energy solutions, HVAC systems, and ongoing maintenance and support.",
  },
  {
    q: "Where is Ivatech located and which areas do you serve?",
    a: "Ivatech is headquartered in Dar es Salaam, Tanzania, at the 3rd Floor, EAGT Building. We serve clients across all regions of Tanzania, from major cities to remote locations.",
  },
  {
    q: "Is Ivatech a registered and accredited company?",
    a: "Yes, Ivatech is registered with the Contractors Registration Board (CRB) as a specialist contractor in Telecommunications, ICT & Security Systems. We are also OSHA accredited, ensuring we meet the highest health and safety standards.",
  },
  {
    q: "What types of CCTV systems do you install?",
    a: "We install both analog/HD and IP-based CCTV systems. Our solutions include AI-powered analytics, facial recognition, license plate recognition (LPR), people counting, perimeter detection, loitering detection, cross-line detection, and thermal/fever detection systems.",
  },
  {
    q: "Do you provide maintenance services after installation?",
    a: "Yes, we provide comprehensive maintenance and support services including preventive maintenance, spare parts management, vendor managed inventory, and 24/7 network monitoring. Our goal is to minimize downtime and reduce total cost of ownership.",
  },
  {
    q: "How long has Ivatech been in business?",
    a: "Ivatech Informatics Limited was established in 2011 and has over 14 years of experience delivering turnkey solutions in the telecommunications, security, and energy sectors across Tanzania.",
  },
  {
    q: "Can you handle large-scale multi-site projects?",
    a: "Absolutely. We have a proven track record of delivering multi-site projects across Tanzania, including bank branch rollouts, telecom site deployments, and commercial building installations. Our project management approach ensures on-time delivery within budget.",
  },
  {
    q: "How do I request a quote?",
    a: "You can request a quote by calling us at +255 788 222 899, emailing ivatech@ivatech.co.tz, or visiting our contact page. Our team will assess your requirements and provide a detailed proposal.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:card-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-sm md:text-base py-4 hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
