var fs = require('fs');
var fileName = process.argv[2];
var fileContents = fs.readFileSync(fileName);
var fileText = fileContents.toString();
var numLines = (fileText.split('\n').length)-1;
console.log(numLines);