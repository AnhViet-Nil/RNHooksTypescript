/**
 * Return true, if @param n is valid number
 *
 * @param n is number
 */
export function isNonEmptyNumber(n: number | undefined | null) {
  if (n === undefined || n == null) {
    return false;
  }
  return true;
}

/**
 * Return true, if @param s is valid string
 *
 *  @param s is string
 */
export function isNonEmptyString(s: string | undefined | null) {
  if (s === undefined || s == null || s === '') {
    return false;
  }
  return true;
}
