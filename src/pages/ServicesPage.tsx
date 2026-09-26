import SEO from "@/components/SEO";
import { heroImage } from "@/lib/images";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import iconTelecom from "@/assets/icon-telecom.png";
import iconCctv from "@/assets/icon-cctv.png";
import iconAccess from "@/assets/icon-access.png";
import iconFire from "@/assets/icon-fire.png";
import iconCabling from "@/assets/icon-cabling.png";
import iconElectrical from "@/assets/icon-electrical.png";
import iconSolar from "@/assets/icon-solar.png";
import iconHvac from "@/assets/icon-hvac.png";
import iconPerimeter from "@/assets/icon-perimeter.png";
import iconMaintenance from "@/assets/icon-maintenance.png";

const allServices = [
  {
    icon: iconTelecom,
    title: "Telecommunications",
    items: ["2G, 3G, WiMAX and CDMA coverage planning", "Optic fibre route planning", "PDH and SDH transmission link planning", "Site surveys and acquisition", "Landlord negotiations and permit handling", "Environmental Impact Assessments"],
  },
  {
    icon: iconCctv,
    title: "CCTV & Surveillance Systems",
    items: ["IP and HD CCTV systems", "AI-powered video analytics", "Facial recognition systems", "License Plate Recognition (LPR)", "People counting and heat mapping", "Remote monitoring solutions"],
  },
  {
    icon: iconAccess,
    title: "Access Control Systems",
    items: ["RFID card and tag scanners", "Biometric fingerprint and palm scanners", "Facial and iris readers", "Boom gates and turnstiles", "Electric fencing", "Bollards and spike barriers"],
  },
  {
    icon: iconFire,
    title: "Fire Detection Systems",
    items: ["Conventional fire alarm systems", "Addressable fire alarm systems", "Smoke and heat detectors", "Manual call points", "Sounder and strobe devices", "Central monitoring panels"],
  },
  {
    icon: iconCabling,
    title: "Structured Cabling",
    items: ["Voice and data cable installation", "Fiber optic cabling", "Server room setup", "Telecommunication enclosures", "Cable management systems", "Testing and certification"],
  },
  {
    icon: iconElectrical,
    title: "Electrical Services",
    items: ["Residential electrical services", "Commercial electrical solutions", "Industrial electrical contracting", "Panel installations and upgrades", "Power distribution systems", "Energy efficiency audits"],
  },
  {
    icon: iconSolar,
    title: "Renewable Energy",
    items: ["Solar panel installations", "Hybrid power systems", "Battery storage solutions", "Power consumption reduction", "Energy management systems", "Green energy consulting"],
  },
  {
    icon: iconHvac,
    title: "HVAC Systems",
    items: ["Inverter ducted air conditioners", "Inverter VRF units", "Packaged air conditioning", "Ventilation system design", "Climate control solutions", "Maintenance services"],
  },
  {
    icon: iconPerimeter,
    title: "Perimeter Detection",
    items: ["Perimeter breach notifications", "Cross-line detection systems", "Loitering detection alerts", "Thermal scanning systems", "Intruder alarm systems", "Off-site monitoring"],
  },
  {
    icon: iconMaintenance,
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
            className="group bg-card rounded-xl p-6 md:p-8 border border-border card-shadow hover:card-shadow-hover transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain drop-shadow-md"
                />
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
