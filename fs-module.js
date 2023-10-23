//synchronous methods
const {readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./folder/first.txt','utf-8')
const second = readFileSync('./folder/second.txt','utf-8')
writeFileSync (
    './folder/result.txt',
    `Here is the result : ${first} , ${second}`,
    {flag : 'a'}  
)

//asynchronous methods
// const {readFile, writeFile} = require('fs')
// readFile('./folder/first.txt','utf-8',(err,result) => {
//     if(err) {
//         console.log(err)
//     }
//     const first = result;
//     readFile('./folder/second.txt','utf-8',(err,result) => {
//         if(err) {
//             console.log(err)
//         }
//         const second = result;
//         writeFile(
//             './folder/result-async.txt',
//             `Here is the result : ${first} , ${second}`,
//             (err,result) => {
//                 if(err) {
//                     console.log(err)
//                 }
//                 console.log(result);
//             }
//         )
//     })
// })
