const express = require('express');
const app = express(); //app il sera que c'est express
require('./models/dbConfig');
const animeRoutes = require('./routes/animeController');
const bodyParser = require('body-parser');
// pour le middleware
const mongoose = require('mongoose');
//rendre l'ap accessible a tous

const cors = require('cors');



//mongoose.set('useFindAndModify', false);
// creation d'un middleware(échange d'information)
// fonction qui va etre a l'affut sur les res et req
app.use(bodyParser.json());
app.use(cors());
app.use('/post',animeRoutes);
app.listen(5500,() => console.log('server started: 5500'));