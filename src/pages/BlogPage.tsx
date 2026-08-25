import SEO from "@/components/SEO";
import { heroImage } from "@/lib/images";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/components/BlogSection";

const BlogPage = () => (
  <>
    <SEO title="Blog | Ivatech Informatics Limited" description="Latest insights on telecommunications, security systems, fire safety, and energy solutions in Tanzania." />

    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Blog</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
          Industry insights and expert knowledge from the Ivatech team.
        </motion.p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-4">
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post, i) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Link to={`/blog/${post.id}`} className="group block bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all">
              <div className="relative overflow-hidden h-52">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-heading font-semibold uppercase">{post.category}</span>
                <h2 className="text-lg font-heading font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground font-body mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default BlogPage;
