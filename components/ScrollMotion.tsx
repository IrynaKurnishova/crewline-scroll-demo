"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Attaches motion to markup that the server already rendered.
 * It never creates or hides content on its own: hidden "before" states
 * live in CSS under `.js-motion`, which is only set when motion is allowed.
 */
export default function ScrollMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero: staggered entrance + parallax shapes tied to scroll.
      gsap.to(".hero-in", { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" });
      gsap.to(".hero-shapes .s1", { yPercent: -60, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero-shapes .s2", { yPercent: 40, rotate: 25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero-shapes .s3", { yPercent: -30, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

      // Scene: a progress bar scrubbed across all steps.
      gsap.fromTo(".progress-bar", { scaleX: 0 }, {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: ".steps", start: "top center", end: "bottom center", scrub: true },
      });

      // Each step builds its product screen while it sits in the middle of the viewport.
      const steps = gsap.utils.toArray<HTMLElement>(".step");
      steps.forEach((step) => {
        const panel = document.querySelector<HTMLElement>(`[data-panel="${step.dataset.step}"]`);
        if (!panel) return;
        const parts = panel.querySelectorAll(".build");
        const bars = panel.querySelectorAll<HTMLElement>(".bar-fill");

        const tl = gsap.timeline({ paused: true })
          .to(panel, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" })
          .to(parts, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.15");
        if (bars.length) tl.from(bars, { scaleX: 0, transformOrigin: "left center", duration: 0.6, stagger: 0.08, ease: "power3.out" }, "<");

        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => {
            step.classList.toggle("is-active", self.isActive);
            if (self.isActive) tl.timeScale(1).play();
            else tl.timeScale(2).reverse();
          },
        });
      });

      // Trades: the strip slides sideways as the section passes.
      gsap.fromTo(".trade-track", { xPercent: 8 }, {
        xPercent: -18, ease: "none",
        scrollTrigger: { trigger: ".trades", start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    return () => mm.revert();
  });

  return null;
}
