var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.cyan);
    console.log(files.toString());
    fs.writeFile('./newtekst.txt', files.toString(), function(err) {
        if (err) throw err;
        console.log('Zapisano do newtekst'.cyan);
    });
});