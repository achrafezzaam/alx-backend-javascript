export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new Error('Code must be a string.');
    }
    this._code = val;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
