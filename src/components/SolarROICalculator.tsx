import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, TrendingDown, Leaf, Clock } from "lucide-react";

const tzs = (v: number) => new Intl.NumberFormat("en-TZ", { maximumFractionDigits: 0 }).format(Math.round(v));

const SolarROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [monthlyBill, setMonthlyBill] = useState(1_500_000);
  const [sunHours, setSunHours] = useState(5.5);
  const [offset, setOffset] = useState(70);

  const result = useMemo(() => {
    const tariff = 292; // TZS per kWh, typical Tanesco commercial tariff
    const monthlyKwh = monthlyBill / tariff;
    const dailyKwh = (monthlyKwh / 30) * (offset / 100);
    const systemKw = dailyKwh / (sunHours * 0.8);
    const capex = systemKw * 2_800_000;
    const monthlySaving = monthlyBill * (offset / 100);
    const paybackMonths = capex / Math.max(monthlySaving, 1);
    const tenYearNet = monthlySaving * 120 - capex;
    const co2 = systemKw * sunHours * 365 * 0.55; // kg CO2 avoided per year
    return { systemKw, capex, monthlySaving, paybackMonths, tenYearNet, co2 };
  }, [monthlyBill, sunHours, offset]);

  const stats = [
    { icon: Sun, label: "Recommended system", value: `${result.systemKw.toFixed(1)} kW` },
    { icon: TrendingDown, label: "Monthly savings", value: `TZS ${tzs(result.monthlySaving)}` },
    { icon: Clock, label: "Payback period", value: `${(result.paybackMonths / 12).toFixed(1)} years` },
    { icon: Leaf, label: "CO₂ avoided / year", value: `${tzs(result.co2)} kg` },
  ];

  return (
    <section id="solar-roi" className="py-20 md:py-28 bg-section-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">Renewable Energy</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">Solar ROI Calculator</h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            See how quickly a solar-hybrid system pays for itself at your site in Tanzania.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-5 sm:p-7 card-shadow space-y-6"
          >
            <div>
              <label htmlFor="bill" className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                <span>Monthly electricity bill</span>
                <span className="text-primary normal-case">TZS {tzs(monthlyBill)}</span>
              </label>
              <input
                id="bill"
                type="range"
                min={200_000}
                max={20_000_000}
                step={100_000}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label htmlFor="sun" className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                <span>Peak sun hours per day</span>
                <span className="text-primary normal-case">{sunHours.toFixed(1)} h</span>
              </label>
              <input
                id="sun"
                type="range"
                min={4}
                max={7}
                step={0.1}
                value={sunHours}
                onChange={(e) => setSunHours(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <label htmlFor="offset" className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                <span>Load to cover with solar</span>
                <span className="text-primary normal-case">{offset}%</span>
              </label>
              <input
                id="offset"
                type="range"
                min={20}
                max={100}
                step={5}
                value={offset}
                onChange={(e) => setOffset(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div className="rounded-xl bg-muted/60 border border-border p-4">
              <div className="text-xs font-body text-muted-foreground">Estimated installed cost</div>
              <div className="text-xl font-heading font-bold text-foreground">TZS {tzs(result.capex)}</div>
              <div className="text-xs font-body text-muted-foreground mt-2">
                Net gain after 10 years:{" "}
                <span className={result.tenYearNet >= 0 ? "text-primary font-semibold" : "text-muted-foreground"}>
                  TZS {tzs(result.tenYearNet)}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 content-start">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 card-shadow"
              >
                <s.icon className="w-5 h-5 text-primary mb-3" />
                <div className="text-lg sm:text-2xl font-heading font-bold text-foreground leading-tight break-words">{s.value}</div>
                <div className="text-xs text-muted-foreground font-body mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarROICalculator;
