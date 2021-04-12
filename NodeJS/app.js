// const express = require('express');
// const app = express();

// app.get('/', (reqm, res)=> {
//     res.send("Hey, what's wrong with you?");
// });

// app.listen(3000);

const fs = require('fs');
const fileName = "target.txt";
fs.watch(fileName, () => console.log(`File changed!`));