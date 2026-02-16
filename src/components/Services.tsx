import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, Shield, Zap, Cable, Camera, Flame, Server, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Radio,
    title: "Telecommunications",
    description: "Complete 2G, 3G, WiMAX network planning, site acquisition, BSS installation, commissioning and optimization.",
  },
  {
    icon: Camera,
    title: "CCTV & Surveillance",
    description: "IP and HD CCTV systems with AI-powered analytics, facial recognition, LPR, and remote monitoring solutions.",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Biometric scanners, RFID systems, boom gates, turnstiles, electric fencing and perimeter detection.",
  },
  {
    icon: Flame,
    title: "Fire Detection",
    description: "Conventional and addressable fire detection systems, alarm installations and maintenance for commercial buildings.",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    description: "Voice and data cable installation, fiber optic networks, server room setup and structured wiring solutions.",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Residential, commercial and industrial electrical solutions including panel installations and power systems.",
  },
  {
    icon: Server,
    title: "Renewable Energy",
    description: "Solar power systems, energy-efficient solutions and sustainable power infrastructure for telecom sites.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance, vendor managed inventory, spare parts management and 24/7 network support.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-section-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Our Services</h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Delivering one of the industry's broadest portfolios of engineering, security and energy services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
