/**
 * next/link compatibility shim
 *
 * In a real Next.js project this would be the built-in <Link> component.
 * Here we wrap React Router's <Link> so every page can use the identical
 * `import Link from 'next/link'` + `href` prop syntax that Next.js uses.
 */
import React from 'react';
import { Link as RouterLink } from 'react-router';

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: React.ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
}

export default function Link({
  href,
  children,
  prefetch: _prefetch,
  replace,
  scroll: _scroll,
  ...rest
}: LinkProps) {
  return (
    <RouterLink to={href} replace={replace} {...rest}>
      {children}
    </RouterLink>
  );
}
