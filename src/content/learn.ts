export type LearnStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tip: string;
};

export const MATERIALS = [
  "A cereal box or any stiff card",
  "The printed template, or a pencil and paper to draw your own",
  "Scissors and a craft knife (adults only)",
  "A needle, a skewer or a hole punch",
  "Two split pins (paper fasteners)",
  "Two thin sticks or bamboo skewers",
  "Tape or sticky putty",
  "A table lamp or a phone torch",
  "A white sheet, a wall or a door",
];

export const LEARN_STEPS: LearnStep[] = [
  {
    id: "choose",
    number: "01",
    title: "Choose a figure",
    body: "Start with one character: a dancer, a deer or a bird. A strong outline matters more than detail — you are drawing for light, not for paper.",
    tip: "Simple shapes read best in shadow. A familiar story helps too.",
  },
  {
    id: "draw",
    number: "02",
    title: "Draw the parts",
    body: "Trace the template, or draw the body, one arm, one leg and a head as separate pieces. Leave a small overlap at each joint where the split pin will go.",
    tip: "Mark the joint dots before cutting. A pencil dot is easy; a hole is not.",
  },
  {
    id: "cut",
    number: "03",
    title: "Cut it out",
    body: "Cut slowly along the outline with scissors. Keep the edges smooth — a jagged edge becomes a jagged shadow, and shadows forgive nothing.",
    tip: "Cut the largest shapes first and the small details last.",
  },
  {
    id: "lace",
    number: "04",
    title: "Punch the lace",
    body: "Punch small holes along the borders and inside the pattern: a necklace, a skirt hem, a crown. Hold the card to a lamp to check what the light will do.",
    tip: "Fewer, bolder holes are better than many tiny ones that close up.",
  },
  {
    id: "join",
    number: "05",
    title: "Join the joints",
    body: "Make a hole at each joint, overlap the pieces and fix them with a split pin. Leave the pin a little loose so the limb swings but does not flop.",
    tip: "The elbow and knee are what make the figure look alive. Test them.",
  },
  {
    id: "rod",
    number: "06",
    title: "Add the rods",
    body: "Tape one stick to the body and one to a moving arm or leg. Hold the body rod in your main hand and the limb rod in the other.",
    tip: "Keep the rods behind the figure so they stay out of the light.",
  },
  {
    id: "screen",
    number: "07",
    title: "Set the screen",
    body: "Hang a white sheet, or use a plain wall. Put the lamp behind it, darken the room, and stand between the lamp and the screen with your figure flat against the cloth.",
    tip: "A sheet with a crease will show the crease. Pull it tight.",
  },
  {
    id: "perform",
    number: "08",
    title: "Perform",
    body: "Move slowly. Press the figure to the cloth, tilt the head, swing the arm, and give the character a voice. You have made a shadow play.",
    tip: "The story is in the pauses. Let the audience wait for the next move.",
  },
];

export const LIGHT_RULES = [
  {
    title: "Distance is size",
    note: "Move the figure towards the lamp and its shadow grows. Move it towards the screen and the shadow shrinks. The same figure can be a giant or a child.",
  },
  {
    title: "Close is sharp",
    note: "A figure pressed flat against the screen throws a crisp edge. Lift it away and the shadow softens and blurs. Sharpness is a choice you make with your hand.",
  },
  {
    title: "Two rods, one body",
    note: "A body rod holds the figure; a limb rod brings it to life. Two points of control are enough to suggest walking, dancing and fighting.",
  },
];

export const SAFETY = [
  "Use an LED lamp or a phone torch, never a candle or a bare hot bulb.",
  "Keep the lamp away from the sheet and never leave it unattended.",
  "Adults should handle the craft knife; children can use safety scissors.",
  "Mind fingers when punching holes and pushing split pins.",
];

export const CHECKLIST = [
  "I gathered the card, pins, sticks and lamp.",
  "I drew a figure with a clear outline.",
  "I cut the body, arm and leg as separate pieces.",
  "I punched holes for the lace and checked them against the light.",
  "I joined the joints so the limbs swing.",
  "I taped a rod to the body and one to a limb.",
  "I set a screen, darkened the room and performed.",
];
