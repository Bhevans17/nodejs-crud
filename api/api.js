/* GET - index shows a list of resources */
app.get('/api', (req, res) => {
    res.json();
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

/* GET - shows a view to create a resource */
app.get('/api/create', (req, res) => {
    res.send('Hello World!')
});

/* POST - creates a resource */
app.post('/api/', (req, res) => {
    res.send('Hello World!')
})

/* GET - shows a single resource */
app.get('/api/{id}', (req, res) => {
    res.send('Hello World!')
});

/* GET - shows a view to edit a resource */
app.get('/api/{id}/edit', (req, res) => {
    res.send('Hello World!')
});

/* PUT - updates a resource */
app.put('/api/{id}', (req, res) => {
    res.send('Hello World!')
});

/* DELETE - deletes a resource */
app.delete('/api/{id}', (req, res) => {
    res.send('Hello World!')
});
