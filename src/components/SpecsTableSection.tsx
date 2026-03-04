const specs = [
  {
    label: "Lungimi de undă",
    values: ["7", "7", "7", "7"],
  },
  {
    label: "Dimensiuni",
    values: ['48 x 23 x 8 cm', '48 x 30 x 8 cm', '91 x 23 x 8 cm', '91 x 30 x 8 cm'],
  },
  {
    label: "Consum",
    values: ["180W", "260W", "350W", "380W / 490W"],
  },
  {
    label: "Număr LED-uri",
    values: ["100", "150", "200", "300"],
  },
  {
    label: "Temperatură max.",
    values: ["55°C", "55°C", "55°C", "55°C"],
  },
  {
    label: "Greutate",
    values: ["5 kg", "7.7 kg", "10 kg", "15 kg"],
  },
  {
    label: "Garanție",
    values: ["3 Ani", "3 Ani", "3 Ani", "3 Ani"],
  },
  {
    label: "Durată de viață",
    values: ["100.000 ore", "100.000 ore", "100.000 ore", "100.000 ore"],
  },
  {
    label: "Emisie EMF",
    values: ['0.0 µT @ 10cm', '0.0 µT @ 10cm', '0.0 µT @ 10cm', '0.0 µT @ 10cm'],
  },
  {
    label: "Recomandat pentru",
    values: ["Tratament țintit", "Tratament țintit", "Corp întreg", "Corp întreg"],
  },
];

const models = ["BIOMAX 300", "BIOMAX 450", "BIOMAX 600", "BIOMAX 900"];

const SpecsTableSection = () => {
  return (
    <section id="specificatii" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Comparație detaliată
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Tabel de <span className="text-primary">Specificații</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 font-display text-sm uppercase tracking-wider text-muted-foreground border-b border-border" />
                {models.map((model) => (
                  <th
                    key={model}
                    className="p-4 font-display text-base uppercase tracking-wide text-foreground border-b border-border text-center"
                  >
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, i) => (
                <tr
                  key={spec.label}
                  className={i % 2 === 0 ? "bg-secondary/50" : ""}
                >
                  <td className="p-4 font-display text-sm uppercase tracking-wide text-muted-foreground border-b border-border/50 whitespace-nowrap">
                    {spec.label}
                  </td>
                  {spec.values.map((val, j) => (
                    <td
                      key={j}
                      className="p-4 text-sm text-foreground text-center border-b border-border/50"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpecsTableSection;
