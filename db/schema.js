const mongoose = require('mongoose')

const breedSchema = mongoose.Schema ({
  type: {
    type: String,
  },
  personality: {
    type: String,
  },
  energy: {
    type: String,
  },
  shedding: {
    type: String,
    default: `Breed's Shedding`
  },
  expectancy: {
    type: String,
    default: `Breed's Life Expectancy`
  },
})

const dogSchema = mongoose.Schema ({
  name: {
    type: String,
  },
  age: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  fur: {
    type: String,
  },
  gender: {
    type: String,
  },
  location: {
    type: String,
  },
  image: {
    type: String,
  },
  breed: [breedSchema]
})

const ownerSchema = mongoose.Schema ({
  name: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
  },
  dog: [dogSchema]
})

const Dog = mongoose.model('Dog', dogSchema)
const Owner = mongoose.model('Owner', ownerSchema)
const Breed = mongoose.model('Breed', breedSchema)

module.exports = {
  Dog, Owner, Breed
}