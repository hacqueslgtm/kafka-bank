/**
 * Decrypt a string
 *
 * @export
 * @param {string} str
 * @returns {*}
 */
export function decrypt(str: string) {
  return decodeURIComponent(atob(str))
}

/**
 * Encrypt a string
 *
 * @export
 * @param {string} str
 * @returns {*}
 */
export function encrypt(str: string) {
  return btoa(encodeURIComponent(str))
}
