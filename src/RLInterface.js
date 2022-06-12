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
      let opCandidate = this.#parseOperation(line);
      let op = this.#validateOperation(opCandidate);
      this.#execOperation(op);
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
    return operations[opCandidate.name].op.bind(null, ...opCandidate.argv);
  }

  #execOperation = (op) => {
    try {
      op();
    } catch (e) {
      throw 'opFail';
    }
  }
}
