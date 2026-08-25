import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

const partners = [
  "Hikvision", "Cisco", "Huawei", "ZTE", "AVAYA", "Dahua", "Mantrac", "Schneider Electric",
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const loop = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 border-y border-border overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Partners</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Trusted Technology Partners
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            We partner with world-leading equipment manufacturers and infrastructure providers.
          </p>
        </motion.div>
      </div>

      {/* Animated partner banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-hero-gradient py-6 md:py-8"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <div key={`${partner}-${i}`} className="flex items-center gap-8 md:gap-12 px-6 md:px-10">
              <span className="text-lg md:text-2xl font-heading font-bold text-primary-foreground/90 whitespace-nowrap">
                {partner}
              </span>
              <Handshake className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center justify-center p-4 md:p-8 bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300"
            >
              <span className="text-sm md:text-xl font-heading font-bold text-muted-foreground hover:text-primary transition-colors text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
