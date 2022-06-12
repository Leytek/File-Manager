import parseArgs from './parseArgs.js';
import validateArgs from './validateArgs.js';

export default class CLi {
  #args;

  #parseArgs = parseArgs;
  #validateArgs = validateArgs;

  constructor() {
    this.#args = {};
    let argsProposal = this.#parseArgs();
    this.#validateArgs(argsProposal);
  }

  get args() {
    return this.#args;
  }
}
