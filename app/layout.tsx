import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crewline — scroll demo",
  description: "Next.js App Router + GSAP ScrollTrigger concept page.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0f1b2d" };

// Adds `js-motion` before first paint only when JS runs AND the user allows motion.
// Without it (no JS, crawlers, reduced motion) the page is a complete static layout.
const motionScript = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
