// lib/utils/images.ts
// Presentation-layer only — maps lodge IDs to their photo paths.

export function getLodgeImagePath(lodgeId: string): string {
  return `/images/lodges/${lodgeId}.jpg`;
}

export function getHeroImagePath(): string {
  return "/images/hero/hero-safari.jpg";
}