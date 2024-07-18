// const User = require('./user')
// const devis  = new User('Murodjon',16)
// console.log(devis.hello());

// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', data => {
//   console.log('Logging:', data);
// })
// logger.log('GET','/admin/dashboard')
// logger.log('POST','/employee/add')
// logger.log('DELETE','/employee/23243')


const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    fs.readFile(path.join(__dirname,'public','index.html'), (err,content) => {
      if(err) throw err
      res.writeHead(200,{'Content-Type':'text/html'})
      res.end(content)
    })
  }  else if(req.url ==='/about'){
    fs.readFile(path.join(__dirname,'public','about.html'), (err,content) => {
      if(err) throw err
      res.writeHead(200,{'Content-Type':'text/html'})
      res.end(content)
    })
  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => {
  console.log(`Server ${PORT} portda ishga tushdi`);
})