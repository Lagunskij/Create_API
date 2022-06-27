const express = require('express');
const bodyParcer = require('body-parser');

const app = express();

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended: true}));

let artists = [
    {
        id:1,
        name: 'Metalica'
    },
    {
        id:2,
        name: 'AC/DC'
    },
    {
        id:3,
        name: 'Maroon5'
    }
]

app.get('/', function (req, res) {
    res.send('Hello API');
})

app.get('/artists', function (req, res) {
    res.send(artists)
})

app.get('/artists/:id', function (req, res){
    let artist = artists.find(function (artist){
        return artist.id === Number(req.params.id)
    });
    res.send(artist)
})

app.post('/artists', function (req, res){
    let newartist = {
        id:Date.now(),
        name: req.body.name
    };
    artists.push(newartist);
    res.send(newartist)
})

app.put('/artists/:id', function (req, res) {
    let artist = artists.find(function (artist){
        return artist.id === Number(req.params.id)
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id', function (req, res){
    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id);
    })
    res.sendStatus(200)
})

app.listen(5000, function () {
    console.log("API app");
})
