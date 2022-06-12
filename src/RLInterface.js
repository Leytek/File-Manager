import rl from 'readline'

import operations from './operations/index.js';
import handleError from './handleError.js';
import writeMessage from './writeMessage.js';

export default class RLInterface {
  #rli;

  constructor() {
    this.#rli = rl.createInterface({input: process.stdin, output: process.stdout});
  }

  run = () => {
    writeMessage('prompt');
    this.#rli.on('line', this.#handleLine);
  }

  #handleLine = (line) => {
    try {
      let candidate = this.#parseOperation(line);
      let operation = this.#validateOperation(candidate);
      this.#execOperation(operation);
    } catch (e) {
      handleError(e);
    }
    writeMessage('cwd');
  }

  #parseOperation = (line) => {
    if (!line)
      throw 'noInput';
    let args = line.split` `;
    return {
      name: args.shift(),
      argc: args.length,
      argv: [...args],
    };
  }

  #validateOperation = (opCandidate) => {
    if (!(opCandidate.name in operations))
      throw 'unknownOp';
    if (opCandidate.argc !== operations[opCandidate.name].argc)
      throw 'invalidOpArgs';
    return operations[opCandidate.name].operation.bind(null, ...opCandidate.argv);
  }

  #execOperation = (operation) => {
    try {
      operation();
    } catch (e) {
      throw 'opFail';
    }
  }
}
