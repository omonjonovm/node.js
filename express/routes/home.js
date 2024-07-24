const {Router} = require('express')
const router = Router()

router.get('/',(req,res) => {
  const users = [
   
  ]
  res.render('home',{
    title:'Main Page',
    hello:'assalamu alaikum baby',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corporis deserunt quidem sint exercitationem aperiam, adipisci dicta accusamus itaque quo.',
    users
  })
})

router.get('/about',(req,res) => {
  res.render('about',{
    title:'About Page',
    hello:'about us',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corporis deserunt quidem sint exercitationem aperiam, adipisci dicta accusamus itaque quo.'
  })
})

module.exports = router