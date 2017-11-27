import { List } from 'immutable';

import { NoteLetter } from './NoteLetter';

/**
 * Represents 12 divisions within a scale.
 * TODO: this class and its surrounding logic can be much richer regarding sharps and flats.
 */
export class PitchClass {

    private static pitchClasses = List([
        new PitchClass('C', false, 0),
        new PitchClass('C', true, 1),
        new PitchClass('D', false, 2),
        new PitchClass('D', true, 3),
        new PitchClass('E', false, 4),
        new PitchClass('F', false, 5),
        new PitchClass('F', true, 6),
        new PitchClass('G', false, 7),
        new PitchClass('G', true, 8),
        new PitchClass('A', false, 9),
        new PitchClass('A', true, 10),
        new PitchClass('B', false, 11),
    ]);

    /**
     * The pitch class assocaited with the note letter C.
     */
    static C = PitchClass.pitchClasses.get(0); // tslint:disable-line:member-ordering

    /**
     * Convenience property for recognizing notes that could have a "sharp" form.
     */
    get hasSharp(): boolean {
        return this.baseNoteLetter === this.increasePitch(1, true).baseNoteLetter;
    }

    /**
     * @param baseNoteLetter the letter for this pitch class, before any sharpening or flattening
     * @param sharpenBaseNote whether or not this pitch class is a half-step up from the base letter's pitch class
     * @param cacheIndex used internally for efficiency in computing new instances
     */
    constructor(
        readonly baseNoteLetter: NoteLetter,
        readonly sharpenBaseNote: boolean,
        private readonly cacheIndex: number,
    ) { }

    /**
     * Retrieve the pitch class from the given note letter and optional sharpening
     * @param baseNoteLetter the note letter for this pitch class
     * @param sharpenBaseNote whether or not this pitch class is a sharp version of the note letter
     * @returns the pitch class formed by the given letter and sharpening
     */
    static getPitchClass(baseNoteLetter: NoteLetter, sharpenBaseNote = false): PitchClass {
        // TODO: handle case involving illegal sharpening
        return this.pitchClasses.find(pitchClass => pitchClass!.matches(baseNoteLetter, sharpenBaseNote));
    }

    /**
     * Convenience methd for verifying that the pitch class matches the given note letter and sharpness.
     * @param baseNoteLetter the note letter to compare to this class's note letter
     * @param sharpenBaseNote the sharpness to compare to this pitch class's sharpness
     * @returns whether or not the pitch class matches the given data
     */
    matches(baseNoteLetter: NoteLetter, sharpenBaseNote = false): boolean {
        return this.baseNoteLetter === baseNoteLetter && this.sharpenBaseNote === sharpenBaseNote;
    }

    /**
     * Adjust the pitch upwards, optionally including each sharpened half-step in the process
     * @param amount the number of (half-)steps to increase
     * @param includeAllSemiTones whether or not to increase in half-steps rather than letter-by-letter
     * @returns the pitch class located the desired nubmer of (half-)steps above this pitch class
     */
    increasePitch(amount: number, includeAllSemiTones = false): PitchClass {
        if (includeAllSemiTones) {
            const adjustedAmount = (amount % 12) + 12;
            return PitchClass.pitchClasses.get((this.cacheIndex + adjustedAmount) % 12);
        } else {
            const letter = NoteLetter.increaseLetter(this.baseNoteLetter, amount);
            return PitchClass.getPitchClass(letter);
        }
    }
}
