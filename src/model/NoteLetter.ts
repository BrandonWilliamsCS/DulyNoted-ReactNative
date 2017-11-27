/**
 * Encodes some behavior and type safety around the strings used as note letters.
 */
export type NoteLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export namespace NoteLetter {

    const startCharCode = 'A'.charCodeAt(0);

    /**
     * Rotate the current letter "up" in pitch, cycling back from G to A.
     * @param base the starting point of the rotation
     * @param amount how many units to increase
     * @returns the NoteLetter that's the appropriate number of steps "up" from the base.
     */
    export function increaseLetter(base: NoteLetter, amount: number): NoteLetter {
        const baseOffset = base.charCodeAt(0) - startCharCode;
        // make sure we have a positive adjustment
        const adjustedAmount = (amount % 7) + 7;
        const letterOffset = (adjustedAmount + baseOffset) % 7;
        const resultCharCode = startCharCode + letterOffset;
        // If the above logic is sound, this will only ever be a note letter.
        return String.fromCharCode(resultCharCode) as NoteLetter;
    }
}
