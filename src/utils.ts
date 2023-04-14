/**
 * @param {Array} collection
 * @returns {Array} Shuffled version of collection
 */
 export function shuffle(collection: any[]) {
  for (let i = collection.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [collection[i], collection[j]] = [collection[j], collection[i]];
  }

  return collection;
}


/**
 * @param {string} inputString - string to be capitalized.
 * @return {string} Capitalized string.
 */
export function capitalize(inputString: string) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}