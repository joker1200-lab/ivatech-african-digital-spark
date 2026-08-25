import SEO from "@/components/SEO";
import { aboutImage,heroImage } from "@/lib/images";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Target, Eye } from "lucide-react";
import CTA from "@/components/CTA";

const team = [
  { name: "Eng. Daniel Nyandongo", role: "Managing Director", exp: "16 years", qual: "BSc. Telecommunications Eng." },
  { name: "Eng. Devotha William", role: "Technical Director", exp: "16 years", qual: "BSc. Telecommunications Eng., Registered Eng." },
  { name: "Reuben Nehemia", role: "Finance Manager", exp: "22 years", qual: "BA International Business" },
  { name: "Emmanuel Samwel", role: "Procurement Manager", exp: "8 years", qual: "BA Procurement" },
];

const AboutPage = () => (
  <>
    <SEO title="About Us | Ivatech Informatics Limited" description="Learn about Ivatech Informatics Limited - established in 2011, delivering turnkey telecoms, security and energy solutions across Tanzania." />

    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          About Ivatech
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
          Your trusted partner for turnkey solutions in Tanzania since 2011.
        </motion.p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card p-8 rounded-xl border border-border card-shadow">
          <Target className="w-10 h-10 text-primary mb-4" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h2>
          <p className="text-muted-foreground font-body leading-relaxed">Aligning with Telecommunications and Energy sectors to the mutual benefit of all stakeholders.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card p-8 rounded-xl border border-border card-shadow">
          <Eye className="w-10 h-10 text-secondary mb-4" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h2>
          <p className="text-muted-foreground font-body leading-relaxed">To become the partner of choice for our clients, and a company whose staff are proud to be an integral part of.</p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={aboutImage} alt="Ivatech team" className="rounded-2xl w-full h-[350px] object-cover" />
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Established in 2011, IVATECH has successfully delivered projects on time, within budget and to the required quality, while maintaining focus on continuous improvement on internationally accepted standards.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Today, IVATECH delivers one of the telecommunications industry's broadest portfolios of engineering, materials and services to operators, as well as partnering with equipment manufacturers and infrastructure providers within the telecommunications and energy sectors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "CRB & OSHA Accredited" },
              { icon: Users, label: "20+ Expert Engineers" },
              { icon: CheckCircle, label: "37+ Projects Completed" },
              { icon: Target, label: "14+ Years Experience" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-body text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Safety */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-section-gradient rounded-2xl p-8 md:p-12 mb-20">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Health & Safety</h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-6">IVATECH is committed to providing and maintaining a healthy and safe working environment. We proudly hold OSHA accreditation.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Comply with local and international H&S legislation",
            "Identify hazards, assess risks and implement controls",
            "Document and review risk assessments regularly",
            "Ensure provision of trained H&S coordinators",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground font-body">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Team */}
      <div className="text-center mb-10">
        <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Our Team</span>
        <h2 className="text-3xl font-heading font-bold text-foreground mt-3">Key Personnel</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border card-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
            <p className="text-primary text-sm font-heading font-semibold mb-2">{member.role}</p>
            <p className="text-xs text-muted-foreground font-body">{member.qual}</p>
            <p className="text-xs text-muted-foreground font-body mt-1">{member.exp} experience</p>
          </motion.div>
        ))}
      </div>
    </section>

    <CTA />
  </>
);

export default AboutPage;
