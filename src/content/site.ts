export const SITE = {
  name: "THOLU",
  telugu: "తోలు బొమ్మలాట",
  teluguMeaning: "the dance of leather dolls",
  tagline: "A cinema older than cinema.",
  description:
    "A field guide to Tholu Bommalata, the vanishing leather shadow play of Andhra Pradesh. Meet the makers, learn the craft, and step behind the screen.",
  year: 2026,
  author: "N R Navaneet",
} as const;

export type Act = {
  number: string;
  roman: string;
  href: string;
  nav: string;
  title: string;
  kicker: string;
  blurb: string;
};

export const ACTS: Act[] = [
  {
    number: "01",
    roman: "I",
    href: "/",
    nav: "The lamp",
    title: "The lamp",
    kicker: "Why this play matters",
    blurb: "A whole cinema, hidden behind a white cloth.",
  },
  {
    number: "02",
    roman: "II",
    href: "/craft",
    nav: "The craft",
    title: "The craft",
    kicker: "A performance in cross-section",
    blurb: "Cloth, flame, hide and a voice that plays every part.",
  },
  {
    number: "03",
    roman: "III",
    href: "/making",
    nav: "The making",
    title: "The making",
    kicker: "From hide to god",
    blurb: "Seven hands-on stages, and the small holes that make light speak.",
  },
  {
    number: "04",
    roman: "IV",
    href: "/makers",
    nav: "The makers",
    title: "The makers",
    kicker: "The families of Nimmalakunta",
    blurb: "The village that kept the figures, and the economics that test them.",
  },
  {
    number: "05",
    roman: "V",
    href: "/stage",
    nav: "The stage",
    title: "The stage",
    kicker: "An interactive shadow play",
    blurb: "Move the lamp. Pose the dancer. Change the story.",
  },
  {
    number: "06",
    roman: "VI",
    href: "/learn",
    nav: "Learn",
    title: "Learn it",
    kicker: "Your first evening",
    blurb: "Cardboard, a split pin and a lamp. Start tonight.",
  },
];

export const PROGRAMME = {
  href: "/sources",
  nav: "Programme",
  title: "The programme",
} as const;

export const NAV = [...ACTS.map((act) => ({ href: act.href, label: act.nav })), PROGRAMME];

export function actForPath(pathname: string): Act | undefined {
  if (pathname === "/") return ACTS[0];
  return ACTS.find((act) => act.href !== "/" && pathname.startsWith(act.href));
}
