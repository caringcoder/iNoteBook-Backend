const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.send("Auth Route")
})

//Create a user using : POST "/api/auth/"  Doesn't require authentication
router.post('/', [
    body('email', 'Email is not Valid').isEmail(),
    body('name', 'Name must be atleast 3 letters').isLength({ min: 3 }),
    body('password', 'Password cannot be less than 5').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body)

    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // })

    // const saveUser = await user.save();
    // res.json(saveUser)

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user=>res.json(user))
    .catch((err)=>{res.status(400).json(err)})
})

module.exports = router;