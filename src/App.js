import Cli from './cli/Cli.js';
import User from './User.js';
import RLInterface from "./RLInterface.js";
import writeMessage from "./writeMessage.js";

export default class App {
  #cli;
  #user;
  #rlInterface;

  constructor() {
    this.#cli = new Cli();
    this.#user = new User(this.#cli.args.username);
    this.#rlInterface = new RLInterface();

    process.on('exit', this.#handleClose);
  }

  get user() {
    return this.#user;
  }

  #handleClose = () => {
    writeMessage('bye', this.#user);
  }

  run = () => {
    writeMessage('greeting', this.#user);
  }
}
