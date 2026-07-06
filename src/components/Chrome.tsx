"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/**
 * Site chrome switcher. The Entrant Portal (/portal) is a standalone
 * surface with its own header, footer, and light theme — it must not
 * inherit the main site's Nav/Footer or the fixed-nav top padding.
 */
export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/portal")) {
    return <>{children}</>;
  }
  return (
    <>
      <Nav />
      {/* pt matches the fixed Nav's height (60px mobile, 64px ≥md) so
          page content doesn't slide under the bar on first render. */}
      <main className="flex-1 pt-[60px] md:pt-[64px]">{children}</main>
      <Footer />
    </>
  );
}
