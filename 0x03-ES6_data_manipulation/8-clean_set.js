export default function cleanSet(set, startString) {
  const output = [];
  if (!startString) {
    return '';
  }
  const values = set.entries();
  for (const elem of values) {
    if (elem[0].startsWith(startString)) {
      output.push(elem[0].substring(startString.length));
    }
  }
  return output.join('-');
}
