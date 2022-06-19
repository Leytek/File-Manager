export default class User {
  #name;

  constructor(name) {
    this.name = name;
  }

  set name(name) {
    this.#name = name ?? 'sir';
  }

  get name() {
    return this.#name;
  }
}
