const fs = require("fs");

const quote = "Mohan is a most dangerous man in the world";

// fs.writeFile("./awesome.txt", quote, (err) => {
//   console.log("writing completed!!!");
// });

// //create below files with quote as the content 10 times in single code

// const [,,noOfFiles] = process.argv; //argv kudutha cmd la node ku apram kudukra num value eduthukum
// console.log(noOfFiles);

// genFiles(noOfFiles)

// function genFiles(noOfFiles) {
//   if(noOfFiles > 15){
//     console.log("Maximum Number Reached")
//     return;
//   }
//   for(var i=1; i<= noOfFiles; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote, (err) => {
//       console.log("writing completed")
//     })
//   }
// }

// fs.readFile("./cool.txt","utf-8", (err, data) => {
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// const quote3 = "Senthilnathanis Mohan's Father"

// fs.writeFile("./cool.txt", quote3, (err) => {
//   console.log("writed")
// })

// fs.appendFile("./cool.txt", "\n" + quote3, (err)=>{
//   console.log("updated")
// })

const [, , noOfFiles] = process.argv;
fs.unlink(`./backup/text-${noOfFiles}.html`, (err) => {
  console.log("deleted");
});
