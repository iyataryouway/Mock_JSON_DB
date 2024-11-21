const express = require('express');
const router = express.Router();

//parse incoming JSOn to native JS object
router.use(express.json());

//take url-encoded strings and decodes them for use
router.use(express.urlencoded({extended: true}));


//define a home route
router.get('/home', (req,res) =>{
    res.render('home');
});

//exports the router object
module.exports = router;