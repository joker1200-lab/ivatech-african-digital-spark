import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import CTA from "@/components/CTA";

const projects = [
  { image: portfolio1, title: "Commercial CCTV System", category: "Security", description: "Complete IP-based surveillance system deployment for a multi-branch financial institution across Tanzania. Included AI analytics, remote monitoring, and centralized management." },
  { image: portfolio2, title: "Enterprise Data Center", category: "Structured Cabling", description: "Full structured cabling installation for a major data center including fiber optic backbone, copper distribution, cable management, and comprehensive documentation." },
  { image: portfolio3, title: "Solar Hybrid Power System", category: "Renewable Energy", description: "Design and installation of solar-hybrid power systems for multiple remote telecom tower sites, reducing diesel consumption by over 70%." },
  { image: portfolio4, title: "Fire Detection & Alarm", category: "Fire Safety", description: "Addressable fire detection and alarm system installation for a multi-story commercial building including smoke detectors, heat detectors, and emergency notification." },
  { image: portfolio5, title: "Biometric Access Control", category: "Access Control", description: "Enterprise biometric access control system with fingerprint and facial recognition across multiple branches, integrated with time and attendance." },
  { image: portfolio6, title: "Electrical Infrastructure", category: "Electrical", description: "Complete electrical reticulation for a new commercial building including power distribution boards, UPS systems, and generator backup integration." },
];

const PortfolioPage = () => (
  <>
    <SEO title="Our Portfolio | Ivatech Informatics Limited" description="View our completed projects in telecommunications, security systems, and energy solutions across Tanzania." />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Portfolio</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
          A selection of our successfully completed projects across Tanzania.
        </motion.p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
          >
            <div className="relative overflow-hidden h-56">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full">{project.category}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <CTA />
  </>
);

export default PortfolioPage;
