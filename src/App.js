import os from 'os';

import globalVar from './globalVar.js';
import Cli from './cli/Cli.js';
import User from './User.js';
import RLInterface from './RLInterface.js';
import writeMessage from './writeMessage.js';

export default class App {
  #cli;
  #rlInterface;

  constructor() {
    this.#cli = new Cli();
    this.#rlInterface = new RLInterface();

    globalVar.user = new User(this.#cli.args.username);
    globalVar.currentWorkingDir = os.homedir();

    process.on('exit', this.#handleClose);
  }

  #handleClose = () => {
    writeMessage('bye');
  }

  run = () => {
    writeMessage('greeting');
    writeMessage('cwd');
    this.#rlInterface.run();
  }
}
