import globalVar from './globalVar.js';
import Cli from './cli/Cli.js';
import User from './User.js';
import RLInterface from "./RLInterface.js";
import writeMessage from "./writeMessage.js";
import os from 'os';

export default class App {
  #cli;
  #rlInterface;

  constructor() {
    this.#cli = new Cli();
    this.#rlInterface = new RLInterface();

    globalVar.user = new User(this.#cli.args.username);

    process.on('exit', this.#handleClose);
  }

  #handleClose = () => {
    writeMessage('bye');
  }

  run = () => {
    writeMessage('greeting');
    this.#rlInterface.run();
  }
}
