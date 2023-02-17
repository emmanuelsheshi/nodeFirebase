const express = require('express')
const router = express.Router()

// // Import the functions you need from the SDKs you need
// var firebase = require('firebase/app')
// var auth = require('firebase/auth')
// var store = require('firebase/firestore')

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: 'AIzaSyC_p8FjjtOCNGNoD1Gf6LMRYAVfpGBezaE',
//   authDomain: 'summerclam-b3ad1.firebaseapp.com',
//   projectId: 'summerclam-b3ad1',
//   storageBucket: 'summerclam-b3ad1.appspot.com',
//   messagingSenderId: '673238422819',
//   appId: '1:673238422819:web:c24d0ed89a077242b46896',
//   measurementId: 'G-KKD30R31WP',
// }

// app = firebase.initializeApp(firebaseConfig)

// Initialize Firebase
router.use('/', (req, res, next) => {
  res.render('form')
})

module.exports = router
