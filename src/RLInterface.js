import rl from 'readline'
import operations from './operations/index.js';
import handleError from './handleError.js';

export default class RLInterface {
  #rli;

  constructor() {
    this.#rli = rl.createInterface({input: process.stdin, output: process.stdout});
  }

  run = () => {
    this.#rli.setPrompt('Input operation:\n');
    this.#rli.prompt();
    this.#rli.on('line', this.#handleLine);
  }

  #handleLine = (line) => {
    try {
      let opCandidate = this.#parseOperation(line);
      let op = this.#validateOperation(opCandidate);
      op();
    } catch (e) {
      handleError(e);
    }
    this.#rli.prompt();
  }

  #parseOperation = (line) => {
    if (!line)
      throw 'noInput';
    let args = line.split` `;
    let opCandidate= {
      name: args.shift(),
      argc: args.length,
    }
    args.forEach((arg, i) => opCandidate[`arg${i}`] = arg);
    return opCandidate;
  }

  #validateOperation = (opCandidate) => {
    if (opCandidate.name in operations) {
      if (opCandidate.argc === operations[opCandidate.name].argc)
        return operations[opCandidate.name].op;
      throw 'invalidOpArgs';
    }
    throw 'unknownOp';
  }
}
