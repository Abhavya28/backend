// const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path')
console.log(path.join(__dirname, 'files', 'starter.txt'))

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {    // utf8 is used to convert binary data to text string
//     if (err) throw err;
//     console.log(data)
// })

console.log("Hello");   // this will run first as async and node will say that while we read the file Hello will be printed and after reading the file will be printed.


// This is call back hell. so to avoid this we use fs promise

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {   
//     if (err) throw err;
//     console.log("Write Completed")

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Yoo', (err) => {    
//         if (err) throw err;
//         console.log("Append Completed")

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {   
//             if (err) throw err;
//             console.log("Rename Completed")
//         })
//     })
// })

// fs promise
const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromise.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromise.writeFile(path.join(__dirname, 'files', 'reply.txt'), data);
        await fsPromise.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.');
        await fsPromise.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'));
        const newData = await fsPromise.readFile(path.join(__dirname, 'files', 'newReply.txt'), 'utf8');
        console.log(newData);
    }
    catch (err) {
        console.log(err);
    }
}

fileOps();


// to handle uncaught exception errors
process.on('uncaughtException', err => {
    console.log("Uncaught err occured ", { err });
    process.exit(1);
})