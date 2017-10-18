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
    const owner = await Owner.findById(req.params.ownerId)
    console.log(owner)
    const newDog = new Dog(req.body.dog)    
    owner.dog.push(newDog)
      const saved = await owner.save()
      console.log(saved)
    res.json(saved)
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
  const saved = await owner.saved()
  res.json(saved)
})


router.delete('/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.ownerId)
    console.log(owner)
    owner.dog.id(req.params.id).remove()
    const saved = await owner.save()
    res.send(saved)
  } catch (error) {
    res.send(error)
  }
})

module.exports = router