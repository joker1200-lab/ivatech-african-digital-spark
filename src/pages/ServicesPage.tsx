import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Radio, Shield, Zap, Cable, Camera, Flame, Server, Wrench, Wind, Lock } from "lucide-react";
import CTA from "@/components/CTA";
import heroImage from "@/assets/hero-image.jpg";

const allServices = [
  {
    icon: Radio,
    title: "Telecommunications",
    items: ["2G, 3G, WiMAX and CDMA coverage planning", "Optic fibre route planning", "PDH and SDH transmission link planning", "Site surveys and acquisition", "Landlord negotiations and permit handling", "Environmental Impact Assessments"],
  },
  {
    icon: Camera,
    title: "CCTV & Surveillance Systems",
    items: ["IP and HD CCTV systems", "AI-powered video analytics", "Facial recognition systems", "License Plate Recognition (LPR)", "People counting and heat mapping", "Remote monitoring solutions"],
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    items: ["RFID card and tag scanners", "Biometric fingerprint and palm scanners", "Facial and iris readers", "Boom gates and turnstiles", "Electric fencing", "Bollards and spike barriers"],
  },
  {
    icon: Flame,
    title: "Fire Detection Systems",
    items: ["Conventional fire alarm systems", "Addressable fire alarm systems", "Smoke and heat detectors", "Manual call points", "Sounder and strobe devices", "Central monitoring panels"],
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    items: ["Voice and data cable installation", "Fiber optic cabling", "Server room setup", "Telecommunication enclosures", "Cable management systems", "Testing and certification"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    items: ["Residential electrical services", "Commercial electrical solutions", "Industrial electrical contracting", "Panel installations and upgrades", "Power distribution systems", "Energy efficiency audits"],
  },
  {
    icon: Server,
    title: "Renewable Energy",
    items: ["Solar panel installations", "Hybrid power systems", "Battery storage solutions", "Power consumption reduction", "Energy management systems", "Green energy consulting"],
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    items: ["Inverter ducted air conditioners", "Inverter VRF units", "Packaged air conditioning", "Ventilation system design", "Climate control solutions", "Maintenance services"],
  },
  {
    icon: Shield,
    title: "Perimeter Detection",
    items: ["Perimeter breach notifications", "Cross-line detection systems", "Loitering detection alerts", "Thermal scanning systems", "Intruder alarm systems", "Off-site monitoring"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    items: ["Preventive maintenance programs", "24/7 network monitoring", "Spare parts management", "Vendor managed inventory", "Network Operations Centre", "Total Cost of Ownership optimization"],
  },
];

const ServicesPage = () => (
  <>
    <SEO title="Our Services | Ivatech Informatics Limited" description="Comprehensive telecoms, security, and energy services in Tanzania. CCTV, access control, fire detection, structured cabling, electrical and more." />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
          Comprehensive turnkey solutions for telecommunications, security and energy sectors.
        </motion.p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {allServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border card-shadow hover:card-shadow-hover transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-heading font-bold text-foreground">{service.title}</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    <CTA />
  </>
);

export default ServicesPage;
