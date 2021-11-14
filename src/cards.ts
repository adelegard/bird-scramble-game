import { Card, CardDirection, Bird, BirdHalf } from './types';

const cards: Card[] = [
  {
    num: 1,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
		}
  },
  {
    num: 2,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
		}
  },
  {
    num: 3,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.LOWER,
			},
		}
  },
  {
    num: 4,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
		}
  },
  {
    num: 5,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
		}
  },
  {
    num: 6,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
		}
  },
  {
    num: 7,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.UPPER,
			},
		}
  },
  {
    num: 8,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.LOWER,
			},
		}
  },
  {
    num: 9,
		sides: {
			[CardDirection.UP]: {
				bird: Bird.INDIGO_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.DOWN]: {
				bird: Bird.GOLDFINCH,
				birdHalf: BirdHalf.LOWER,
			},
			[CardDirection.LEFT]: {
				bird: Bird.PAINTED_BUNTING,
				birdHalf: BirdHalf.UPPER,
			},
			[CardDirection.RIGHT]: {
				bird: Bird.CARDINAL,
				birdHalf: BirdHalf.LOWER,
			},
		}
  },
];

export default cards;
