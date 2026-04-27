import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import MasksPage from "./pages/MasksPage";
import MaskProductPage from "./pages/MaskProductPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import ScrollToTop from "@/components/ScrollToTop";
import { LocaleProvider } from "@/context/LocaleContext";
import { CartProvider } from "@/context/CartContext";

const queryClient = new QueryClient();

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LocaleProvider>
      <CartProvider>
      <BrowserRouter basename={routerBasename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/masti" element={<MasksPage />} />
          <Route path="/masti/:slug" element={<MaskProductPage />} />
          <Route path="/produs/:slug" element={<ProductPage />} />
          <Route path="/cos" element={<CartPage />} />
          <Route path="/termeni-si-conditii" element={<TermsPage />} />
          <Route path="/politica-de-confidentialitate" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
      </LocaleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
