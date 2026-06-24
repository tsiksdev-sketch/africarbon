'use client'

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calculator as CalcIcon, Car, Plane, Building2, Zap, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Emission factors (kg CO2e per unit) — illustrative
const FACTORS = {
  carKm: 0.17,
  flightKm: 0.18,
  electricityKwh: 0.42,
  gasKwh: 0.20,
  beefKg: 27,
};

const Field = ({
  icon: Icon,
  label,
  value,
  onChange,
  unit,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  onChange: (v: number) => void;
  unit: string;
}) => (
  <div className="space-y-2">
    <Label className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 text-yellow-200" /> {label}
      <span className="ml-auto text-xs text-muted-foreground">{unit}</span>
    </Label>
    <Input
      type="number"
      min={0}
      value={Number.isFinite(value) ? value : 0}
      onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
    />
  </div>
);

const Calculator = () => {
  

  const [carKm, setCarKm] = useState(80);
  const [flightKm, setFlightKm] = useState(2000);
  const [kwh, setKwh] = useState(250);
  const [gas, setGas] = useState(400);
  const [beef, setBeef] = useState(2);

  const breakdown = useMemo(() => {
    const items = [
      { name: "Commuting", value: carKm * 52 * FACTORS.carKm },
      { name: "Flights", value: flightKm * FACTORS.flightKm },
      { name: "Electricity", value: kwh * 12 * FACTORS.electricityKwh },
      { name: "Heating (gas)", value: gas * 12 * FACTORS.gasKwh },
      { name: "Diet (beef)", value: beef * 52 * FACTORS.beefKg },
    ];
    const total = items.reduce((s, i) => s + i.value, 0);
    return { items, total };
  }, [carKm, flightKm, kwh, gas, beef]);

  const tonnes = breakdown.total / 1000;

  const handleDownload = () => {
    const date = new Date();
    const rows = [
      ["CarbonIQ — Personal Footprint Report"],
      ["Generated", date.toISOString()],
      [],
      ["Inputs"],
      ["Car commute (km/week)", carKm],
      ["Air travel (km/year)", flightKm],
      ["Electricity (kWh/month)", kwh],
      ["Heating gas (kWh/month)", gas],
      ["Beef (kg/week)", beef],
      [],
      ["Breakdown (tCO2e/yr)"],
      ...breakdown.items.map((i) => [i.name, (i.value / 1000).toFixed(3)]),
      [],
      ["Total (tCO2e/yr)", tonnes.toFixed(3)],
      ["Global average", "4.7"],
      ["1.5°C aligned", "2.3"],
    ];
    const csv = rows
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `carboniq-footprint-${date.toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">


      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_360px]">
          <div className="space-y-6 rounded-2xl border border-border bg-lime-500 p-8">
            <h2 className="font-heading text-2xl font-semibold text-white">Your activity</h2>
            <Field icon={Car} label="Car commute" value={carKm} onChange={setCarKm} unit="km / week" />
            <Field icon={Plane} label="Air travel" value={flightKm} onChange={setFlightKm} unit="km / year" />
            <Field icon={Zap} label="Electricity" value={kwh} onChange={setKwh} unit="kWh / month" />
            <Field icon={Building2} label="Heating (natural gas)" value={gas} onChange={setGas} unit="kWh / month" />
            <Field icon={CalcIcon} label="Beef consumption" value={beef} onChange={setBeef} unit="kg / week" />
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-24 h-fit rounded-2xl border border-primary/30 bg-linear-to-br from-lime-500/50 to-yellow-200/30 p-8"
          >
            <p className="text-sm uppercase tracking-widest text-green-600">Estimated footprint</p>
            <p className="mt-3 font-heading text-5xl font-bold text-green-800">
              {tonnes.toFixed(2)} <span className="text-2xl text-muted-foreground">tCO₂e/yr</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Global average: ~4.7 tCO₂e · 1.5°C aligned: ~2.3 tCO₂e
            </p>

            <div className="mt-6 space-y-3">
              {breakdown.items.map((i) => {
                const pct = breakdown.total ? (i.value / breakdown.total) * 100 : 0;
                return (
                  <div key={i.name}>
                    <div className="flex justify-between text-xs">
                      <span>{i.name}</span>
                      <span className="text-green-600">{(i.value / 1000).toFixed(2)} t</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-green-600" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <Button  className="mt-6 w-full bg-green-600 hover:bg-green-700" onClick={handleDownload}>
              <Download className="h-4 w-4" /> Download report
            </Button>
          </motion.aside>
        </div>
      </section>

     
    </div>
  );
};

export default Calculator;
