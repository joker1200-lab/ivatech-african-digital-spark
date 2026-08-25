import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ivatech-logo.jpeg";

const Footer = () => (
  <footer className="bg-card text-foreground border-t border-border">
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="mb-8 max-w-sm">
        <img src={logo} alt="Ivatech" className="h-10 md:h-12 mb-3 rounded" />
        <p className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed">
          Turnkey service providers to the telecoms, security and energy industries in Tanzania since 2011.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-10">
        <div>
          <h4 className="font-heading font-bold mb-3 text-xs md:text-base uppercase md:normal-case tracking-wide">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase()}`} className="text-xs md:text-sm text-muted-foreground hover:text-primary font-body transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-3 text-xs md:text-base uppercase md:normal-case tracking-wide">Services</h4>
          <ul className="space-y-2">
            {["Telecommunications", "CCTV Systems", "Access Control", "Fire Detection", "Structured Cabling", "Electrical Services"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-xs md:text-sm text-muted-foreground hover:text-primary font-body transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-3 text-xs md:text-base uppercase md:normal-case tracking-wide">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-primary" />
              <span className="text-xs md:text-sm text-muted-foreground font-body">3rd Floor, EAGT Building, PO Box 38698, Dar es Salaam</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-primary" />
              <a href="tel:+255788222899" className="text-xs md:text-sm text-muted-foreground hover:text-primary font-body break-all">+255 788 222 899</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-primary" />
              <a href="mailto:ivatech@ivatech.co.tz" className="text-xs md:text-sm text-muted-foreground hover:text-primary font-body break-all">ivatech@ivatech.co.tz</a>
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs md:text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Ivatech Informatics Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
