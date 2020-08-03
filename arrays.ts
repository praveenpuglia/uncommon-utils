/**
 * Divides an array of numbers by a single number or an arary of numbers
 * having the same length that of the numerator array.
 * @param numeratorArr Array of numbers to divide
 * @param denominator either a number or an array of numbers.
 */
export function arrayDiv(
  numeratorArr: number[],
  denominator: number[] | number
) {
  if (Array.isArray(denominator)) {
    if (numeratorArr.length !== denominator.length) {
      throw new Error(
        'arrayDiv: numerator array and denominator array must be of same length'
      );
    }
    return numeratorArr.map((value, index) => value / denominator[index]);
  }
  return numeratorArr.map((value) => value / denominator);
}
