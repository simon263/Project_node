const express = require('express');
const req = require('express/lib/request');
// on appel la constante routeur pour joindre l'objet router de express
const router = express.Router();
// on cherche le model 
const {AnimeModel} = require('../models/animeModel');

const ObjectID = require('mongoose').Types.ObjectId;
router.get('/', (req, res)=>{
    AnimeModel.find((err,docs)=>{
        //console.log(docs);
        // on renvoi les donnée
        if(!err) res.send(docs);
        else console.log("Error to get data:" + err);
    } )
});
// on recupère un anime grâce à son id
router.get('/:id', (req,res,next)=>{
    AnimeModel.findOne({_id:req.params.id})
    .then(thing=> res.status(200).json(thing))
    .catch(error => res.status(404).json({error}));

});
// on ajoute un anime
router.post('/',(req,res)=>{
    const newRecord = new AnimeModel({
        name: req.body.name,
        nbvue: req.body.nbvue
    });
    newRecord.save((err,docs)=>{
        if(!err) res.send(docs);
        else console.log("Error creating new data" + err);
    })
})

// Update un anime
router.put("/:id",(req,res)=>{
    // on interroge si l'id n'est pas connu
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow :" + req.params.id)
    const updateRecord = {
    //on récupere les paramètres
        name: req.body.name,
        nbvue:req.body.nbvue
    };
    AnimeModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new: true},
        (err,docs)=>{
            if(!err) res.send(docs);
            else console.log("Update error: " + err);
        }

    )

})

//delete un anime

router.delete("/:id",(req, res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : "+ req.params.id)
    //on le supprime
    AnimeModel.findByIdAndRemove(
        req.params.id,
        (err, docs)=>{
            if(!err) res.send(docs);
            else console.log("Delete error " + err);
        }
    );

})
module.exports = router;