export type Step = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
};

export type Trade = { name: string; stat: string };

export type HomeContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; cta: string };
  scene: { heading: string; steps: Step[] };
  trades: { heading: string; items: Trade[] };
  cta: { title: string; body: string; button: string };
};
