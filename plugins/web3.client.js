/**
 * @name web3
 * @desc ethereum web3.js module
 * @link https://web3js.readthedocs.io/
 */
import Web3 from 'web3'
/**
 * @module
 * @param  { Object   } context - nuxt application context
 * @param  { Function } inject  - inject function to context
 */
export default ({ app }, inject) => {
  /**
   * @module Eth
   * @desc   initialized web3 ethereum library
   */
  const web3 = new Web3(Web3.givenProvider || 'https://localhost:8545')
  /**
   * @func inject
   * @desc inject class into nuxt context
   */
  inject('web3', web3)
}
