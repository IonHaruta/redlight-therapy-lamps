import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "rlt-cart-v1";

export type CartLine = {
  id: string;
  kind: "mask" | "lamp";
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  qty: number;
  /** Mască: path în `public`; lampă: URL-ul imaginii (import Vite) */
  thumb?: string;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addItem: (
    item: Omit<CartLine, "id" | "qty"> & { qty?: number },
  ) => void;
  setQty: (id: string, qty: number) => void;
  removeLine: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist(lines: CartLine[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* ignore */
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() =>
    typeof window !== "undefined" ? loadLines() : [],
  );

  useEffect(() => {
    persist(lines);
  }, [lines]);

  const addItem = useCallback((item: Omit<CartLine, "id" | "qty"> & { qty?: number }) => {
    const id = `${item.kind}:${item.slug}`;
    const addQty = Math.max(1, item.qty ?? 1);
    const lineBase: Omit<CartLine, "qty"> = {
      id,
      kind: item.kind,
      slug: item.slug,
      name: item.name,
      price: item.price,
      priceValue: item.priceValue,
      thumb: item.thumb,
    };
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === id);
      if (i === -1) {
        return [...prev, { ...lineBase, qty: addQty }];
      }
      const next = [...prev];
      next[i] = { ...next[i], qty: next[i].qty + addQty };
      return next;
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const q = Math.max(0, Math.floor(qty));
    setLines((prev) => {
      if (q === 0) return prev.filter((l) => l.id !== id);
      return prev.map((l) => (l.id === id ? { ...l, qty: q } : l));
    });
  }, []);

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const value = useMemo(() => {
    const itemCount = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + l.priceValue * l.qty, 0);
    return {
      lines,
      itemCount,
      subtotal,
      addItem,
      setQty,
      removeLine,
      clearCart,
    };
  }, [lines, addItem, setQty, removeLine, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
