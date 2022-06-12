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
      await this.#execOperation(operation, candidate.name);
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
    return {
      name: args.shift(),
      argc: args.length,
      argv: args,
    };
  }

  #validateOperation = (candidate) => {
    if (!(candidate.name in operations))
      throw 'unknownOp';
    if (candidate.argc !== operations[candidate.name].argc)
      throw 'invalidOpArgs';
    return operations[candidate.name].operation.bind(null, ...candidate.argv);
  }

  #execOperation = async (operation, name) => {
    try {
      writeMessage(name);
      let result = await operation();
      if (result) {
        console.log(result);
      }
    } catch (e) {
      throw 'opFail';
    }
  }
}
