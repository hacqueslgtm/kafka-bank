/**
 * Remove special characters from a string
 *
 * @param {string} str
 * @returns {string}
 */
export const rmSpecialChar = (str: string): string => {
  return str.replace(/[^\w\s]/gi, '')
}

// 金額轉換 (千分位)
/**
 * Convert a number to a string with commas as thousand separators
 *
 * @param {number|string} num
 * @returns {string}
 */
export const fmtMoney = (num: number | string): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

