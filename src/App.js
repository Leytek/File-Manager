import Cli from './cli/Cli.js';
import User from './User.js';
import greeting from "./greeting.js";

export default class App {
  #cli;
  #user;

  constructor() {
    this.#cli = new Cli();
    this.#user = new User(this.#cli.args.username);
  }

  run = () => {
    greeting(this.#user);
  }
}
