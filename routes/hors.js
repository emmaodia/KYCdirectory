const express = require("express");
const router = express.Router();
const Senator = require('../models/hors');
const _ = require('lodash');

const auth = require('../middleware/auth')


router.get('/search', async(req, res) => {
    try {
        const hors = await Senator.find();
        console.log(req.query)

        let response = [];

        if(typeof req.query.name != 'undefined' ){
            response = hors.filter( senator => {
                if(senator.name.toLowerCase() === req.query.name){
                    return response;
                }
            });
        }
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

router.get('/:hor', auth, async(req, res) => {

    try {
        const id  = req.params.hor;
        console.log(id);
        const hor = await Senator.findById(id);

        if(!hor) {
            return res.status(404).json({
              message : "Senator not found!"
            })
          }
          console.log(hor);
          
       
        res.status(200).json({
                                name: hor.name,
                                constituency: hor.constituency,
                                party: hor.party,
                                state: hor.state,
                                phone: hor.phone,
                                email: hor.email,
                                website: hor.website
                            })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
   
})

router.get('/', async(req, res) => { 

    try {
        const hor = await Senator.find();

    const response = await hor.map(hor => {
        return {
            _id: hor._id,
            name: hor.name,
            constituency: hor.constituency,
            party: hor.party,
            state: hor.state,
            phone: hor.phone,
            email: hor.email,
            website: hor.website
        }
    })

    res.status(200).json(response);
    console.log(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

router.post('/create', auth, async(req, res) => {

    try {
        const { name, 
                constituency,
                party,
                state,
                phone,
                email,
                website } = req.body;
    const hor = new Senator({ name, city, coach });

    const response = await hor.save();

    res.status(200).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
});

router.patch('/:hor', auth, async(req, res) => {

    try {
        const hor = await Senator.findOneAndUpdate({ _id: req.params.hor }, req.body);

    res.status(200).json({
        name: hor.name,
        constituency: hor.constituency,
        party: hor.party,
        state: hor.state,
        phone: hor.phone,
        email: hor.email,
        website: hor.website
    })

    return console.log(hor);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

router.delete('/:senator', auth, async(req, res) => {
    try {
        const id = req.params.senator;

    const senator = await Senator.remove({ _id : id })
    
    res.status(200).json({ msg: "Senator has been deleted!" })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

module.exports = router;