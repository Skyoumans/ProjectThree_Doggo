const mongoose = require('mongoose')

const breedSchema = mongoose.Schema ({
  type: {
    type: String,
    default: `Breed's name`
  },
  personality: {
    type: String,
    default: `Breed's Personality`
  },
  energy: {
    type: String,
    default: `Breed's Energy`
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
    default: 'Dog Name'
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
    default: `Dog's Fur Color`
  },
  gender: {
    type: String,
    default: `Dog's Gender`
  },
  location: {
    type: String,
    default: `Dog's Location`
  },
  image: {
    type: String,
  },
  breed: [breedSchema]
})

const ownerSchema = mongoose.Schema ({
  name: {
    type: String,
    default: `User's Name`
  },
  userName: {
    type: String,
    default: `User's Username`
  },
  password: {
    type: String,
    default: `User's Password`
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