import type { JSX } from "react";
import {
  FaCrown,
  FaFeather,
  FaFire,
  FaGem,
  FaHeart,
  FaLeaf,
  FaMagic,
  FaRainbow,
  FaStar,
  FaWater,
  FaDragon,
  FaCloudSun,
  FaChessQueen,
  FaBolt,
  FaMoon,
} from "react-icons/fa";

export interface Personality {
  traits: string[];
  destiny: string;
  character: string;
  icon: JSX.Element;
}

/* --------------------------------------------------
   Base 10 Characters (Your Original Ones)
--------------------------------------------------- */
export const personalities: Personality[] = [
  {
    traits: ["Energetic", "Optimistic"],
    destiny: "Sun Heroine",
    character: "Moana",
    icon: <FaWater color="#0099ff" size={70} />,
  },
  {
    traits: ["Kind", "Gentle"],
    destiny: "Princess of Purity",
    character: "Snow White",
    icon: <FaCrown color="#ffcc00" size={70} />,
  },
  {
    traits: ["Creative", "Funny"],
    destiny: "Dream Weaver",
    character: "Aurora",
    icon: <FaStar color="#ff66ff" size={70} />,
  },
  {
    traits: ["Wise", "Kind"],
    destiny: "Forest Guardian",
    character: "Rapunzel",
    icon: <FaLeaf color="#33cc33" size={70} />,
  },
  {
    traits: ["Strong", "Loyal"],
    destiny: "Royal Protector",
    character: "Cinderella",
    icon: <FaHeart color="#ff6699" size={70} />,
  },
  {
    traits: ["Smart", "Adventurous"],
    destiny: "Sky Explorer",
    character: "Mulan",
    icon: <FaFire color="#ff3300" size={70} />,
  },
  {
    traits: ["Helpful", "Caring"],
    destiny: "Heart Healer",
    character: "Belle",
    icon: <FaFeather color="#ff99cc" size={70} />,
  },
  {
    traits: ["Mysterious", "Intelligent"],
    destiny: "Moon Sage",
    character: "Elowyn",
    icon: <FaMagic color="#cc33ff" size={70} />,
  },
  {
    traits: ["Ambitious", "Focused"],
    destiny: "Queen of Stars",
    character: "Lumina",
    icon: <FaGem color="#00ccff" size={70} />,
  },
  {
    traits: ["Curious", "Brave"],
    destiny: "Ocean Princess",
    character: "Ariel",
    icon: <FaRainbow color="#ff66cc" size={70} />,
  },

  /* --------------------------------------------------
     5 NEW Modern / Fantasy Characters
  --------------------------------------------------- */
  {
    traits: ["Fearless", "Powerful"],
    destiny: "Dragon Tamer",
    character: "Arwen Stormblade",
    icon: <FaDragon color="#ff4444" size={70} />,
  },
  {
    traits: ["Calm", "Graceful"],
    destiny: "Sky Whisperer",
    character: "Seraphina",
    icon: <FaCloudSun color="#ffaa33" size={70} />,
  },
  {
    traits: ["Royal", "Strategic"],
    destiny: "Empress of Realms",
    character: "Valeria",
    icon: <FaChessQueen color="#cc99ff" size={70} />,
  },
  {
    traits: ["Swift", "Electric"],
    destiny: "Storm Shifter",
    character: "Nyra Volt",
    icon: <FaBolt color="#ffff33" size={70} />,
  },
  {
    traits: ["Elegant", "Mystical"],
    destiny: "Night Enchanter",
    character: "Selene Mooncrest",
    icon: <FaMoon color="#99ccff" size={70} />,
  },
];

/* --------------------------------------------------
   Helper: Pick Result From Number (Old Method)
--------------------------------------------------- */
export function getResultByNumber(num: number): Personality {
  return personalities[num % personalities.length];
}

/* --------------------------------------------------
   Helper: Random Personality (Modern Method)
--------------------------------------------------- */
export function getRandomPersonality(): Personality {
  const index = Math.floor(Math.random() * personalities.length);
  return personalities[index];
}

/* --------------------------------------------------
   Helper: Birthday Check
--------------------------------------------------- */
export function isBirthday(birthdate: string): boolean {
  const today = new Date();
  const bd = new Date(birthdate);
  return today.getDate() === bd.getDate() && today.getMonth() === bd.getMonth();
}
