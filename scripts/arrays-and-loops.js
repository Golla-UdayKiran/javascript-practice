const myArray = [
  10,
  20,
  30
];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

console.log([1, 'hello', true, { name: 'socks' }, [1, 2]]);

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(myArray.length);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);

const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}

const nums1 = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums1.length; i++) {
  const num = nums1[i];
  total += num;
}
console.log(total);

const numsDoubled = [];

for (let i = 0; i < nums1.length; i++) {
  const num = nums1[i];
  numsDoubled.push(num * 2);
}
console.log(numsDoubled);

const nums2 = [10, 20, 30];
nums2[2] = 99;
console.log(nums2);

// An alternative solution is:
// nums2[nums2.length - 1] = 99;

function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'hey']));

function arraySwap(array) {
  const lastIndex = array.length - 1;

  // We need to save the values first before
  // swapping. Otherwise, if we swap directly,
  // we would lose one of the values.
  const lastValue = array[lastIndex];
  const firstValue = array[0];
  
  array[0] = lastValue;
  array[lastIndex] = firstValue;
  
  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}

i = 5;

while (i >= 0) {
  console.log(i);
  i--;
}

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  return result;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }

  return result;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  // We'll set the starting values of min and max
  // as the first value in the array. (This is
  // just one way to set the starting values. You
  // can use another way if you like.)
  
  // We'll set the starting values of min and max
  // to null this time.
  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the value is less than the min,
    // update the min.

    // If the min is null OR the value is
    // less than the min, update the min.
    if (result.min === null || value < result.min) {
      result.min = value;
    }

    // If the value is greater than the max,
    // update the max.

    // If the max is null OR the value is
    // greater than the max, update the max.
    if (result.max === null || value > result.max) {
      result.max = value;
    }

    // We have to use 2 if-statements above instead of
    // an if-else statement. This makes sure both the
    // min and max are set if they are null.
  }

  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));