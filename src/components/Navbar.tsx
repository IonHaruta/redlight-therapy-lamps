import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { homeProductBanners } from "@/data/home-banners";
import { useLocale } from "@/context/LocaleContext";
import { getSiteCopy } from "@/i18n/site";
import type { Locale } from "@/data/masks";
import { searchCatalog } from "@/data/search-catalog";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

const navKeyByBannerId: Record<string, "therapyMasks" | "product2" | "product3"> = {
  "therapy-masks": "therapyMasks",
  "produs-2": "product2",
  "produs-3": "product3",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { locale, setLocale } = useLocale();
  const t = getSiteCopy(locale);
  const { itemCount } = useCart();

  const links = [
    ...homeProductBanners.map((b) => ({
      id: b.id,
      label: t.nav[navKeyByBannerId[b.id]],
      to: b.to,
    })),
    { id: "star", label: t.nav.star, to: { pathname: "/", hash: "contact" } as const },
  ];

  const searchResults = useMemo(
    () => searchCatalog(locale, searchQuery, 8),
    [locale, searchQuery],
  );
  const showSearchPanel = searchFocused && searchQuery.trim().length > 0;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (searchWrapRef.current?.contains(e.target as Node)) return;
      setSearchFocused(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const onSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const first = searchCatalog(locale, searchQuery, 1)[0];
    if (first) {
      navigate(first.to);
      setSearchQuery("");
      setSearchFocused(false);
      setIsOpen(false);
    }
  };

  const clearSearchAndBlur = () => {
    setSearchQuery("");
    setSearchFocused(false);
    setIsOpen(false);
  };

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {(["ro", "ru"] as Locale[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`min-w-[2rem] px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
            locale === lang
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={locale === lang}
          aria-label={lang === "ro" ? "Română" : "Русский"}
        >
          {lang}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-sm bg-primary" />
            ))}
          </div>
          <span className="font-display text-lg font-semibold text-primary tracking-tight">
            Red Light Therapy
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="text-sm text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div ref={searchWrapRef} className="hidden md:block flex-1 max-w-md mx-4 relative">
          <form
            onSubmit={onSearchSubmit}
            className="flex w-full rounded-full border border-gray-200 bg-gray-50 overflow-hidden focus-within:bg-white focus-within:border-primary/30 transition-colors"
          >
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAriaLabel}
              autoComplete="off"
              className="flex-1 px-4 py-2.5 bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted-foreground h-10"
            />
            <button
              type="submit"
              className="h-10 px-4 bg-primary hover:bg-primary/90 text-white flex items-center justify-center shrink-0"
              aria-label={t.searchAriaLabel}
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
          {showSearchPanel ? (
            <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto rounded-lg border border-border bg-popover py-1 shadow-md">
              {searchResults.length === 0 ? (
                <p className="px-3 py-3 text-sm text-muted-foreground">{t.searchNoResults}</p>
              ) : (
                <ul role="listbox">
                  {searchResults.map((item) => (
                    <li key={`${item.kind}-${item.slug}`}>
                      <Link
                        to={item.to}
                        className="flex flex-col gap-0.5 px-3 py-2.5 text-left hover:bg-accent"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={clearSearchAndBlur}
                      >
                        <span className="text-sm font-medium text-foreground">{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.subtitle} · {item.price}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-0 sm:gap-1">
          <div className="hidden sm:block h-6 w-px bg-border shrink-0" aria-hidden />
          <LangToggle className="shrink-0" />
          <div className="hidden sm:block h-6 w-px bg-border shrink-0" aria-hidden />
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary">
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-700 hover:text-primary"
            onClick={() => setCartOpen(true)}
            aria-label={t.cart.title}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            ) : null}
          </Button>
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex items-center justify-end mb-4">
            <LangToggle />
          </div>
          <form onSubmit={onSearchSubmit} className="mb-4 flex gap-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAriaLabel}
              autoComplete="off"
              className="rounded-full flex-1"
            />
            <Button type="submit" size="icon" className="shrink-0 rounded-full" aria-label={t.searchAriaLabel}>
              <Search className="h-4 w-4" />
            </Button>
          </form>
          {searchQuery.trim() ? (
            <ul className="mb-4 max-h-48 overflow-y-auto rounded-lg border border-border bg-muted/30">
              {searchResults.length === 0 ? (
                <li className="px-3 py-3 text-sm text-muted-foreground">{t.searchNoResults}</li>
              ) : (
                searchResults.map((item) => (
                  <li key={`${item.kind}-${item.slug}`}>
                    <Link
                      to={item.to}
                      className="block px-3 py-2.5 text-sm hover:bg-accent"
                      onClick={clearSearchAndBlur}
                    >
                      {item.title}
                      <span className="block text-xs text-muted-foreground">
                        {item.subtitle} · {item.price}
                      </span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          ) : null}
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="block py-3 text-sm text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </nav>
  );
};

export default Navbar;
