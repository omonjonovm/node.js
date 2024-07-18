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

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const books = [
      { name: 'Atomic-Hobits', author: 'James Clir', pages: 250 },
      { name: 'Men', author: 'Boltayev Tesha', pages: 25 },
      { name: 'Molxona', author: 'Sharofat Ergasheva', pages: 100 },
    ]

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(books))
  }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`);
})