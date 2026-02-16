import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ivatech-logo.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Ivatech" className="h-12 mb-4 rounded" />
          <p className="text-sm opacity-70 font-body leading-relaxed">
            Turnkey service providers to the telecoms, security and energy industries in Tanzania since 2011.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 font-body transition-opacity">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            {["Telecommunications", "CCTV Systems", "Access Control", "Fire Detection", "Structured Cabling", "Electrical Services"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm opacity-70 hover:opacity-100 font-body transition-opacity">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
              <span className="text-sm opacity-70 font-body">3rd Floor, EAGT Building, PO Box 38698, Dar es Salaam</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a href="tel:+255788222899" className="text-sm opacity-70 hover:opacity-100 font-body">+255 788 222 899</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0 opacity-70" />
              <a href="mailto:ivatech@ivatech.co.tz" className="text-sm opacity-70 hover:opacity-100 font-body">ivatech@ivatech.co.tz</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center">
        <p className="text-sm opacity-50 font-body">
          © {new Date().getFullYear()} Ivatech Informatics Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
