const logos = [
  "Women's Health",
  "ELLE",
  "THE WALL STREET JOURNAL",
  "goop",
  "Men's Health",
  "Forbes",
];

const LogoTicker = () => {
  return (
    <section className="bg-white py-10 overflow-hidden border-y border-gray-200">
      <div className="relative">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...logos, ...logos].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-16 text-gray-500 font-semibold text-base md:text-lg tracking-tight"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
