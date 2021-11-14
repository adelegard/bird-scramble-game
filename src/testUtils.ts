import { Bird, BirdHalf, Card, CardDirection, CardSides } from './types';
export const getMockCardSides = (
  overrides: Partial<CardSides> = {}
): CardSides => {
  return {
    [CardDirection.UP]: {
      bird: Bird.CARDINAL,
      birdHalf: BirdHalf.LOWER,
    },
    [CardDirection.DOWN]: {
      bird: Bird.GOLDFINCH,
      birdHalf: BirdHalf.LOWER,
    },
    [CardDirection.LEFT]: {
      bird: Bird.INDIGO_BUNTING,
      birdHalf: BirdHalf.LOWER,
    },
    [CardDirection.RIGHT]: {
      bird: Bird.PAINTED_BUNTING,
      birdHalf: BirdHalf.LOWER,
    },
    ...overrides,
  };
};

export const getMockCard = (
  {
    card = {},
    cardSides = {},
  }: {
    card?: Partial<Card>;
    cardSides?: Partial<CardSides>;
  } = { card: {}, cardSides: {} }
): Card => {
  return {
    sides: {
      [CardDirection.UP]: {
        bird: Bird.CARDINAL,
        birdHalf: BirdHalf.LOWER,
      },
      [CardDirection.DOWN]: {
        bird: Bird.GOLDFINCH,
        birdHalf: BirdHalf.LOWER,
      },
      [CardDirection.LEFT]: {
        bird: Bird.INDIGO_BUNTING,
        birdHalf: BirdHalf.LOWER,
      },
      [CardDirection.RIGHT]: {
        bird: Bird.PAINTED_BUNTING,
        birdHalf: BirdHalf.LOWER,
      },
      ...cardSides,
    },
    ...card,
  };
};
