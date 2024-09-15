/**
 * Remove special characters from a string
 *
 * @param {string} str
 * @returns {string}
 */
export const rmSpecialChar = (str: string): string => {
  return str.replace(/[^\w\s]/gi, '')
}

