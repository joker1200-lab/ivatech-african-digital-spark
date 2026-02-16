import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Hikvision", "Cisco", "Huawei", "ZTE", "AVAYA", "Dahua", "Mantrac", "Schneider Electric",
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 border-y border-border" ref={ref}>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-center justify-center p-6 md:p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:card-shadow transition-all duration-300"
            >
              <span className="text-lg md:text-xl font-heading font-bold text-muted-foreground hover:text-primary transition-colors">
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
