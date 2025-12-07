
export interface ElementData {
  number: number;
  symbol: string;
  name: string; // English name for TTS
  vietnameseName: string; // Vietnamese name for display
  category: string;
  group: number;
  period: number;
  xpos: number;
  ypos: number;
  // Detailed info (formerly fetched)
  summary: string;
  atomicMass: string;
  standardState: string;
  electronConfiguration: string;
  applications: string[];
}

export enum ElementCategory {
  ALKALI_METAL = 'Alkali Metal',
  ALKALINE_EARTH_METAL = 'Alkaline Earth Metal',
  TRANSITION_METAL = 'Transition Metal',
  POST_TRANSITION_METAL = 'Post-transition Metal',
  METALLOID = 'Metalloid',
  REACTIVE_NONMETAL = 'Reactive Nonmetal',
  NOBLE_GAS = 'Noble Gas',
  LANTHANIDE = 'Lanthanide',
  ACTINIDE = 'Actinide',
  UNKNOWN = 'Unknown'
}
