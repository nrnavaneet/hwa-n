export type MakingStep = {
  id: string;
  number: string;
  title: string;
  telugu: string;
  lede: string;
  body: string;
  facts: string[];
};

export const MAKING_STEPS: MakingStep[] = [
  {
    id: "hide",
    number: "01",
    title: "The hide",
    telugu: "తోలు",
    lede: "From a skin to a sheet of light.",
    body: "The maker starts with a skin — today most often goat, historically deer or buffalo, chosen to suit the character. It is boiled to lift the grease and impurities, stretched tight on a wooden frame and left in the sun for days. When it is dry it is thin, stiff and almost transparent, like parchment held to a window.",
    facts: [
      "Goat hide is the common choice today.",
      "Drying can take several days; the skin must not wrinkle.",
      "A large figure may need more than one skin.",
    ],
  },
  {
    id: "draw",
    number: "02",
    title: "The drawing",
    telugu: "గీత",
    lede: "An old silhouette becomes a new one.",
    body: "The figure is drawn on the translucent hide in chalk, either freehand or by laying an older puppet underneath and tracing its outline. The lines are then gone over with a needle, and a bamboo stem dipped in ink — the rekni — is used to draw the details of dress and ornament. The head and torso are planned as a single piece; the limbs will be cut separately.",
    facts: [
      "Tracing from an existing figure keeps a family's style intact.",
      "The bamboo pen is called a rekni.",
      "Only the parts that must move are cut apart.",
    ],
  },
  {
    id: "cut",
    number: "03",
    title: "The cutting",
    telugu: "కోత",
    lede: "The blade draws and polishes at once.",
    body: "A sharp blade follows the outline and separates the pieces. The same blade is used to clean the surface and bring up a slight sheen, so the hide catches the lamplight evenly. Every limb is cut as its own shape, ready to be joined back at the joint.",
    facts: [
      "A single figure can take days of cutting.",
      "The surface is scraped and polished by hand.",
      "Mistakes cannot be pasted over; the hide is unforgiving.",
    ],
  },
  {
    id: "perforate",
    number: "04",
    title: "The perforation",
    telugu: "రంధ్రాలు",
    lede: "Thousands of holes, and the costume appears.",
    body: "Patterns are punched through the leather where jewellery, fabric and flame should fall. Held against the lamp, these holes become lines of light: the border of a skirt, the beads of a necklace, the spokes of a chariot wheel. This lacework is the signature of the Andhra figures.",
    facts: [
      "Each hole is punched by hand.",
      "Dense rows read as solid ornament; single dots as sparkle.",
      "The pattern must be planned before any colour is laid.",
    ],
  },
  {
    id: "colour",
    number: "05",
    title: "The colour",
    telugu: "రంగు",
    lede: "Turmeric, flower, leaf and soot.",
    body: "Traditionally the colours came from the kitchen and the field: turmeric for yellow, the moduga flower for red, the amada leaf for green, and kerosene-lamp soot for black. Both sides of the hide are painted so the colour shows through the shadow. Many workshops still mix these pigments; some now use waterproof colour for a wider palette.",
    facts: [
      "Turmeric yellow, moduga red, amada green, soot black.",
      "Both faces are painted, not just the front.",
      "Colour and perforation together build the image.",
    ],
  },
  {
    id: "joint",
    number: "06",
    title: "The joints",
    telugu: "కీళ్ళు",
    lede: "String at shoulder, elbow, hip and knee.",
    body: "The separate pieces are pierced and tied back together with string at the neck, shoulders, elbows, hips and knees, loose enough to swing and tight enough to hold a pose. Bamboo splits are bound to the body and to the moving arm: the rods the puppeteer will hold above the screen.",
    facts: [
      "The head and torso stay in one piece.",
      "String joints, not hinges, give the loose walk of a shadow puppet.",
      "Two or more rods control each principal figure.",
    ],
  },
  {
    id: "figure",
    number: "07",
    title: "The figure",
    telugu: "బొమ్మ",
    lede: "The eyes are painted last.",
    body: "The finished figure is dried, checked and weighted so it hangs flat. In many workshops the eyes are painted last: until the pupils are set, the makers treat it as hide and colour, and after them, as a character. Then it is carried to the screen, held to the lamp, and given a voice.",
    facts: [
      "The eyes are added at the end of the work.",
      "Figures are stored flat, between boards or cloth.",
      "A family keeps several versions of each main character.",
    ],
  },
];

export const MAKING_TOOLS = [
  { name: "Sharp blade", note: "Cuts the outline and polishes the surface." },
  { name: "Needle", note: "Scores the design before ink and punches the lace." },
  { name: "Punch", note: "Opens the larger holes of the ornament." },
  { name: "Rekni", note: "A bamboo pen for outlining in ink." },
  { name: "Wooden frame", note: "Holds the hide taut while it dries." },
  { name: "Bamboo splits", note: "Become the rods that move the figure." },
];
