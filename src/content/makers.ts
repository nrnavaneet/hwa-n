export type Maker = {
  id: string;
  name: string;
  role: string;
  place: string;
  note: string;
  honours: string[];
  initials: string;
};

export const MAKERS: Maker[] = [
  {
    id: "kullayappa",
    name: "Dalavai Kullayappa",
    role: "Puppeteer, maker and teacher",
    place: "Nimmalakunta",
    note: "Learned the craft from his father, the National Award-winning artist D. Chinna Narayana. A two-time National Award winner, he now takes the figures far from the village, to museums and stages abroad, and teaches as he travels.",
    honours: ["Two-time National Award", "UNESCO Award of Excellence"],
    initials: "DK",
  },
  {
    id: "chalapathi-rao",
    name: "Dalavai Chalapathi Rao",
    role: "Master maker and performer",
    place: "Nimmalakunta",
    note: "Began at thirteen under his father, Khade Rao, and has spent a lifetime cutting, painting and staging the figures. He has trained younger artists under government craft schemes and has shown the work in India and abroad.",
    honours: ["Padma Shri, 2020", "Kala Ratna, 2016"],
    initials: "DC",
  },
  {
    id: "sriramulu",
    name: "Sindhe Sriramulu",
    role: "Puppeteer and workshop leader",
    place: "Nimmalakunta",
    note: "Performs with his mother, Subhadramma, his wife, Bhagyamma, and his uncle's family, and runs workshops in cities. Leather décor and teaching, not the stage, now carry most of the family income.",
    honours: ["National Award", "Performs ten to fifteen shows a month"],
    initials: "SS",
  },
  {
    id: "anjanappa",
    name: "Kandey Anjanappa",
    role: "Maker and puppeteer",
    place: "Nimmalakunta",
    note: "A maker from a family that has practised the craft for more than seven generations. He works slowly, by hand, on each figure, and speaks plainly about how little the market pays for that care.",
    honours: ["Seven generations in the craft"],
    initials: "KA",
  },
];

export const ALSO_MAKING = [
  "Sindhe Chithambara Rao, Dharmavaram",
  "D. Chinna Narayana, Nimmalakunta (late)",
  "the seven brothers and cousins of the Dalavai family",
];

export type MakerQuote = {
  quote: string;
  name: string;
  source: string;
  href: string;
};

export const MAKER_QUOTES: MakerQuote[] = [
  {
    quote:
      "Our forefathers travelled across the subcontinent, conducting puppet shows. Around 400 years ago, they migrated from Maharashtra and settled in Nimmalakunta.",
    name: "Dalavai Kullayappa",
    source: "The New Indian Express, 2023",
    href: "https://www.newindianexpress.com/lifestyle/travel/2023/Jul/22/emerging-from-the-shadows-2596825.html",
  },
  {
    quote:
      "No one conducts shows these days. People are glued to their TV screens. This has killed our profession.",
    name: "Dalavai Chalapathi Rao",
    source: "The National, 2023",
    href: "https://www.thenationalnews.com/arts-culture/2023/09/30/indian-puppetry-storytelling",
  },
  {
    quote:
      "We have been practising this art form for more than seven generations. Most of the time, as there are not too many buyers around, I get only little money.",
    name: "Kandey Anjanappa",
    source: "Media India Group, 2021",
    href: "https://mediaindia.eu/culture/tholu-bommalata-shadow-puppetry-art-of-andhra-pradesh/",
  },
];

export const ECONOMY = [
  {
    figure: "2008",
    title: "The GI tag",
    note: "Andhra Pradesh leather puppetry was granted a Geographical Indication, a legal mark tying the craft to its region. Reporting since then is blunt: the tag has done little to change what makers earn.",
  },
  {
    figure: "40",
    title: "Families making goods",
    note: "The Hindu reported in 2019 that about forty families in Nimmalakunta were producing lampshades, puppets and other leather work.",
  },
  {
    figure: "10–15",
    title: "Troupes able to stage",
    note: "In the same report, only ten to fifteen families had the people, the figures and the money to put on a full performance.",
  },
  {
    figure: "~150",
    title: "Types of décor",
    note: "Lampshades, wall hangings, partitions, bookmarks, jewellery: roughly a hundred and fifty products now carry the old drawings into homes.",
  },
];

export const SUPPORT = [
  {
    title: "See a real performance",
    note: "A living art survives by being watched. Ask at a craft mela, a museum programme or a school festival whether a troupe is performing, and go.",
  },
  {
    title: "Buy from the maker",
    note: "Buy from a workshop or a fair that names the artist, not a stall of anonymous souvenirs. A GI-tagged piece should come with a name and a village.",
  },
  {
    title: "Commission a show",
    note: "A school, a library or a festival can invite a troupe for a night. It pays the artists for what they are best at: performing, not only crafting.",
  },
  {
    title: "Pass on the skill",
    note: "The craft is hereditary, but it does not have to stay closed. Workshops and open teaching are how the next generation of puppeteers will be found.",
  },
];
