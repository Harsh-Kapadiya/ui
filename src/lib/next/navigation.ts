/**
 * next/navigation compatibility shim
 *
 * In a real Next.js project these would come from the Next.js runtime.
 * Here we delegate to React Router so every component can use the identical
 * `import { usePathname, useRouter, useSearchParams } from 'next/navigation'`
 * syntax — with no UI changes whatsoever.
 */
import { useLocation, useNavigate, useParams as useRRParams } from 'react-router';

/** Mirrors Next.js `usePathname()` – returns the current pathname string. */
export function usePathname(): string {
  return useLocation().pathname;
}

/** Mirrors Next.js `useRouter()` – returns push / replace / back / forward. */
export function useRouter() {
  const navigate = useNavigate();
  return {
    push:    (href: string) => navigate(href),
    replace: (href: string) => navigate(href, { replace: true }),
    back:    () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
    prefetch: (_href: string) => { /* no-op in compat layer */ },
  };
}

/** Mirrors Next.js `useSearchParams()` – returns URLSearchParams. */
export function useSearchParams() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

/** Mirrors Next.js `useParams()` – returns dynamic route params. */
export function useParams() {
  return useRRParams();
}
