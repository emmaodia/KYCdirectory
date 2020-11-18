const express = require("express");
const router = express.Router();
const Senator = require('../models/teams');
const _ = require('lodash');

const auth = require('../middleware/auth')


router.get('/search', async(req, res) => {
    try {
        const senators = await Senator.find();
        console.log(req.query)

        let response = [];

        if(typeof req.query.name != 'undefined' ){
            response = senators.filter( senator => {
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

router.get('/:senator', auth, async(req, res) => {

    try {
        const id  = req.params.senator;
        console.log(id);
        const senator = await Senator.findById(id);

        if(!senator) {
            return res.status(404).json({
              message : "Senator not found!"
            })
          }
          console.log(senator);
          
       
        res.status(200).json({
                                name: senator.name,
                                constituency: senator.constituency,
                                party: senator.party,
                                state: senator.state,
                                phone: senator.phone,
                                email: senator.email,
                                website: senator.website
                            })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
   
})

router.get('/', async(req, res) => { 

    try {
        const senator = await Senator.find();

    const response = await senator.map(senator => {
        return {
            _id: senator._id,
            name: senator.name,
            constituency: senator.constituency,
            party: senator.party,
            state: senator.state,
            phone: senator.phone,
            email: senator.email,
            website: senator.website
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
    const senator = new Senator({ name, city, coach });

    const response = await senator.save();

    res.status(200).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
});

router.patch('/:senator', auth, async(req, res) => {

    try {
        const senator = await Senator.findOneAndUpdate({ _id: req.params.senator }, req.body);

    res.status(200).json({
        name: senator.name,
        constituency: senator.constituency,
        party: senator.party,
        state: senator.state,
        phone: senator.phone,
        email: senator.email,
        website: senator.website
    })

    return console.log(senator);
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