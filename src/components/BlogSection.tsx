import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

export const blogPosts = [
  {
    id: "future-of-cctv-tanzania",
    image: portfolio1,
    title: "The Future of CCTV Surveillance in Tanzania's Banking Sector",
    excerpt: "How AI-powered surveillance systems are transforming security in East Africa's financial institutions.",
    date: "January 15, 2026",
    category: "Security",
    content: `The banking sector in Tanzania is undergoing a significant transformation in how it approaches security. With the rise of AI-powered CCTV systems, financial institutions are now able to leverage advanced analytics including facial recognition, people counting, and behavioral analysis to enhance their security posture.\n\nTraditional analog systems are being replaced by IP-based solutions that offer megapixel-quality images, remote monitoring capabilities, and integration with other security systems such as access control and intruder alarms.\n\nAt Ivatech, we have been at the forefront of this transformation, having deployed modern surveillance systems across multiple banking branches in Tanzania. Our solutions incorporate the latest Hikvision technology with AI-powered analytics that can detect suspicious behavior, count people, and even measure temperature for health screening.\n\nThe benefits extend beyond security. Modern CCTV systems also provide valuable business intelligence through people counting and heat mapping, helping banks optimize their branch layouts and staffing levels. As we look to the future, we expect to see even greater integration between surveillance systems and other building management systems, creating truly smart and secure banking environments.`,
  },
  {
    id: "renewable-energy-telecom",
    image: portfolio3,
    title: "Renewable Energy Solutions for Telecom Infrastructure",
    excerpt: "Exploring how solar power is revolutionizing remote telecom site operations in East Africa.",
    date: "December 20, 2025",
    category: "Energy",
    content: `Telecommunications operators across East Africa face a common challenge: providing reliable power to remote cell sites that are far from the electrical grid. Traditional diesel generators are expensive to operate, require frequent maintenance, and have significant environmental impacts.\n\nSolar-hybrid power systems are emerging as the preferred solution for these remote sites. By combining solar panels with battery storage and a backup generator, operators can reduce fuel consumption by up to 80% while improving site reliability.\n\nIvatech has been implementing solar-hybrid solutions across Tanzania, helping operators reduce their Total Cost of Ownership while meeting their environmental sustainability goals. Our engineers are constantly monitoring new developments in solar panel efficiency and battery technology to ensure we deliver the most cost-effective solutions.\n\nThe key to a successful solar deployment is proper site assessment and system sizing. Our engineering team conducts thorough energy audits to understand each site's power consumption profile, taking into account factors such as equipment load, climate conditions, and seasonal variations in solar irradiance.`,
  },
  {
    id: "fire-safety-commercial",
    image: portfolio4,
    title: "Fire Safety Compliance for Commercial Buildings in Tanzania",
    excerpt: "Understanding fire detection requirements and best practices for Tanzanian businesses.",
    date: "November 8, 2025",
    category: "Fire Safety",
    content: `Fire safety is a critical concern for commercial building owners and managers in Tanzania. A well-designed fire detection and alarm system is not just a regulatory requirement—it's a vital investment in protecting lives and property.\n\nThere are two main types of fire detection systems: conventional and addressable. Conventional systems divide a building into zones, with each zone connected to a dedicated circuit. When a detector triggers, the panel identifies the zone but not the specific detector. Addressable systems, on the other hand, assign a unique address to each device, allowing the control panel to pinpoint the exact location of an alarm.\n\nFor larger commercial buildings, addressable systems offer significant advantages in terms of faster response times and easier maintenance. They can also integrate with other building management systems, providing automatic notifications to building managers and fire services.\n\nAt Ivatech, we design and install both conventional and addressable fire detection systems, always ensuring compliance with local and international standards. Our systems include smoke detectors, heat detectors, manual call points, and sounder/strobe devices, all connected to a central monitoring panel.`,
  },
  {
    id: "access-control-trends",
    image: portfolio5,
    title: "Modern Access Control: Beyond Keys and Cards",
    excerpt: "How biometric and smart access systems are enhancing workplace security across Africa.",
    date: "October 25, 2025",
    category: "Access Control",
    content: `The access control landscape is evolving rapidly. Gone are the days when a simple lock and key or basic card reader was sufficient to secure a premises. Today's access control systems leverage biometric technology, mobile credentials, and cloud-based management platforms to provide comprehensive security solutions.\n\nBiometric access control—including fingerprint, palm, facial recognition, and iris scanning—offers the highest level of security by verifying a person's unique biological characteristics. Unlike cards or keys, biometric credentials cannot be lost, stolen, or shared.\n\nMobile access is another growing trend. Using smartphones as credentials eliminates the need for physical cards and simplifies credential management. Employees can receive and revoke access permissions digitally, making it easier to manage access for large organizations.\n\nIvatech has implemented access control solutions across banking, corporate, and government facilities in Tanzania. Our systems integrate with time and attendance modules, visitor management platforms, and CCTV surveillance to create a comprehensive security ecosystem. We work with leading manufacturers to ensure our solutions are reliable, scalable, and future-proof.`,
  },
];

const BlogSection = () => {
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
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Latest Insights</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={`/blog/${post.id}`} className="group block bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300">
                <div className="relative overflow-hidden h-44">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-heading font-semibold uppercase">{post.category}</span>
                  <h3 className="font-heading font-bold text-foreground mt-1 mb-2 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
