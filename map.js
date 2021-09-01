// const numbers = [2, 3, 4, 5, 6, 7]
// const output = []

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i] * numbers[i]
//     output.push(element)
// }
// console.log(output)


// const numbers = [2, 3, 4, 5, 6, 7]
// const result = numbers.map(function(a){
//     return a * a
// })
// console.log(result)


// const numbers = [2, 3, 4, 5, 6, 7]
// const result = numbers.map(x => x * x)
// console.log(result)


const map1 = new Map()

map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set('d', 4)

console.log(map1.get('a'))

map1.delete('b')

console.log(map1.size)
console.log(map1.has('d'))