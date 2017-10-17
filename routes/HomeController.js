const express = require('express')
const router = express.Router({mergeParams: true})
const { Owner, Dog, Breed } = require('../db/schema.js')

router.get('/', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.ownerId)
    res.json(owner.dog)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newOwner = new Owner(req.body.owner)
    const saved = await newDog.save()
    res.json(saved)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router