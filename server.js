const express = require('express')
const app = express()
const port = 3000
const exphbs  = require('express-handlebars');
var path = require ('path');

// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

app.use(express.static('public'))


/* GET - index shows a list of resources */
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

/* GET - shows a view to create a resource */
app.get('/create', (req, res) => {
    res.send('Hello World!')
});

/* POST - creates a resource */
app.post('/', (req, res) => {
    res.send('Hello World!')
})

/* GET - shows a single resource */
app.get('/{id}', (req, res) => {
    res.send('Hello World!')
});

/* GET - shows a view to edit a resource */
app.get('/{id}/edit', (req, res) => {
    res.send('Hello World!')
});

/* PUT - updates a resource */
app.put('/{id}', (req, res) => {
    res.send('Hello World!')
});

/* DELETE - deletes a resource */
app.delete('/{id}', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})