const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) console.log(err);
        console.log("Direcroty made")
    })
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) console.log(err);
        console.log("Direcroty removed")
    })
}