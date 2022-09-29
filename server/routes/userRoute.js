const express = require('express');
const router = express.Router();
const UserModel = require('../model/userModel');

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'from get route : /user ' });
});

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !password) {
      return res.status(404).send('Please Enter All Details');
    }

    const newUser = await UserModel.create(req.body);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ msg: 'Internal Server Error' });
  }
});

module.exports = router;
