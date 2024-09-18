/**
 * 共用轉帳資訊
 *
 * @interface TranInfo
 * @typedef {TranInfo}
 * @property {number} amount 金額
 * @property {string} date 日期
 * @property {string} description 描述
 * @property {string} type 收入/支出
 * @property {number} balance 餘額
 */
interface TransInfo {
  amount: number
  date: string
  description: string
  type: string
  balance: number
}

/**
 * 台幣轉帳資訊
 *
 * @export
 * @interface TransInfoInfo
 * @typedef {TransInfoInfo}
 * @extends {TranInfo}
 *
 * @property {string} fromAccount 轉出帳號
 * @property {string} tag 標籤
 * @property {string} toAccount 轉入帳號
 * @property {string} toBank 轉入銀行
 */
export interface NtdTransInfo extends TransInfo {
  fromAccount: string
  tag: string
  toAccount: string
  toBank: string
}

/**
 * 銀行轉帳欄位
 *
 * @export
 * @interface BankTransInput
 * @typedef {BankTransInput}
 * @property {string} date 日期
 * @property {string} from 轉出帳號
 * @property {number} amount 金額
 * @property {string} toBank 轉入銀行
 * @property {string} to 轉入帳號
 * @property {string} description 描述
 * @property {string} tag 標籤
 */
export interface BankTransInput {
  date: string
  from: string
  amount: number | null
  toBank: string
  to: string
  description: string
  tag: string
}

