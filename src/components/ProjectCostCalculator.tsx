import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceOptions = [
  { id: "cctv", label: "CCTV & Surveillance", unit: "cameras", base: 1_200_000, perUnit: 850_000 },
  { id: "access", label: "Access Control", unit: "doors", base: 1_500_000, perUnit: 1_100_000 },
  { id: "fire", label: "Fire Detection", unit: "detectors", base: 1_800_000, perUnit: 320_000 },
  { id: "cabling", label: "Structured Cabling", unit: "data points", base: 900_000, perUnit: 210_000 },
  { id: "solar", label: "Solar Power System", unit: "kW", base: 2_500_000, perUnit: 2_800_000 },
  { id: "electrical", label: "Electrical Works", unit: "circuits", base: 1_100_000, perUnit: 450_000 },
];

const complexity = [
  { id: "standard", label: "Standard", factor: 1 },
  { id: "advanced", label: "Advanced", factor: 1.35 },
  { id: "enterprise", label: "Enterprise", factor: 1.7 },
];

const tzs = (v: number) =>
  new Intl.NumberFormat("en-TZ", { maximumFractionDigits: 0 }).format(Math.round(v));

const ProjectCostCalculator = () => {
  const [service, setService] = useState(serviceOptions[0]);
  const [units, setUnits] = useState(8);
  const [level, setLevel] = useState(complexity[0]);
  const [maintenance, setMaintenance] = useState(true);

  const { low, high, monthly } = useMemo(() => {
    const core = (service.base + service.perUnit * units) * level.factor;
    const support = maintenance ? core * 0.08 : 0;
    return { low: core * 0.9, high: core * 1.15, monthly: support / 12 };
  }, [service, units, level, maintenance]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="w-full rounded-2xl border border-primary-foreground/15 bg-background/70 backdrop-blur-xl p-5 sm:p-6 card-shadow"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-heading font-bold text-foreground leading-tight">Project Cost Calculator</h2>
          <p className="text-xs text-muted-foreground font-body">Instant indicative estimate</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="pcc-service" className="block text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Service
          </label>
          <select
            id="pcc-service"
            value={service.id}
            onChange={(e) => setService(serviceOptions.find((s) => s.id === e.target.value) ?? serviceOptions[0])}
            className="w-full rounded-lg bg-muted border border-border text-foreground font-body text-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {serviceOptions.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pcc-units" className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            <span>Scope</span>
            <span className="text-primary normal-case">{units} {service.unit}</span>
          </label>
          <input
            id="pcc-units"
            type="range"
            min={1}
            max={60}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div>
          <span className="block text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">Specification</span>
          <div className="grid grid-cols-3 gap-2">
            {complexity.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setLevel(c)}
                className={`rounded-lg px-2 py-2 text-xs font-heading font-semibold border transition-colors ${
                  level.id === c.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm font-body text-foreground">
          <input
            type="checkbox"
            checked={maintenance}
            onChange={(e) => setMaintenance(e.target.checked)}
            className="w-4 h-4 accent-primary"
          />
          Include annual maintenance & support
        </label>

        <div className="rounded-xl border border-border bg-muted/60 p-4">
          <div className="text-xs font-body text-muted-foreground">Estimated project cost</div>
          <div className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-1">
            TZS {tzs(low)} – {tzs(high)}
          </div>
          {maintenance && (
            <div className="text-xs font-body text-muted-foreground mt-1">
              + approx. TZS {tzs(monthly)} / month support
            </div>
          )}
        </div>

        <Link
          to="/contact"
          className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
        >
          Get an Exact Quote <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[11px] font-body text-muted-foreground leading-relaxed">
          Indicative only. Final pricing follows a free site survey by our engineers.
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCostCalculator;
