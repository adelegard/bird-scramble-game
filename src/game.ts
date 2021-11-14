import { Board, Card } from './types';
import {
  clearCardPositionFromBoard,
  isBoardSolved,
  findNextUnusedCardPosition,
  placeCardOnBoard,
  getCardsThatFit,
  printBoard,
  isCardOnBoard,
} from './utils';
import cards from './cards';

let numTries = 0;
const getCardsNums = (cards: Card[]) => cards.map(({ num }) => num);

const board: Board = {};

const placeNextCardOnBoard = () => {
  if (isBoardSolved(board)) {
    printBoard(board);
  }
  const cardPosition = findNextUnusedCardPosition(board);
  if (cardPosition) {
    const cardsThatFit = getCardsThatFit({
      board,
      cardPosition,
      cards,
    });
    // console.log(`cards that fit at {${cardPosition.x},${cardPosition.y}} = ${getCardsNums(cardsThatFit)}`)
    for (const card of cardsThatFit) {
      if (!isCardOnBoard({ board, card, cardPositionToIgnore: cardPosition })) {
        placeCardOnBoard({ board, card, cardPosition });
        placeNextCardOnBoard();
      }
    }
    clearCardPositionFromBoard({ board, cardPosition });
  }
  numTries++;
};

placeNextCardOnBoard();
console.log('numTries', numTries);
