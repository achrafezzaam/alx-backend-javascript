export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') {
      throw new Error('Location must be a string.');
    }
    this._location = val;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new Error('Size must be a number.');
    }
    this._size = val;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') {
      return this.size;
    }
    if (cast === 'string') {
      return this.location;
    }
    return this;
  }
}
