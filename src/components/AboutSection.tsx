import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";

const highlights = [
  "Established in 2011 with 14+ years of excellence",
  "CRB registered and OSHA accredited",
  "Broadest portfolio of telecom & security services",
  "Highly qualified engineering team",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutImage} alt="Ivatech engineering team" className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 card-shadow hidden md:block">
              <div className="text-3xl font-heading font-bold">14+</div>
              <div className="text-sm font-body">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Your Partner of Choice in Tanzania
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              IVATECH Informatics Limited is a leading company in the Telecommunications and Energy Services sector, 
              delivering turnkey solutions to its clients. We deliver one of the industry's broadest portfolios of 
              engineering, materials and services to operators across Tanzania.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Our mission is aligning with telecommunications and energy sectors to the mutual benefit of all stakeholders, 
              while maintaining focus on continuous improvement on internationally accepted standards.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
