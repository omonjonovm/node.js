const fs = require('fs')
const path = require('path')

// create papka
// fs.mkdir(path.join(__dirname , '/app'),{}, (err) => {
//   if(err) throw err
//   console.log('Success');
// })

// file create 
// fs.writeFile(path.join(__dirname, '/app', 'dvc.txt'), 'from node js', (err) => {
//   if (err) throw err
//   console.log('Success');
// })
// fs.appendFile(path.join(__dirname, '/app', 'dvc.txt'), ' devisaca', (err) => {
//   if (err) throw err
//   console.log('Success');
// })

// read-file
fs.readFile(path.join(__dirname, '/app', 'dvc.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

fs.rename(
  path.join(__dirname, '/app', 'dvc.txt'),
  path.join(__dirname, '/app', 'acm.txt'),

 (err) => {
  if(err) throw err;
  console.log('Obbosxon');
 }
)