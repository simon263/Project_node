const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
// on va se créer un model de Base de données stocké dans AnimeModel
const AnimeModel = mongoose.model(
    "animes",
    {
        name: {
            type: String,
            required: true
        },
        nbvue: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
            
        }

    },
    "anime"
);
module.exports = {AnimeModel};