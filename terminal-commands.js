const fs = require('fs');

module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);

   });
 };

 module.exports.touch = (file) => {
   fs.writeFile(file, 'Test', 'utf8', (err) => {
   if (err) throw err;

   console.log(file + ' created' )
 });

};

module.exports.mkdir = (dir) => {
  fs.mkdir('./'+ dir,function(err) {
   if (err) {
      return console.error(err);
   }
   console.log('A new directory, ' + dir + ', has been created');
});

};
