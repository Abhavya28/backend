const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), { encoding: 'utf8' });
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'));

// To copy one large file data to another
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

//Better way
rs.pipe(ws);