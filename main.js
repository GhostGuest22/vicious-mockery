let viciousMockeryOutput = ""; // This will be the string that the program eventually returns

const adjectives = [          // This will hold offensive adjectives we can use for our insult.
"clammy",
"daft",
"drunken",
"grotesque",
"idiotic",
"puerile",
"repugnant",
"smelly",
"terrible",
"weak",
];     

const nouns = [               // Holds D&D-relevant nouns.
"bastard",
"cunt",
"dork",
"freak",
"fucktard",
"meathead",
"pig-fucker",
"shitstain",
"turdbucket",
"wanker",
];       

function getRandomItem(array) { // Returns a random selection from our arrays
  return array[Math.floor(Math.random() * array.length)];
}

function buildSentence(adj, noun) {
  const sentenceTemplates = [   // Holds our templates.
    `You're nothing but a ${adj} ${noun}!`,
    `Oi, ${noun}! The ${adj} club called to ask if you wanted to renew your membership.`,
    `Oh, I'm sorry, I don't speak ${noun}.`,
    `You look like you've just returned from an extended stay at ${adj} ${noun} island.`,
    `Is everybody ${adj} where you come from?`,
    `Look what the dragon dragged in, burned to a crisp, ate, threw up, ate again and then shat out!`,
    `I wrote a song about you. It's called "${adj} ${noun}".`,
    `Eurgh! What's that smell? Oh, it's probably this ${noun} over here.`,
    `Achoo! I'm so sorry, I'm allergic to ${noun}s.`,
    `I've never met somebody so ${adj} before. What's that like?`,
  ]; 
  let sentence = getRandomItem(sentenceTemplates);
  return sentence;
}

console.log(buildSentence(getRandomItem(adjectives), getRandomItem(nouns)));