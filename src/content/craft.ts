export type PuppetPart = {
  id: string;
  name: string;
  telugu?: string;
  note: string;
};

export const PUPPET_PARTS: PuppetPart[] = [
  {
    id: "head",
    name: "Head and crown",
    telugu: "తల",
    note: "Carved as a single silhouette with the torso, then crowned and ornamented to mark rank. Divine faces are calm and frontal; demons wear fangs and wide eyes.",
  },
  {
    id: "eyes",
    name: "The eyes",
    telugu: "కళ్ళు",
    note: "Painted last in many workshops. Until the pupils are set, a figure is only hide and colour; after them, the makers treat it as a character.",
  },
  {
    id: "joints",
    name: "Joints",
    telugu: "కీళ్ళు",
    note: "Shoulders, elbows, hips and knees are pierced and tied with string so the limbs swing freely. The head and torso stay in one piece.",
  },
  {
    id: "perforations",
    name: "Perforations",
    telugu: "రంధ్రాలు",
    note: "Thousands of punched holes draw jewellery, fabric and flame. Held to the lamp, they turn the leather into lace and let light write the costume.",
  },
  {
    id: "rods",
    name: "Rods",
    telugu: "కర్రలు",
    note: "Bamboo splits carry the main figure and the moving limbs. The lead puppeteer holds the body rod; helpers work the arms and legs in time with the song.",
  },
  {
    id: "colour",
    name: "Colour",
    telugu: "రంగు",
    note: "Turmeric for yellow, the moduga flower for red, amada leaf for green, lamp soot for black. Both sides are painted so the colour reads in the shadow.",
  },
];

export type StageLayer = {
  id: string;
  label: string;
  short: string;
  note: string;
};

export const STAGE_LAYERS: StageLayer[] = [
  {
    id: "lamp",
    label: "The lamp",
    short: "Light",
    note: "An oil lamp or a bare bulb sits behind the screen. Move it closer and the figures swell; pull it back and they shrink. The light is the only actor that never appears.",
  },
  {
    id: "screen",
    label: "The screen",
    short: "Cloth",
    note: "A white cloth, often around twelve feet by nine, stretched on a frame of bamboo or wood. It must be tight enough to hold a shadow and thin enough to glow.",
  },
  {
    id: "figures",
    label: "The figures",
    short: "Hide",
    note: "Painted, pierced leather, one to two metres tall, pressed flat against the cloth. Their colour passes through the hide; their outline becomes the drawing.",
  },
  {
    id: "hands",
    label: "The puppeteers",
    short: "Hands",
    note: "The lead puppeteer holds the body rod; two or three others move the limbs. They stand behind the screen, unseen, working above their heads for hours.",
  },
  {
    id: "sound",
    label: "The music",
    short: "Sound",
    note: "A singer narrates and voices every part. Drums, cymbals and a reed pipe keep time. The story reaches the audience as song before it is seen as shadow.",
  },
  {
    id: "audience",
    label: "The audience",
    short: "Village",
    note: "The show is staged for a village, a temple festival or a family. The audience sees only the lit cloth — never the lamp, the rods or the hands that make it move.",
  },
];

export const MUSIC = [
  { name: "Muddalam", note: "A double-headed drum that sets the walking pulse of a scene." },
  { name: "Mridangam", note: "The barrel drum of South Indian music, used for longer rhythmic passages." },
  { name: "Cymbals", note: "Thin metal cymbals that mark the beat and lift a battle or a dance." },
  { name: "Harmonium", note: "A reed organ that carries the melody under the singer." },
  { name: "Mukhaveena", note: "A reed pipe, blown for entries, processions and the gods." },
  { name: "Shankha", note: "A conch, sounded to open the night and to announce a royal entrance." },
];

export const REPERTOIRE = [
  {
    title: "The Ranganatha Ramayana",
    note: "A Telugu Ramayana in the plain dvipada metre, traditionally dated to around 1300 CE and attributed to Gona Budda Reddy. It was shaped for recitation and for the shadow screen, and it remains the spine of the repertoire.",
  },
  {
    title: "The opening rites",
    note: "The night begins with sung invocations, with puppets of Ganesha and Saraswati raised to the screen. Only after the gods have entered does the story start.",
  },
  {
    title: "The jesters",
    note: "A short comic skit introduces Bangarakka, Jettupoligatu and Ketigadu, who salute the patron and the audience — and tease them. The clowns return between episodes all night.",
  },
  {
    title: "The conventions",
    note: "Divine characters enter from the right; demons drop in from above to a burst of sound. A trained audience can read a character's nature from the direction they arrive.",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  note: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "c. 3rd century BCE",
    title: "Shadow play in India",
    note: "Travelling storytellers are described using light, cloth and cut figures. The southern leather tradition is usually traced to this long prehistory.",
  },
  {
    year: "c. 1208 CE",
    title: "In the inscriptions",
    note: "Records from the early thirteenth century name puppeteers and the gifts they gave and received, a sign of the form's standing.",
  },
  {
    year: "13th century",
    title: "First in a text",
    note: "The Telugu Panditaradhya Charitra carries the earliest known textual reference to tholu bommalata.",
  },
  {
    year: "c. 1300 CE",
    title: "A Ramayana for the screen",
    note: "The Ranganatha Ramayana is composed in Telugu, in a metre built for singing, and becomes the main text of the shadow theatre.",
  },
  {
    year: "16th century",
    title: "Under Vijayanagara",
    note: "Royal and temple patronage supports large troupes and richly worked figures. The form reaches its widest reach.",
  },
  {
    year: "18th century",
    title: "A migration south",
    note: "Puppeteer families move from present-day Maharashtra into Andhra, Telangana and Karnataka, shaping the modern troupes and carrying the Aare dialect with them.",
  },
  {
    year: "Since the 1970s",
    title: "The long fade",
    note: "Cinema, then television, then the phone displace the all-night show. Many puppeteers turn to farming; others make lampshades and wall hangings to survive.",
  },
  {
    year: "2008",
    title: "A Geographical Indication",
    note: "Andhra Pradesh leather puppetry receives a GI tag, protecting the name of the craft and its link to Nimmalakunta.",
  },
  {
    year: "2020",
    title: "A national honour",
    note: "The puppeteer and maker Dalavai Chalapathi Rao is awarded the Padma Shri, a rare spotlight on a vanishing trade.",
  },
];

export const CRAFT_FACTS = [
  { figure: "1–2 m", label: "the height of a principal figure" },
  { figure: "12 × 9 ft", label: "a typical cloth screen" },
  { figure: "6–8", label: "performers in a family troupe" },
  { figure: "6+ hrs", label: "a full night's performance" },
];
