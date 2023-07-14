array = [1, 22, 3, 4, 5, 6, 7];

function removeElement(inputArray, elem) {
    for (i = 0; i < inputArray.length; i++) {
        if (elem === inputArray[i]) {
            inputArray.splice(i, 1);
        }
    }
}

console.log(`input array: ${array}`);
removeElement(array, 22);
console.log(`output array: ${array}`);