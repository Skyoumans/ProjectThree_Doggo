const express = require('express')
const router = express.Router()
const { Owner } = require('../db/schema.js')

router.get('/', async (req, res) => {
  try {
    const owners = await Owner.find({})
    res.json(owners)
  } catch (error) {
    res.send(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id)
    res.json(owner)
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newOwner = new Owner(req.body.owner)
    const saved = await newOwner.save()
    res.json(saved)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router