import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "James Mwakasege",
    role: "Operations Manager, Banking Sector",
    text: "Ivatech delivered our CCTV and access control system on time and within budget. Their team's professionalism and technical expertise exceeded our expectations. Highly recommended for any security installation project.",
  },
  {
    image: testimonial2,
    name: "Amina Rashid",
    role: "IT Director, Telecommunications",
    text: "Working with Ivatech on our network infrastructure project was seamless. Their engineers understood our requirements perfectly and delivered a robust solution that has been running flawlessly.",
  },
  {
    image: testimonial3,
    name: "Peter Kimaro",
    role: "Facilities Manager, Commercial Real Estate",
    text: "The fire detection and structured cabling work Ivatech did for our building was exceptional. Their attention to safety standards and quality control is second to none in Tanzania.",
  },
  {
    image: testimonial4,
    name: "Grace Mushi",
    role: "Project Engineer, Energy Sector",
    text: "Ivatech's renewable energy solutions helped us reduce our operational costs significantly. Their team provided innovative and practical solutions that were tailored to our specific needs.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-section-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border card-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-body">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
