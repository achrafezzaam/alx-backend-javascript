export default function updateUniqueItems(groceries) {
  if (groceries instanceof Map) {
    return groceries.forEach((val, key) => {
      if (val === 1) {
        groceries.set(key, 100);
      }
    });
  }
  throw new Error('Cannot process');
}
