// const User = require('./user')
// const devis  = new User('Murodjon',16)
// console.log(devis.hello());

const Logger = require('./logger')

const logger = new Logger()

logger.on('message', data => {
  console.log('Logging:', data);
})
logger.log('GET','/admin/dashboard')
logger.log('POST','/employee/add')
logger.log('DELETE','/employee/23243')