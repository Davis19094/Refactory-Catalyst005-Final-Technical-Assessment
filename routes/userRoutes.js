const express =require ('express')
const router = express.Router();
const path = require('path');
const Virus = require('../models/userModel');


 
router.get('/user',(req,res)=>{
   res.render('corona')
});

router.post('/', async(req, res)=>{
    //console.log(req.body)
    const corona = new Corona(req.body);
    try{
      await corona.save()
      res.send('Thank you entering the details!');
    }catch (err){
      res.send('sorry! something went wrong');
      console.log(err)
    }

})
module.exports = router;