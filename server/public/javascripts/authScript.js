import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC_p8FjjtOCNGNoD1Gf6LMRYAVfpGBezaE',
  authDomain: 'summerclam-b3ad1.firebaseapp.com',
  projectId: 'summerclam-b3ad1',
  storageBucket: 'summerclam-b3ad1.appspot.com',
  messagingSenderId: '673238422819',
  appId: '1:673238422819:web:c24d0ed89a077242b46896',
  measurementId: 'G-KKD30R31WP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

alert('try')
