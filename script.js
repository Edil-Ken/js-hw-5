// Tusk #1 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// [1, 2, 3, 0, 4, 5, 6]

// const squareNum = (arr) => {
//     return arr.map((el) => el * el)
// }
//
// console.log(squareNum([1, 2, 3, 0, 4, 5, 6,]))


////////////////////////////////////////////////////////////////////////////////////////////////////////


// Tusk #2 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
//[1, 2, 3, 0, 4, 5, 6]

// const checkPositiveNum = (arr) => {
//     return arr.filter((el) => el > 0).length === arr.length
// }
//
// console.log(checkPositiveNum([1, 2, 3, 0, 4, 5, 6]))


////////////////////////////////////////////////////////////////////////////////////////////////////


// Tusk #3 Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
// [1, 2, -3, 0, 4, -5, 6]

// const checkNegativeNum = (arr) => {
//     return arr.filter((el) => el < 0).length > 0
// }
// console.log(checkNegativeNum([1, 2, -3, 0, 4, -5, 6]))


/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Tusk #4  Дан массив с числами. Оставьте в нем только отрицательные числа.
// [1, 2, -3, 0, 4, 5, -6]

// const negativeNum = (arr) => {
//     return arr.filter((el) => el < 0)
// }
// console.log(negativeNum([1, 2, -3, 0, 4, 5, -6]))


/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Tusk #5 Дан массив с числами. Оставьте в нем только четные числа.
// [1, -2, 3, 0, 4, -5, 6]

// function evenNum(arr) {
//     return (arr.filter((el) => el % 2 === 0))
// }
// console.log(evenNum([1, -2, 3, 0, 4, -5, 6]))


//////////////////////////////////////////////////////////////////////////////////////


// Tusk #6 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']

// const strLength = (arr) => {
//     return arr.filter((el) => el.length > 5)
// }
//
// console.log(strLength(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))


///////////////////////////////////////////////////////////////////////////////////////////////


// Tusk #7 Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// [1, 2, -3, 0, -4, 5, -6]

// function negativeNumSum(arr) {
//     return arr.filter((el) => el < 0).length
// }
//
// console.log(negativeNumSum([1, 2, -3, 0, -4, 5, -6]))


//////////////////////////////////////////////////////////////////////////////////////


// Tusk #8 [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// const sumArr = (arr, arr2) => {
//     return [...arr, ...arr2]
// }
//
// console.log(sumArr([1, 2, 3, 4], ['a', 'b', 'c', 'd']))


//////////////////////////////////////////////////////////////////////////////


// Tusk #9 [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']

// function arrStrSum(arr, str) {
//     return [...arr, str]
// }
//
// console.log(arrStrSum([2, 3, 4, 5], 'hello world'))


////////////////////////////////////////////////////////////////////////////////


// Tusk #10 [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// const arrStrSplitSum = (arr, str) => {
//     return [...arr, ...str.split('').filter((el) => el !== ' ')]
// }
// console.log(arrStrSplitSum([2, 3, 4, 5], 'hello world'))


//////////////////////////////////////////////////////////////////////////////////


// Tusk #11 [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// function arrStrSplitArrSum(arr, str) {
//     return [...arr, ...str.split('').filter((el) => el !== ' '), ...arr]
// }
//
// console.log(arrStrSplitArrSum([2, 3, 4, 5], 'hello world'))


// end // end // end // end // end // end // end // end // end // end // end // end // end // end