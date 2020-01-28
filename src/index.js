/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
    preferences.forEach((elem, index) => {
        let firstNumber = index + 1;
        let secondNumber = elem;
        let thirdNumber = preferences[secondNumber - 1];
        let thirdValue = preferences[thirdNumber - 1];
        if (firstNumber == thirdValue && elem != index + 1) {
            result++;
        }
    })
    return result / 3;
};
