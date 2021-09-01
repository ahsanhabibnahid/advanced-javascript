const students = [
    {id : 22, name : 'shanto', zip : 1207},
    {id : 23, name : 'forhad', zip : 1203},
    {id : 24, name : 'nahid', zip : 1216},
    {id : 25, name : 'sumon', zip : 1210},
]

// const nameArray = []
// for(let i = 0; i < students.length; i++){
//     const element = students[i].name
//     nameArray.push(element)
// }
// console.log(nameArray)


const names = students.map(x => x.name)

const ids = students.filter(x => x.id > 23)

const isThere = students.find(x => x.id > 23)

console.log(isThere)