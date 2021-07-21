const express = require ('express')
const cors = require('cors')


const app = express()

const  ctrl = require ('./controller');


app.use (express.json())
app.use(cors())

app.get('/api/houses', ctrl.getAllHouses);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:id', ctrl.updateHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse);

app.listen (4004, function() {
    console.log('Running on 4004')
})

