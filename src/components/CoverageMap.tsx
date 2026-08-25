import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Radio, ShieldCheck, Zap } from "lucide-react";

type Region = {
  id: string;
  name: string;
  x: number; // % position on map
  y: number;
  projects: number;
  services: string[];
  note: string;
};

const regions: Region[] = [
  { id: "dar", name: "Dar es Salaam", x: 76, y: 66, projects: 14, services: ["CCTV", "Access Control", "Cabling"], note: "Head office and 24/7 rapid-response team." },
  { id: "dodoma", name: "Dodoma", x: 55, y: 52, projects: 5, services: ["Fire Detection", "Electrical"], note: "Government and institutional installations." },
  { id: "arusha", name: "Arusha", x: 64, y: 22, projects: 6, services: ["CCTV", "Telecom BSS"], note: "Northern circuit hospitality and retail security." },
  { id: "mwanza", name: "Mwanza", x: 32, y: 20, projects: 4, services: ["Telecom BSS", "Solar"], note: "Lake zone tower rollouts and solar hybrids." },
  { id: "mbeya", name: "Mbeya", x: 30, y: 76, projects: 3, services: ["Solar", "Maintenance"], note: "Southern highlands remote site energy." },
  { id: "tanga", name: "Tanga", x: 78, y: 34, projects: 3, services: ["Cabling", "CCTV"], note: "Coastal industrial and port-adjacent works." },
  { id: "zanzibar", name: "Zanzibar", x: 88, y: 50, projects: 2, services: ["CCTV", "Access Control"], note: "Island hospitality security systems." },
];

const CoverageMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Region>(regions[0]);

  return (
    <section id="coverage" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Where We Work</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Interactive Coverage Map</h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            Tap a region to see the services we deliver there across Tanzania.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-10 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/5] sm:aspect-[5/4] rounded-2xl border border-border bg-card overflow-hidden card-shadow"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id="tzFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.25)" />
                  <stop offset="100%" stopColor="hsl(var(--secondary) / 0.25)" />
                </linearGradient>
              </defs>
              <path
                d="M18 18 L46 12 L62 14 L70 20 L82 28 L84 40 L80 52 L82 66 L74 78 L58 86 L38 84 L26 76 L20 60 L14 44 Z"
                fill="url(#tzFill)"
                stroke="hsl(var(--primary) / 0.5)"
                strokeWidth="0.7"
              />
            </svg>

            {regions.map((r, i) => {
              const isActive = active.id === r.id;
              return (
                <motion.button
                  key={r.id}
                  type="button"
                  onClick={() => setActive(r)}
                  aria-label={`Coverage in ${r.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${r.x}%`, top: `${r.y}%` }}
                >
                  <span
                    className={`block rounded-full transition-all ${
                      isActive ? "w-4 h-4 bg-primary" : "w-3 h-3 bg-secondary group-hover:bg-primary"
                    }`}
                  />
                  {isActive && <span className="absolute inset-0 -m-2 rounded-full bg-primary/30 animate-ping" />}
                  <span
                    className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-heading font-semibold transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {r.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-card border border-border rounded-2xl p-5 sm:p-7 card-shadow"
          >
            <div className="flex items-center gap-2 text-primary mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-heading font-semibold uppercase tracking-widest">Region</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground">{active.name}</h3>
            <p className="text-sm text-muted-foreground font-body mt-3 leading-relaxed">{active.note}</p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-xl bg-muted/60 border border-border p-3">
                <Radio className="w-4 h-4 text-primary mb-2" />
                <div className="text-xl font-heading font-bold text-foreground">{active.projects}</div>
                <div className="text-[11px] text-muted-foreground font-body">Projects delivered</div>
              </div>
              <div className="rounded-xl bg-muted/60 border border-border p-3">
                <ShieldCheck className="w-4 h-4 text-primary mb-2" />
                <div className="text-xl font-heading font-bold text-foreground">{active.services.length}</div>
                <div className="text-[11px] text-muted-foreground font-body">Service lines active</div>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2 mt-5">
              {active.services.map((s) => (
                <li key={s} className="inline-flex items-center gap-1 text-xs font-body bg-primary/10 text-primary rounded-full px-3 py-1">
                  <Zap className="w-3 h-3" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
