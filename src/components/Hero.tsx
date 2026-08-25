import { motion } from "framer-motion";
import { heroImage } from "@/lib/images";
import { ArrowRight, Shield, Wifi, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ivatech engineer working on telecom tower" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-primary-foreground text-sm font-body">Trusted Since 2011</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Turnkey Solutions for{" "}
            <span className="text-secondary-foreground/90">Telecoms</span>,{" "}
            <span className="text-secondary-foreground/90">Security</span> &{" "}
            <span className="text-secondary-foreground/90">Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl font-body"
          >
            Delivering world-class engineering, security systems, and energy solutions across Tanzania. 
            Your partner of choice for comprehensive infrastructure services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            {[
              { icon: Shield, label: "Projects Completed", value: "37+" },
              { icon: Wifi, label: "Years Experience", value: "14+" },
              { icon: Zap, label: "Expert Engineers", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 font-body">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
