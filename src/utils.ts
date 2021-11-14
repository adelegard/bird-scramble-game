import {
  Board,
  Card,
	CardSide,
  CardDirection,
  CardRotation,
  CardDirectionOpposites,
  CardPosition,
  CardDirectionForRotation,
} from './types';

export const printBoard = (board: Board) => {
	const boardSlimmed = Object.entries(board).reduce((prev, [key, card]) => {
		return {
			...prev,
			[key]: {
				num: card.num,
				rotation: card.rotation,
			}
		}
	}, {});
	console.log(boardSlimmed);
}

export const getCardWithAllSides = (card: Card): Card[] => {
	return [
		{
			...card,
			rotation: CardRotation.ZERO,
		},
		{
			...card,
			rotation: CardRotation.NINETY
		},
		{
			...card,
			rotation: CardRotation.ONE_EIGHTY
		},
		{
			...card,
			rotation: CardRotation.TWO_SEVENTY
		}
	]
};

export const doCardSidesMatch = (cardSideA: CardSide, cardSideB: CardSide) => cardSideA.bird === cardSideB.bird && cardSideA.birdHalf !== cardSideB.birdHalf;

export const getMatchingCardsForSide = ({
  cards,
  matchUp,
  matchLeft,
}: {
  cards: Card[];
  matchUp?: CardSide;
  matchLeft?: CardSide;
}): Card[] => {
  return cards.filter(
    (card) =>
      (!matchLeft || doCardSidesMatch(card.sides[CardDirection.LEFT], matchLeft)) &&
      (!matchUp || doCardSidesMatch(card.sides[CardDirection.UP], matchUp))
  );
};

export const advanceCardPosition = (
  cardPosition: CardPosition
): CardPosition => {
  if (cardPosition.x === 2 && cardPosition.y === 2) {
    return { x: 0, y: 0 };
  }
  if (cardPosition.x !== 2) {
    return {
      x: cardPosition.x + 1,
      y: cardPosition.y,
    };
  }
  return {
    x: 0,
    y: cardPosition.y + 1,
  };
};

// unit test this thing
export const doesCardFit = ({
  cardA,
  cardB,
  directionOfB,
}: {
  cardA: Card;
  cardB: Card;
  directionOfB: CardDirection; // relative to A
}) => {
  const cardBDirectionRelativeToA =
    CardDirectionForRotation[cardA.rotation ?? CardRotation.ZERO][directionOfB];
  const cardASide = cardA.sides[cardBDirectionRelativeToA];
  const cardADirectionRelativeToB =
    CardDirectionForRotation[cardB.rotation ?? CardRotation.ZERO][
      CardDirectionOpposites[directionOfB]
    ];
  const cardBSide = cardB.sides[cardADirectionRelativeToB];
  return (
    cardASide.bird === cardBSide.bird &&
    cardASide.birdHalf !== cardBSide.birdHalf
  );
};

export const isCardOnBoard = ({
  board,
  card,
	cardPositionToIgnore,
}: {
  board: Board;
  card: Card;
	cardPositionToIgnore: CardPosition;
}): boolean => {
  return Boolean(Object.keys(board).find((key) => {
		const cardPosition = getCardPositionForString(key);
		if (cardPositionToIgnore && cardPosition.x === cardPositionToIgnore.x && cardPosition.y === cardPositionToIgnore.y) {
			return false;
		}
		return board[key].num === card.num;
	}));
};

export const getCardsThatFit = ({
	board,
  cards,
  cardPosition,
}: {
  board: Board;
  cards: Card[];
  cardPosition: CardPosition;
}): Card[] => {
	const matchingCards = [];
	for (const card of cards) {
		const allCardRotations = getCardWithAllSides(card);
		for (const cardRotated of allCardRotations) {
			if (
        doesCardFitOnBoardAtPosition({ board, card: cardRotated, cardPosition })
      ) {
				matchingCards.push(cardRotated);
      }
		}
	}
	return matchingCards;
}

export const doesCardFitOnBoardAtPosition = ({
  allowFilledCardPosition = true,
  board,
  card,
  cardPosition,
}: {
  allowFilledCardPosition?: boolean;
  board: Board;
  card: Card;
  cardPosition: CardPosition;
}): boolean => {
  if (!allowFilledCardPosition && getBoardCard({ board, cardPosition })) {
    return false;
  }
  const { x, y } = cardPosition;
  if (x !== 0) {
    const cardB = getBoardCard({ board, cardPosition: { x: x - 1, y } });
    const doesLeftMatch =
      !cardB ||
      doesCardFit({
        cardA: card,
        cardB,
        directionOfB: CardDirection.LEFT,
      });
    if (!doesLeftMatch) {
      return false;
    }
  }
  if (x !== 2) {
    const cardB = getBoardCard({ board, cardPosition: { x: x + 1, y } });
    const doesRightMatch =
      !cardB ||
      doesCardFit({
        cardA: card,
        cardB,
        directionOfB: CardDirection.RIGHT,
      });
    if (!doesRightMatch) {
      return false;
    }
  }
  if (y !== 0) {
    const cardB = getBoardCard({ board, cardPosition: { x, y: y - 1 } });
    const doesMatch =
      !cardB ||
      doesCardFit({
        cardA: card,
        cardB,
        directionOfB: CardDirection.UP,
      });
    if (!doesMatch) {
      return false;
    }
  }
  if (y !== 2) {
    const cardB = getBoardCard({ board, cardPosition: { x, y: y + 1 } });
    const doesBelowMatch =
      !cardB ||
      doesCardFit({
        cardA: card,
        cardB,
        directionOfB: CardDirection.DOWN,
      });
    if (!doesBelowMatch) {
      return false;
    }
  }
  return true;
};

export const clearCardPositionFromBoard = ({
	board,
	cardPosition,
}: {board: Board, cardPosition: CardPosition}) => {
	const boardKey = getBoardKeyForPosition(cardPosition);
	delete board[boardKey];
}

export const placeCardOnBoard = ({
  board,
  card,
  cardPosition,
}: {
  board: Board;
  card?: Card;
  cardPosition: CardPosition;
}) => {
  const boardKey = getBoardKeyForPosition(cardPosition);
  if (card) {
    board[boardKey] = card;
  }
};

export const getBoardCard = ({
  board,
  cardPosition,
}: {
  board: Board;
  cardPosition: CardPosition;
}) => board[getBoardKeyForPosition(cardPosition)];

export const getBoardKeyForPosition = (cardPosition: CardPosition) =>
  `${cardPosition.x},${cardPosition.y}`;
export const getCardPositionForString = (
  cardPositionAsStr: string
): CardPosition => {
  const [xStr, yStr] = cardPositionAsStr.split(',');
  return {
    x: parseInt(xStr, 10),
    y: parseInt(yStr, 10),
  };
};

/**
 * 
 * Assumes board cards are placed left to right and top to bottom
 */
export const getLastCardAndPositionOnBoard = (
  board: Board
): { card: Card | undefined; cardPosition: CardPosition | undefined } => {
  const keys = Object.keys(board);
  if (keys.length) {
    const lastKey = keys[keys.length - 1];
    const cardPosition = getCardPositionForString(lastKey);
    const card = board[lastKey];
    return { card, cardPosition };
  }
  return { card: undefined, cardPosition: undefined };
};

export const findNextUnusedCardPosition = (
  board: Board
): CardPosition | undefined => {
  for (const y of [0, 1, 2]) {
    for (const x of [0, 1, 2]) {
      const cardPosition = { x, y };
      if (!getBoardCard({ board, cardPosition })) {
        return cardPosition;
      }
    }
  }
};

export const isBoardSolved = (board: Board): boolean => {
  const boardEntries = Object.entries(board);
  return (
    boardEntries.length === 9 &&
    boardEntries.every(([cardPositionAsStr, card]) => {
      const cardPosition = getCardPositionForString(cardPositionAsStr);
      return doesCardFitOnBoardAtPosition({ board, card, cardPosition });
    })
  );
};
