import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
  // const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyDyRqhJDdfZcbHnS6EBH8yNXgakttO-HsI",
    authDomain: "uacef-ng.firebaseapp.com",
    projectId: "uacef-ng",
    storageBucket: "uacef-ng.appspot.com",
    messagingSenderId: "894787399848",
    appId: "1:894787399848:web:5ab430196d8db422da129d"
  };

  const app = initializeApp(firebaseConfig)

  const firestore = getFirestore(app)

  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)
})