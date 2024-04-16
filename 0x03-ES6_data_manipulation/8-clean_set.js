export default function cleanSet(set, startString) {
  const output = [];
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const values = set.entries();
  for (const elem of values) {
    if (typeof elem[0] === 'string' && elem[0].startsWith(startString)) {
      output.push(elem[0].substring(startString.length));
    }
  }
  return output.join('-');
}
