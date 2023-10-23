const path = require('path')
//returns platfrom specific seperator
console.log(path.sep);
//returns normalized path
const filePath = path.join('/folder/','sub','test.txt')
console.log(filePath);
//returns the base file
console.log(path.basename(filePath));
//returns the absolute path
console.log(path.resolve(__dirname,'folder','sub','test.txt'));