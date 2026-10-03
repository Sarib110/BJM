/** Prefix site-root paths with Vite BASE_URL (e.g. /BJM/ on GitHub Pages). */
export function withBase(path) {
  if (!path) return path;
  if (/^(https?:|data:|blob:)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(path).replace(/^\//, '')}`;
}
