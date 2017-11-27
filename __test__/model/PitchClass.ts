import { NoteLetter } from '../../src/model/NoteLetter';
import { PitchClass } from '../../src/model/PitchClass';

describe('PitchClass', () => {

    it('hasValidBaseC', () => {
        expect(PitchClass.C.baseNoteLetter).toBe('C');
        expect(PitchClass.C.sharpenBaseNote).toBeFalsy();
    });

    it('hasCorrectSharpDetection', () => {
        expect(PitchClass.C.hasSharp).toBeTruthy();
        expect(PitchClass.C.increasePitch(2).hasSharp).toBeFalsy();
    });

    describe('matches', () => {
        it('properlyMatchesBaseC', () => {
            expect(PitchClass.C.matches(
                'C',
                /*false,*/ // default value is false; do it this way for coverage purposes
            )).toBeTruthy();
        });
    });

    describe('getPitchClass', () => {
        it('properlyMatchesLettersWithCharacter', () => {
            let desiredLetter: NoteLetter = 'A';
            let desiredSharpness = false;
            let computedValue = PitchClass.getPitchClass(desiredLetter, desiredSharpness);
            expect(computedValue.baseNoteLetter).toBe(desiredLetter);
            expect(computedValue.sharpenBaseNote).toBe(desiredSharpness);

            desiredLetter = 'C';
            desiredSharpness = true;
            computedValue = PitchClass.getPitchClass(desiredLetter, desiredSharpness);
            expect(computedValue.baseNoteLetter).toBe(desiredLetter);
            expect(computedValue.sharpenBaseNote).toBe(desiredSharpness);
        });

        it('properlyMatchesLettersWithNoteLetter', () => {
            let desiredLetter: NoteLetter = 'A';
            let desiredSharpness = false;
            let computedValue = PitchClass.getPitchClass(desiredLetter, desiredSharpness);
            expect(computedValue.baseNoteLetter).toBe(desiredLetter);
            expect(computedValue.sharpenBaseNote).toBe(desiredSharpness);

            desiredLetter = 'C';
            desiredSharpness = true;
            computedValue = PitchClass.getPitchClass(desiredLetter, desiredSharpness);
            expect(computedValue.baseNoteLetter).toBe(desiredLetter);
            expect(computedValue.sharpenBaseNote).toBe(desiredSharpness);
        });
    });

    describe('increasePitch', () => {
        it('doesNothingWithZero', () => {
            expect(PitchClass.C.increasePitch(0)).toBe(PitchClass.C);
        });

        it('movesForwardFromNote', () => {
            expect(PitchClass.C.increasePitch(2)).toBe(PitchClass.getPitchClass('E'));
            expect(PitchClass.C.increasePitch(2, true)).toBe(PitchClass.getPitchClass('D'));
        });

        it('movesBackwardsWithNegative', () => {
            expect(PitchClass.C.increasePitch(-1)).toBe(PitchClass.getPitchClass('B'));
            expect(PitchClass.C.increasePitch(-3, true)).toBe(PitchClass.getPitchClass('A'));
        });
    });
});
