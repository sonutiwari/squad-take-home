// utility methods.
/**
 * Utility method to get which checkbox is checked.
 * @param {object} object
 * @returns {string}: Keys concatenated with space whose value is true.
 */
export const getObjectDataAsString = (object) => {
  let result = "";
  for (const key in object) {
    if (object[key]) {
      result += `${key} `;
    }
  }
  return result;
};
