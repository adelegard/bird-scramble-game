export enum Bird {
	CARDINAL = 'CARDINAL', // red
	GOLDFINCH = 'GOLDFINCH', // orange and black
	INDIGO_BUNTING = 'INDIGO_BUNTING', // blue
	PAINTED_BUNTING = 'PAINTED_BUNTING' // green & red
}

export enum BirdHalf {
	LOWER = 'LOWER',
	UPPER = 'UPPER',
}

export interface CardSide {
	bird: Bird;
	birdHalf: BirdHalf;
	cardMatches?: Card[];
}

export enum CardDirection {
	UP = 'UP',
	DOWN = 'DOWN',
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}

export const CardDirectionOpposites = {
	[CardDirection.UP]: CardDirection.DOWN,
	[CardDirection.DOWN]: CardDirection.UP,
	[CardDirection.LEFT]: CardDirection.RIGHT,
	[CardDirection.RIGHT]: CardDirection.LEFT,
};

export interface CardPosition {
	x: number;
	y: number;
}

export enum CardRotation {
	ZERO = 'ZERO',
	NINETY = 'NINETY',
	ONE_EIGHTY = 'ONE_EIGHTY',
	TWO_SEVENTY = 'TWO_SEVENTY',
}

// clockwise 
export const CardDirectionForRotation = {
	[CardRotation.ZERO]: {
		[CardDirection.UP]: CardDirection.UP,
		[CardDirection.DOWN]: CardDirection.DOWN,
		[CardDirection.LEFT]: CardDirection.LEFT,
		[CardDirection.RIGHT]: CardDirection.RIGHT,
	},
	[CardRotation.NINETY]: {
		[CardDirection.UP]: CardDirection.LEFT,
		[CardDirection.DOWN]: CardDirection.RIGHT,
		[CardDirection.LEFT]: CardDirection.DOWN,
		[CardDirection.RIGHT]: CardDirection.UP,
	},
	[CardRotation.ONE_EIGHTY]: {
		[CardDirection.UP]: CardDirection.DOWN,
		[CardDirection.DOWN]: CardDirection.UP,
		[CardDirection.LEFT]: CardDirection.RIGHT,
		[CardDirection.RIGHT]: CardDirection.LEFT,
	},
	[CardRotation.TWO_SEVENTY]: {
		[CardDirection.UP]: CardDirection.RIGHT,
		[CardDirection.DOWN]: CardDirection.LEFT,
		[CardDirection.LEFT]: CardDirection.UP,
		[CardDirection.RIGHT]: CardDirection.DOWN,
	},
}

export interface CardSides {
	[CardDirection.UP]: CardSide;
	[CardDirection.DOWN]: CardSide;
	[CardDirection.LEFT]: CardSide;
	[CardDirection.RIGHT]: CardSide;
}

export interface Card {
	attemptedPlacement?: boolean;
	num?: number;
	rotation?: CardRotation;
	sides: CardSides;
}

// x,y

export interface Board {
	[key: string]: Card;
}


// '0,0'?: Card;
// '1,0'?: Card;
// '2,0'?: Card;
// '0,1'?: Card;
// '1,1'?: Card;
// '2,1'?: Card;
// '0,2'?: Card;
// '1,2'?: Card;
// '2,2'?: Card;