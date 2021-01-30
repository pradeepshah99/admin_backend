const express = require('express');
const router = express.Router();

const database = require('../model/admin_schema');

router.get('/get', async(req, res)=>
{
    const data = await database.find({});
    if(data=="")
    {
        res.status(500).json({message: "No Data"})
    }
    else
    {
        res.status(500).json({ message: "Data Fetched", data: data });

    }
    
    
});

router.post('/register', async(req, res)=>
{
    const checkEmail = await database.findOne({email : req.body.email})
    {
        if(checkEmail)
        {
            res.status(400).json({message:"Account Already Exist"});
        }
        else {
            let data = database();
            data.name = req.body.name;
            data.email = req.body.email;
            data.password = req.body.password;
            data.mobile = req.body.mobile;

            if (!req.body.name || !req.body.email || !req.body.password || !req.body.mobile) {
                res.json("All field data input is compulsory");
            }
            else {
                data.save().then((err, result) => {
                    if (!err) {
                        
                        res.status(200).json({ message: "Data saved successfully", Result: result });
                    }
                    else {
                        res.status(501).json({ message: " Some Internal Error"});

                    }
                })
            }
        }        
    }
})



 








module.exports = router;
