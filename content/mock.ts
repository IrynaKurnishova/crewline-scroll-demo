// Fictional data shown inside the product mock-ups (decorative visuals).
export const mock = {
  order: {
    title: "PO-2318 · Hillcrest pool",
    lines: [
      { item: "Rebar #4, 20 ft", qty: "60", status: "Ordered" },
      { item: "Gunite mix", qty: "18 yd³", status: "Ordered" },
      { item: "Pool light kit", qty: "2", status: "Delivery Tue" },
    ],
  },
  costing: {
    title: "Job cost · Hillcrest pool",
    bars: [
      { label: "Materials", value: 72 },
      { label: "Labour", value: 54 },
      { label: "Subs", value: 31 },
      { label: "Equipment", value: 18 },
    ],
    margin: "Margin 27% · on track",
  },
  crew: {
    title: "Tomorrow",
    rows: [
      { crew: "Crew A", initial: "A", job: "Hillcrest pool", time: "7:00" },
      { crew: "Crew B", initial: "B", job: "Oak St roof", time: "7:30" },
      { crew: "Sub · Volt Co", initial: "V", job: "Maple electrical", time: "9:00" },
    ],
  },
  free: { title: "18:30", subtitle: "Nothing needs you tonight." },
};
