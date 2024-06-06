const Utils = {
  calculateNumber(type, a, b) {
    const a2 = Math.round(a);
    const b2 = Math.round(b);
    if (type === 'SUM') {
      return (a2 + b2);
    }
    if (type === 'SUBTRACT') {
      return (a2 - b2);
    }
    if (type === 'DIVIDE' && b2 !== 0) {
      return (a2 / b2);
    }
    return ('Error');
  }
};

module.exports = Utils;
