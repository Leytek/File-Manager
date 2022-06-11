import rl from 'readline';

export default class RLInterface {
  #rli;

  constructor() {
    this.#rli = rl.createInterface({input: process.stdin, output: process.stdout});

    this.#rli.on('line', this.#handleLine);
  }

  #handleLine = (line) => {
  }
}
