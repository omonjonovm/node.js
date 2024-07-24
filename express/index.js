const express = require('express');
const path = require('path');
const { create } = require('express-handlebars');
const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hbs = create({ extname: '.hbs' });

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// books api endpoint
app.use('/', require('./routes/home'));
app.use('/api/books', require('./routes/kitob'));

// be static file
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
