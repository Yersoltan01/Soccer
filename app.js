const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000 || process.env.PORT);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get("/index", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname +  '/public/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/public/about.html'));
})

app.get('/style.css', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/public/style.css'));
})

app.get('/about.css', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname + '/public/about.css'));
})

app.get("/script.js", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname +  '/public/script.js'));
})

app.get("/about/team_photo", (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname +  '/public/team_photo.jpeg'));
})

app.get("/video", (req, res) => {
    res.status(200);
    res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps');
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Internal Error');
})

app.listen(app.get('port'), () => {
    console.log(`Express server on localhost${app.get("port")}; Press CTRL+C to terminate`)
})