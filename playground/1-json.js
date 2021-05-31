
const fs = require('fs')

//This creates a .json file within our folder 
// const book = {
//     title: 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// //

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // what comes back is a "buffer data"
// const dataJSON = dataBuffer.toString() // now we have the actual data in string format 
// const data =JSON.parse(dataJSON)
// console.log(data.title)

//load and parse data 
const aboutBuffer = fs.readFileSync('1-json.json') // buffer
const aboutJSON = aboutBuffer.toString() 
const data = JSON.parse(aboutJSON)
console.log(data)
data.name = "Paul"
data.age = 36
console.log(data)

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)