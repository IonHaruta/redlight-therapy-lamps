/** Path relativ la `public/` (ex. `masti/CS-001/x.jpg`). */
export function publicAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.split("/").map(encodeURIComponent).join("/")}`;
}
