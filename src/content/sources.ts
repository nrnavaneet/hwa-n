export type Source = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  year: string;
  href: string;
  note: string;
};

export const SOURCES: Source[] = [
  {
    id: "impart",
    title: "Tholu Bommalata",
    author: "Impart Encyclopedia of Art",
    publisher: "Impart",
    year: "2022",
    href: "https://imp-art.org/articles/tholu-bommalata/",
    note: "The most detailed account used here: materials, technique, the Aare Kapu community, repertoire and the long history.",
  },
  {
    id: "sahapedia",
    title: "Tholu Bommalata: Telugu Shadow Puppet Theatre",
    author: "Sahapedia",
    publisher: "Sahapedia",
    year: "n.d.",
    href: "http://www.sahapedia.org/tholu-bommalata-telugu-shadow-puppet-theatre",
    note: "Overview of the form, its regional spread and its decline through the twentieth century.",
  },
  {
    id: "thehindu-losing",
    title: "Nimmalakunta leather puppetry losing its shine",
    author: "Ramesh Susarla",
    publisher: "The Hindu",
    year: "2019",
    href: "https://www.thehindu.com/news/national/andhra-pradesh/nimmalakunta-leather-puppetry-losing-its-shine/article30039262.ece",
    note: "Source for the figures of about forty families making goods and ten to fifteen troupes still able to stage a show.",
  },
  {
    id: "thehindu-lights",
    title: "Are the lights going out for Tholu Bommalata in Andhra Pradesh?",
    author: "Ramesh Susarla",
    publisher: "The Hindu",
    year: "2019",
    href: "https://www.thehindu.com/entertainment/art/are-the-lights-going-out-for-tholu-bommalata-in-andhra-pradesh/article30210670.ece",
    note: "The craft, its economics and the turn to décor and workshops, reported from Nimmalakunta.",
  },
  {
    id: "thehindu-padma",
    title: "This award is special, says leather puppetry artist",
    author: "Ramesh Susarla",
    publisher: "The Hindu",
    year: "2020",
    href: "https://www.thehindu.com/news/national/andhra-pradesh/this-award-is-special-says-leather-puppetry-artist/article30655352.ece",
    note: "On the Padma Shri awarded to Dalavai Chalapathi Rao and his decades in the craft.",
  },
  {
    id: "padma-list",
    title: "Padma Awards 2020 — awardees list",
    author: "Ministry of Home Affairs",
    publisher: "Government of India",
    year: "2020",
    href: "https://www.mha.gov.in/sites/default/files/2020AwardeesList_25012020_1.pdf",
    note: "The official record of the Padma Shri conferred on Dalavai Chalapathi Rao.",
  },
  {
    id: "tnie",
    title: "Emerging from the shadows",
    author: "Konkana Ray",
    publisher: "The New Indian Express",
    year: "2023",
    href: "https://www.newindianexpress.com/lifestyle/travel/2023/Jul/22/emerging-from-the-shadows-2596825.html",
    note: "Interview with Dalavai Kullayappa: the migration of puppeteer families, his awards, and shows abroad.",
  },
  {
    id: "indiaartreview",
    title: "Dadi and Sriramulu: two Indian puppetry artists and their work",
    author: "India Art Review",
    publisher: "India Art Review",
    year: "2020",
    href: "https://indiaartreview.com/stories/dadi-and-sriramulu-indian-puppeteers-and-their-improvisations",
    note: "On Sindhe Sriramulu, his family troupe, and how leather décor became the household income.",
  },
  {
    id: "mediaindia",
    title: "Tholu Bommalata: shadow puppetry art of Andhra Pradesh",
    author: "E. Prema",
    publisher: "Media India Group",
    year: "2021",
    href: "https://mediaindia.eu/culture/tholu-bommalata-shadow-puppetry-art-of-andhra-pradesh/",
    note: "Quotes from Kandey Anjanappa and a clear description of the making process.",
  },
  {
    id: "ibef-gi",
    title: "Geographical Indications of Andhra Pradesh",
    author: "India Brand Equity Foundation",
    publisher: "IBEF",
    year: "n.d.",
    href: "https://www.ibef.org/giofindia/andhrapradesh",
    note: "The GI record for Andhra Pradesh leather puppetry, granted in 2008, and how figures are scaled against the light.",
  },
  {
    id: "wepa",
    title: "Tolu Bommalata",
    author: "World Encyclopedia of Puppetry Arts",
    publisher: "UNIMA",
    year: "n.d.",
    href: "https://wepa.unima.org/en/tolu-bommalata/",
    note: "The form's place among the world's puppet traditions, with its instruments and conventions.",
  },
  {
    id: "sarmaya",
    title: "Tholu Bommalaata — Dance of the Shadow Puppets",
    author: "Sarmaya Arts Foundation",
    publisher: "Sarmaya",
    year: "2020",
    href: "https://sarmaya.in/spotlight/tholu-bommalaata-dance-of-the-shadow-puppets/",
    note: "A filmed record of a performance and of the Sindhe family's practice.",
  },
  {
    id: "teluguhistory",
    title: "Gona Budda Reddi",
    author: "Telugu History",
    publisher: "teluguhistory.org",
    year: "n.d.",
    href: "https://teluguhistory.org/en/people/gona-budda-reddi",
    note: "On the poet-ruler traditionally credited with the Ranganatha Ramayana.",
  },
  {
    id: "theheritagelab",
    title: "Ramayana in puppets",
    author: "The Heritage Lab",
    publisher: "The Heritage Lab",
    year: "n.d.",
    href: "https://www.theheritagelab.in/ramayana-in-puppets-india-and-abroad/",
    note: "How the Ramayana became the shared repertoire of India's shadow theatres, Tholu Bommalata among them.",
  },
  {
    id: "thenational",
    title: "Dance of the puppets",
    author: "The National",
    publisher: "The National",
    year: "2023",
    href: "https://www.thenationalnews.com/arts-culture/2023/09/30/indian-puppetry-storytelling",
    note: "A wide report on Indian puppetry and a candid quote from Dalavai Chalapathi Rao on the profession's decline.",
  },
];

export type GlossaryEntry = { term: string; telugu?: string; meaning: string };

export const GLOSSARY: GlossaryEntry[] = [
  { term: "Tholu Bommalata", telugu: "తోలు బొమ్మలాట", meaning: "Leather puppet play — the shadow theatre of Andhra Pradesh and Telangana." },
  { term: "Togalu Gombeyaata", telugu: "ತೊಗಲು ಗೊಂಬೆಯಾಟ", meaning: "The Kannada name for the same leather-puppet tradition." },
  { term: "Tholu", telugu: "తోలు", meaning: "Leather or hide." },
  { term: "Bomma", telugu: "బొమ్మ", meaning: "Doll, figure or puppet." },
  { term: "Rekni", meaning: "A bamboo pen used to outline the design on the hide." },
  { term: "Nimmalakunta", meaning: "A village in the Anantapur district of Andhra Pradesh, the craft's best-known centre." },
  { term: "Aare Kapu", meaning: "The community most associated with the craft, whose ancestors migrated south from Maharashtra." },
  { term: "Ranganatha Ramayana", meaning: "The Telugu Ramayana, attributed to Gona Budda Reddy, that supplies most of the repertoire." },
  { term: "Dvipada", meaning: "The two-line Telugu metre in which the Ramayana was composed for recitation." },
  { term: "Muddalam", meaning: "A double-headed drum used to keep the walking rhythm of a scene." },
];

export const COLOPHON = [
  "The images on this site are original drawings made for it, not photographs of the craft.",
  "Quotations are reproduced from the sources listed above, each with its original attribution.",
  "Figures such as troupe counts and product numbers are dated to their source, because they change.",
  "Where sources disagree on a date or a number, the site says so rather than choosing a side.",
];

export const ACCESSIBILITY = [
  "Every page can be read and navigated by keyboard alone.",
  "The lamp on the home page is decorative; if motion is reduced or the device is small, a still image takes its place.",
  "Text and controls are built to meet WCAG AA contrast against the dark background.",
  "Sound never plays on its own — the drone begins only when you switch it on.",
  "The play's movement can be paused; a skip link and a reduced-motion setting are respected throughout.",
];
