// const express = require('express');
// const app = express();

// app.get('/', (reqm, res)=> {
//     res.send("Hey, what's wrong with you?");
// });

// app.listen(3000);


const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString());

const fs = require('fs');
const fileName = "target.txt";

// const data = fs.readFileSync(fileName);
// console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);
    dataHandler(data);
});

console.log('node JS prgraming...');



//fs.watch(fileName, () => console.log(`File changed!`));