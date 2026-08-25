import { motion, useInView } from "framer-motion";
import { portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6 } from "@/lib/images";
import { useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  { image: portfolio1, title: "Commercial CCTV System", category: "Security", description: "Complete surveillance system for a multi-branch commercial institution." },
  { image: portfolio2, title: "Data Center Cabling", category: "Structured Cabling", description: "Enterprise-grade structured cabling for a major data center facility." },
  { image: portfolio3, title: "Solar Telecom Site", category: "Renewable Energy", description: "Hybrid solar power system for remote telecommunications site." },
  { image: portfolio4, title: "Fire Detection System", category: "Fire Safety", description: "Addressable fire detection and alarm system for a commercial complex." },
  { image: portfolio5, title: "Biometric Access Control", category: "Access Control", description: "Multi-site biometric access control with time & attendance integration." },
  { image: portfolio6, title: "Electrical Infrastructure", category: "Electrical", description: "Complete electrical reticulation for a new commercial building." },
];

const PortfolioSection = () => {
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
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Our Recent Projects</h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            A selection of our completed projects across various sectors in Tanzania.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:bg-secondary/90 transition-colors"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
