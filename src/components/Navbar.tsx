import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { homeProductBanners } from "@/data/home-banners";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ...homeProductBanners.map((b) => ({ label: b.label, to: b.to })),
    { label: "Star", to: { pathname: "/", hash: "contact" } as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
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

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="flex w-full rounded-full border border-gray-200 bg-gray-50 overflow-hidden focus-within:bg-white focus-within:border-primary/30 transition-colors">
            <input
              type="search"
              placeholder="Search the store"
              className="flex-1 px-4 py-2.5 bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted-foreground h-10"
            />
            <button
              type="button"
              className="h-10 px-4 bg-primary hover:bg-primary/90 text-white flex items-center justify-center shrink-0"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-2 mb-4">
            <Input placeholder="Search the store" className="rounded-full" />
          </div>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block py-3 text-sm text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
