const EventEmitter = require('events')

//Event emitterdan meros olish  
class NewEmitter extends EventEmitter {}

//Instans obyekt
const newEmitter = new NewEmitter()


// Event listener  
newEmitter.on('hello',() => {
  console.log('hello devis');
})

//qabul qilib olish
newEmitter.emit('hello')