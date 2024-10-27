import { getFirestore } from 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import Landing from './Comp/Landing'
import Projects from './Comp/Projects'
import Contact from './Comp/Contact'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

import Icon from './Icon.jsx'

function App() {
  const fromDB = [
    {
      name: 'Buzz Book',
      img: '../../assets/ProjectSS/BUZZ.jpg',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RE.png' /> },
        { el: <Icon img='./assets/Icons/FB.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
      ],
      link: 'https://buzzbook.web.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/BuzzBook',
    },
    {
      name: 'Point Of Sale App v2',
      img: '../../assets/ProjectSS/CCWPOS.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RE.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/MONGO.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/Android.png' /> },
        { el: <Icon img='./assets/Icons/ML.png' /> },
        { el: <Icon img='./assets/Icons/STRIPE.png' /> },
      ],
      link: 'https://ccwpos.web.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/ePOS-v2',
    },
    {
      name: 'EPub',
      img: '../../assets/ProjectSS/EPub.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RN.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/NODE.png' /> },
        { el: <Icon img='./assets/Icons/MONGO.png' /> },
        { el: <Icon img='./assets/Icons/Android.png' /> },
        { el: <Icon img='./assets/Icons/IOS.png' /> },
      ],
      link: 'https://epubserver.fly.dev/',

      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/epub',
    },
    {
      name: 'CCW Logistics',
      img: '../../assets/ProjectSS/CCWLogistics.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RE.png' /> },
        { el: <Icon img='./assets/Icons/NODE.png' /> },
        { el: <Icon img='./assets/Icons/FB.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/STRIPE.png' /> },
      ],
      link: 'https://ccwlogistics.web.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/LogisticsApp',
    },
    {
      name: 'FlexRide',
      img: '../../assets/ProjectSS/FlexRide.PNG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RE.png' /> },
        { el: <Icon img='./assets/Icons/FB.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/Android.png' /> },
      ],
      link: 'https://flexride.web.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/FlexRide',
    },
    {
      name: 'EZEPost',
      img: '../../assets/ProjectSS/EZEPOST.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/LARA.png' /> },
        { el: <Icon img='./assets/Icons/MYSQL.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/STRIPE.png' /> },
      ],
      link: 'https://ezepost.fly.dev/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/consulting_project',
    },
    {
      name: 'Linked Roomies',
      img: '../../assets/ProjectSS/LinkedRoomies.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/RE.png' /> },
        { el: <Icon img='./assets/Icons/TW.png' /> },
        { el: <Icon img='./assets/Icons/FB.png' /> },
      ],
      link: 'https://linkroomie.web.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/LinkedRoomies',
    },
    {
      name: 'CCWorcester',
      img: '../../assets/ProjectSS/CCWorcester.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/JS.png' /> },
        { el: <Icon img='./assets/Icons/Bootstrap.png' /> },
        { el: <Icon img='./assets/Icons/NODE.png' /> },
        { el: <Icon img='./assets/Icons/MONGO.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/STRIPE.png' /> },
      ],
      link: 'https://ccworcester.fly.dev/',
    },
    {
      name: 'Hippos POS',
      img: '../../assets/ProjectSS/Hippos.JPG',
      tags: [
        { el: <Icon img='./assets/Icons/PYT.png' /> },
        { el: <Icon img='./assets/Icons/API.png' /> },
        { el: <Icon img='./assets/Icons/MYSQL.png' /> },
      ],
      link: 'https://hippos.netlify.app/',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/Hippos',
    },
    {
      name: 'Tank VS UFOs',
      img: '../../assets/ProjectSS/TANKVSUFOS.JPG',
      tags: [{ el: <Icon img='./assets/Icons/PYT.png' /> }, { el: <Icon img='./assets/Icons/PYGAME.png' /> }],
      link: 'https://github.com/mihaicc30/tankvsufos',
      info: 'Source Code',
      infolink: 'https://github.com/mihaicc30/tankvsufos',
    },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            path='/'
            element={<Landing fromDB={fromDB} />}
          />
          <Route
            path='/projects'
            element={<Projects fromDB={fromDB} />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='*'
            element={<Landing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
