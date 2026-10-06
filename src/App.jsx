import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import Header from './Comp/Header'
import Hero from './Comp/Hero'
import About from './Comp/About'
import Work from './Comp/Work'
import Contact from './Comp/Contact'
import Footer from './Comp/Footer'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
