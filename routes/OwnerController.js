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

router.patch('/:id', async (req, res) => {
  const editedOwner = req.body.owner
  console.log(editedOwner)
  const owner = await Owner.findById(req.params.id)
  console.log(owner)
  owner.name = editedOwner.name
  owner.userName = editedOwner.userName
  owner.password = editedOwner.password
  owner.memberSince = editedOwner.memberSince
  owner.image = editedOwner.image
  const saved = await owner.save()
  console.log(saved)
  res.json(saved)
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