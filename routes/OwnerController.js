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
    res.json(user)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router