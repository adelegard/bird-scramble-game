import { Bird, BirdHalf, CardDirection, CardRotation } from './types';
import {
  doesCardFit,
  doesCardFitOnBoardAtPosition,
  isBoardSolved,
} from './utils';
import { getMockCard, getMockCardSides } from './testUtils';

describe('utils', () => {
  describe('isBoardSolved', () => {
    test.only('should say board is solved', () => {
      const sameCard = getMockCard({
        cardSides: {
          [CardDirection.UP]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.LOWER,
          },
          [CardDirection.RIGHT]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.LOWER,
          },
          [CardDirection.DOWN]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.UPPER,
          },
          [CardDirection.LEFT]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.UPPER,
          },
        },
      });
      expect(
        isBoardSolved({
          '0,0': sameCard,
          '1,0': sameCard,
          '2,0': sameCard,
          '0,1': sameCard,
          '1,1': sameCard,
          '2,1': sameCard,
          '0,2': sameCard,
          '1,2': sameCard,
          '2,2': sameCard,
        })
      ).toEqual(true);
    });

    test('should not say board is solved', () => {
      const sameCard = getMockCard({
        cardSides: {
          [CardDirection.UP]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.LOWER,
          },
          [CardDirection.RIGHT]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.LOWER,
          },
          [CardDirection.DOWN]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.UPPER,
          },
          [CardDirection.LEFT]: {
            bird: Bird.CARDINAL,
            birdHalf: BirdHalf.UPPER,
          },
        },
      });
      expect(
        isBoardSolved({
          '0,0': sameCard,
          '1,0': sameCard,
          '2,0': sameCard,
          '0,1': sameCard,
          '1,1': sameCard,
          '2,1': sameCard,
          '0,2': sameCard,
          '1,2': sameCard,
          '2,2': getMockCard(),
        })
      ).toEqual(false);
    });
  });

  describe('doesCardFit', () => {
    test('does fit two cards', () => {
      expect(
        doesCardFit({
          cardA: getMockCard({
            cardSides: {
              [CardDirection.DOWN]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.LOWER,
              },
            },
          }),
          cardB: getMockCard({
            cardSides: {
              [CardDirection.UP]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.UPPER,
              },
            },
          }),
          directionOfB: CardDirection.DOWN,
        })
      );
    });

    test('does fit two cards that are both rotated NINETY', () => {
      expect(
        doesCardFit({
          cardA: getMockCard({
            card: {
              rotation: CardRotation.NINETY,
            },
            cardSides: {
              [CardDirection.RIGHT]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.LOWER,
              },
            },
          }),
          cardB: getMockCard({
            card: {
              rotation: CardRotation.NINETY,
            },
            cardSides: {
              [CardDirection.LEFT]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.UPPER,
              },
            },
          }),
          directionOfB: CardDirection.DOWN,
        })
      );
    });

    test('does fit two cards where one is not rotated and the other is', () => {
      expect(
        doesCardFit({
          cardA: getMockCard({
            cardSides: {
              [CardDirection.DOWN]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.LOWER,
              },
            },
          }),
          cardB: getMockCard({
            card: {
              rotation: CardRotation.TWO_SEVENTY,
            },
            cardSides: {
              [CardDirection.RIGHT]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.UPPER,
              },
            },
          }),
          directionOfB: CardDirection.DOWN,
        })
      );
    });
  });

  describe('doesCardFitOnBoardAtPosition', () => {
    test('does card fit on empty board at 0,0', () => {
      expect(
        doesCardFitOnBoardAtPosition({
          board: {},
          card: getMockCard(),
          cardPosition: { x: 0, y: 0 },
        })
      ).toEqual(true);
    });

    test('does card fit on board at 0,0 with cards on right and bottom', () => {
      expect(
        doesCardFitOnBoardAtPosition({
          board: {
            '1,0': getMockCard({
              cardSides: {
                [CardDirection.LEFT]: {
                  bird: Bird.INDIGO_BUNTING,
                  birdHalf: BirdHalf.LOWER,
                },
              },
            }),
            '0,1': getMockCard({
              cardSides: {
                [CardDirection.UP]: {
                  bird: Bird.CARDINAL,
                  birdHalf: BirdHalf.LOWER,
                },
              },
            }),
          },
          card: getMockCard({
            cardSides: {
              [CardDirection.DOWN]: {
                bird: Bird.CARDINAL,
                birdHalf: BirdHalf.UPPER,
              },
              [CardDirection.RIGHT]: {
                bird: Bird.INDIGO_BUNTING,
                birdHalf: BirdHalf.UPPER,
              },
            },
          }),
          cardPosition: { x: 0, y: 0 },
        })
      ).toEqual(true);
    });
  });
});
