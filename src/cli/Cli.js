import parseArgs from './parseArgs.js';
import validateArgs from "./validateArgs.js";

export default class CLi {
  #args;

  constructor() {
    this.#args = {};
    let argsProposal = this.#parseArgs();
    this.#validateArgs(argsProposal);
  }

  #parseArgs = parseArgs;
  #validateArgs = validateArgs;

  get args() {
    return this.#args;
  }
}
