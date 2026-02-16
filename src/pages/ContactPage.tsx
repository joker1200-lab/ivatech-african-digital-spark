import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contact Us | Ivatech Informatics Limited" description="Get in touch with Ivatech Informatics Limited. Call +255 788 222 899 or email ivatech@ivatech.co.tz for telecoms, security and energy solutions." />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
            Get in touch for a free consultation and project quote.
          </motion.p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Visit Us", text: "3rd Floor, EAGT Building\nPO Box 38698, Dar es Salaam" },
              { icon: Phone, title: "Call Us", text: "+255 788 222 899" },
              { icon: Mail, title: "Email Us", text: "ivatech@ivatech.co.tz" },
              { icon: Clock, title: "Working Hours", text: "Mon - Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card rounded-xl p-8 border border-border card-shadow"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground font-body">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-heading font-semibold text-foreground mb-1 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm font-body text-foreground outline-none focus:ring-2 focus:ring-primary/30 border border-border resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
