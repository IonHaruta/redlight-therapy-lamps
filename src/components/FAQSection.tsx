import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ce este terapia cu lumină roșie?",
    a: "Terapia cu lumină roșie (Red Light Therapy) este o formă non-invazivă de tratament care folosește lungimi de undă specifice de lumină roșie și infraroșu apropiat (NIR) pentru a stimula procesele naturale de vindecare ale corpului la nivel celular.",
  },
  {
    q: "Este sigură terapia cu lumină roșie?",
    a: "Da, terapia cu lumină roșie este considerată sigură și non-invazivă. Dispozitivele noastre sunt certificate CE Clasa II ca dispozitive medicale și respectă toate standardele internaționale de siguranță (ETL/UL, ROHS).",
  },
  {
    q: "Cât durează o sesiune de tratament?",
    a: "O sesiune tipică durează între 10 și 20 de minute, în funcție de zona tratată și de puterea dispozitivului. Recomandăm utilizarea zilnică pentru rezultate optime.",
  },
  {
    q: "La ce distanță trebuie folosit panoul?",
    a: "Distanța optimă variază între 15-45 cm de suprafața pielii. La distanțe mai mici, iradiența este mai mare și tratamentul mai intens. Consultați tabelul de specificații pentru detalii.",
  },
  {
    q: "Ce diferență este între modelele BIOMAX?",
    a: "Diferența principală este dimensiunea zonei de acoperire. BIOMAX 300 și 450 sunt ideale pentru tratament țintit (față, articulații), în timp ce BIOMAX 600 și 900 oferă acoperire pentru corp întreg. Toate modelele folosesc același spectru avansat cu 7 lungimi de undă.",
  },
  {
    q: "Cât costă livrarea în Moldova?",
    a: "Oferim livrare gratuită pe teritoriul Republicii Moldova pentru toate comenzile. Pentru detalii suplimentare, contactați-ne la info@redlighttherapy.md.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Ai întrebări?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Întrebări <span className="text-primary">Frecvente</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="font-display text-base uppercase tracking-wide text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
