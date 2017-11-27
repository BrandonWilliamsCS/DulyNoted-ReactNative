import { NoteLetter } from '../../src/model/NoteLetter';

describe('NoteLetter', () => {

    describe('increaseLetter', () => {
        it('doesNothingWithZero', () => {
            expect(NoteLetter.increaseLetter('A', 0)).toBe('A');
            expect(NoteLetter.increaseLetter('B', 0)).toBe('B');
            expect(NoteLetter.increaseLetter('C', 0)).toBe('C');
            expect(NoteLetter.increaseLetter('D', 0)).toBe('D');
            expect(NoteLetter.increaseLetter('E', 0)).toBe('E');
            expect(NoteLetter.increaseLetter('F', 0)).toBe('F');
            expect(NoteLetter.increaseLetter('G', 0)).toBe('G');
        });

        it('movesForwardFromNote', () => {
            expect(NoteLetter.increaseLetter('A', 4)).toBe('E');
            expect(NoteLetter.increaseLetter('C', 1)).toBe('D');
            expect(NoteLetter.increaseLetter('F', 1)).toBe('G');
        });

        it('movesBackwardsWithNegative', () => {
            expect(NoteLetter.increaseLetter('E', -4)).toBe('A');
            expect(NoteLetter.increaseLetter('D', -1)).toBe('C');
            expect(NoteLetter.increaseLetter('G', -1)).toBe('F');
        });

        it('loopsAroundAtBoundry', () => {
            expect(NoteLetter.increaseLetter('A', -1)).toBe('G');
            expect(NoteLetter.increaseLetter('G', 1)).toBe('A');
        });
    });
});
