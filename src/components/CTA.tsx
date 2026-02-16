import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-hero-gradient relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary-foreground/20" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-primary-foreground/20" />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 font-body mb-8 text-lg">
            Let's discuss how Ivatech can deliver the right solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-heading font-semibold hover:bg-primary-foreground/90 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+255788222899"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              +255 788 222 899
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
