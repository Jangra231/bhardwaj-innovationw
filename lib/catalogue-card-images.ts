// Primary catalogue images are already item-specific. These targeted overrides
// replace the few source duplicates with distinct, relevant alternatives already
// used in the verified catalogue galleries.
const CARD_IMAGE_OVERRIDES: Record<string, string> = {
  "ais140-gps-hardware": "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?auto=format&fit=crop&q=80&w=1000",
  "gps-dash-camera": "https://images.unsplash.com/photo-1624602482469-3cd73308e649?auto=format&fit=crop&q=80&w=1000",
  "fatigue-sensor-solutions": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200",
};

export const getCatalogueCardImage = (id: string, fallback: string) =>
  CARD_IMAGE_OVERRIDES[id] ?? fallback;
