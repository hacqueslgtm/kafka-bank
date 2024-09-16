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
interface TranInfo {
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
 * @interface NtdTranInfo
 * @typedef {NtdTranInfo}
 * @extends {TranInfo}
 *
 * @property {string} fromAccount 轉出帳號
 * @property {string} tag 標籤
 * @property {string} toAccount 轉入帳號
 * @property {string} toBank 轉入銀行
 */
export interface NtdTranInfo extends TranInfo {
  fromAccount: string
  tag: string
  toAccount: string
  toBank: string
}

