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


// // 4  надо сделать
// const arrayNumber3 = [1, 2, -3, 0, 4, 5, -6]
//
// console.log(arrayNumber3.filter((el) => el < 0))
//
// // 5
// const arrayNumber4 = [1, -2, 3, 0, 4, -5, 6]
//
// console.log(arrayNumber4.filter((el) => el % 2 === 0 && el !== 0))
//
// // 6
// const arrayStr = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
//
// console.log(arrayStr.filter((el) => el.length > 5))
//
// // 7
// const arrayNumber5 = [1, 2, -3, 0, -4, 5, -6]
// const result = arrayNumber5.filter((el) => el < 0)
//
// console.log(result.length)
//
// // 8
// const arrayNumber6 = [1, 2, 3, 4]
// const arrayStr2 = ['a', 'b', 'c', 'd']
// const result8 = [...arrayNumber6, ...arrayStr2]
//
// console.log(result8)
//
// // 9
// const arrayNumber7 = [2, 3, 4, 5]
// const str = 'hello world'
// const result9 = [...arrayNumber7, str]
//
// console.log(result9)
//
// // 10
// const arrayStr3 = str.split('')
// const result10 = [...arrayNumber7, ...arrayStr3]
//
// console.log(result10)
//
// // 11
// const result11 = [...arrayNumber7, ...arrayStr3, ...arrayNumber7]
//
// console.log(result11)