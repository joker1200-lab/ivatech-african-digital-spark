import SEO from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/components/BlogSection";
import CTA from "@/components/CTA";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary font-heading font-semibold">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${post.title} | Ivatech Blog`} description={post.excerpt} type="article" />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="relative container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 font-body text-sm mb-6 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-primary-foreground/60 font-heading font-semibold uppercase">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2 mb-4 max-w-3xl">{post.title}</h1>
            <div className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {post.content.split("\n\n").map((paragraph, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-foreground font-body leading-relaxed mb-6">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </article>

      <CTA />
    </>
  );
};

export default BlogPostPage;
