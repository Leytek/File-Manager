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

  #handleLine = async (line) => {
    try {
      let candidate = this.#parseOperation(line);
      let operation = this.#validateOperation(candidate);
      await this.#execOperation(operation);
    } catch (e) {
      handleError(e);
    }
    writeMessage('cwd');
  }

  #parseOperation = (line) => {
    if (!line)
      throw 'noInput';
    let args = line.split`"`;
    args = args.map(arg => arg.trim()).filter(arg => arg !== '');
    args = [...args[0].split` `, ...args.slice(1)];
    console.log(args)
    return {
      name: args.shift(),
      argc: args.length,
      argv: args,
    };
  }

  #validateOperation = (opCandidate) => {
    if (!(opCandidate.name in operations))
      throw 'unknownOp';
    if (opCandidate.argc !== operations[opCandidate.name].argc)
      throw 'invalidOpArgs';
    return operations[opCandidate.name].operation.bind(null, ...opCandidate.argv);
  }

  #execOperation = async (operation) => {
    try {
      await operation();
    } catch (e) {
      throw 'opFail';
    }
  }
}
