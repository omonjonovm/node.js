const { Router } = require('express')
const uuid = require('uuid')
const router = Router()
const books = require('../books')


// get all books
router.get('/', (req, res) => {
  res.json(books);
});

//get one book by id 
router.get('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))

  if (isExist) {
    res.json(books.filter(book => book.id === parseInt(req.params.id)))
  } else {
    res.status(404).json({ message: `sorlagan id: ${req.params.id} kitob topilmadi ` })
  }
})

router.post('/', (req, res) => {
  const newBook = {
    id: uuid.v4(),
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages
  }
  if (!req.body.name || !req.body.author || !req.body.pages) {
    return res.status(400).json({ message: 'Ma\'lumotlrni kiriting' })
  }

  books.push(newBook)
  res.json(books)
})

//Edit book by id 
router.put('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))

  if (isExist) {
    const updateBook = req.body

    books.forEach(book => {
      if(book.id === parseInt(req.params.id)){
        book.name = updateBook.name ? updateBook.name : book.name
        book.author = updateBook.author ? updateBook.author : book.author
        book.pages = updateBook.pages ? updateBook.pages : book.pages
        res.status(200).json({message:'Kitob ma\'lumotlari yangilandi',book})
      }
    })
  } else {
    res.status(404).json({ message: `sorlagan id: ${req.params.id} kitob topilmadi ` })
  }
})

//Delete one book by id 
router.delete('/:id', (req, res) => {
  const isExist = books.some(book => book.id === parseInt(req.params.id))

  if (isExist) {
    res.json({message:'Kitob o\'chirib ketdi',books:books.filter(book => book.id !== parseInt(req.params.id))})
  } else {
    res.status(404).json({ message: `sorlagan id: ${req.params.id} kitob topilmadi ` })
  }
})
module.exports = router