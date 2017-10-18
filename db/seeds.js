require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { Breed, Dog, Owner } = require('./schema.js')

const bull = new Breed ({
  type: 'Staffordshire Bull Terrier',
  personality: 'Brave, tenacious, a bit stubborn. Also playful, gentle, and clever',
  energy: 'Somewhat active',
  shedding: 'Seasonal',
  expectancy: '12-14 years'
})
const shiba = new Breed ({
  type: 'Shiba Inu',
  personality: 'Alert, active, attentive',
  energy: 'Very active. Shibas need daily exercise',
  shedding: 'Seasonal',
  expectancy: '12-15 years'
})
const alaskan = new Breed ({
  type: 'Alaskan Malamute',
  personality: 'Affectionate, loyal, playful, but dignified',
  energy: 'Somewhat active. They crave regular exercise',
  shedding: 'Seasonal',
  expectancy: '10-14 years'
})

const juna = new Dog ({
  name: 'Juna',
  age: 6,
  weight: 76,
  gender: 'Female',
  fur: 'Black and white with small patches of light brown',
  location: 'Macon, GA',
  image: 'https://i.imgur.com/aiV2ZHlt.jpg',
  breed: [alaskan]
})
const coco = new Dog ({
  name: 'Coco',
  age: 9,
  weight: 45,
  gender: 'Female',
  fur: 'Chestnut brown with a cream underside',
  location: 'Chicago, IL',
  image: 'https://i.imgur.com/lu9zVK5t.jpg',
  breed: [shiba]
})
const lilee = new Dog ({
  name: 'Lilee',
  age: 5,
  weight: 63,
  gender: 'Female',
  fur: 'Brown and Gold brindle',
  location: 'Macon, GA',
  image: 'https://i.imgur.com/swZOpGXt.jpg',
  breed: [bull]
})

const skylar = new Owner ({
  name: 'Skylar',
  userName: 'Skyoumans93',
  password: 'Bornthisway93',
  memberSince: 'Februrary 2016',
  image: 'https://i.imgur.com/aNt2kxds.jpg',
  dog: [lilee]
})
const liz = new Owner ({
  name: 'Liz',
  userName: 'LeapinLizard',
  password: 'DogsIsLife1',
  memberSince: 'July 2010',
  image: 'https://i.imgur.com/ImRMRGgs.jpg',
  dog: [juna]
})
const sam = new Owner ({
  name: 'Sam',
  userName: 'SamIAm',
  password: 'GreenEggsandHam',
  memberSince: 'March 2008',
  image: 'https://i.imgur.com/JzyzRNMs.jpg',
  dog: [coco]
})

Owner.remove({})
  .then(() => sam.save())
  .then(() => liz.save())
  .then(() => skylar.save())
  .then(() => console.log('Successful Save!!'))
  .then(() => mongoose.connection.close())