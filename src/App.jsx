import React, { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Landing from "./Comp/Landing/index.jsx";
import Projects from "./Comp/Projects/index.jsx";
import Contact from "./Comp/Contact/index.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

import Icon from "./Icon.jsx";

const fromDB = [
	{
		name: "Hippos POS v2 (CCW)",
		img: "../../assets/ProjectSS/CCWPOS.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/JS.png" /> },
			{ el: <Icon img="./assets/Icons/RE.png" /> },
			{ el: <Icon img="./assets/Icons/TW.png" /> },
			{ el: <Icon img="./assets/Icons/MONGO.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/Android.png" /> },
			{ el: <Icon img="./assets/Icons/ML.png" /> },
			{ el: <Icon img="./assets/Icons/STRIPE.png" /> },
		],
		link: "https://ccwpos.web.app/",
	},
	{
		name: "EZEPost",
		img: "../../assets/ProjectSS/EZEPOST.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/LARA.png" /> },
			{ el: <Icon img="./assets/Icons/MYSQL.png" /> },
			{ el: <Icon img="./assets/Icons/TW.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/STRIPE.png" /> },
		],
		link: "https://ezepost.fly.dev/",
		info: "Project Source Code and Instructions on GitHub:",
		infolink: "https://github.com/mihaicc30/consulting_project",
	},
	{
		name: "Linked Roomies",
		img: "../../assets/ProjectSS/LinkedRoomies.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/JS.png" /> },
			{ el: <Icon img="./assets/Icons/RE.png" /> },
			{ el: <Icon img="./assets/Icons/TW.png" /> },
			{ el: <Icon img="./assets/Icons/FB.png" /> },
		],
		link: "https://linkroomie.web.app/",
	},
	{
		name: "CCWorcester",
		img: "../../assets/ProjectSS/CCWorcester.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/JS.png" /> },
			{ el: <Icon img="./assets/Icons/Bootstrap.png" /> },
			{ el: <Icon img="./assets/Icons/NODE.png" /> },
			{ el: <Icon img="./assets/Icons/MONGO.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/STRIPE.png" /> },
		],
		link: "https://ccworcester.fly.dev/",
	},
	{
		name: "EPub",
		img: "../../assets/ProjectSS/EPub.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/JS.png" /> },
			{ el: <Icon img="./assets/Icons/Bootstrap.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/NODE.png" /> },
			{ el: <Icon img="./assets/Icons/Android.png" /> },
			{ el: <Icon img="./assets/Icons/Cordova.png" /> },
			{ el: <Icon img="./assets/Icons/STRIPE.png" /> },
		],
		link: "https://epubserver.fly.dev/",
	},
	{
		name: "CCW Logistics",
		img: "../../assets/ProjectSS/CCWLogistics.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/JS.png" /> },
			{ el: <Icon img="./assets/Icons/RE.png" /> },
			{ el: <Icon img="./assets/Icons/NODE.png" /> },
			{ el: <Icon img="./assets/Icons/FB.png" /> },
			{ el: <Icon img="./assets/Icons/TW.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/STRIPE.png" /> },
		],
		link: "https://ccwlogistics.web.app/",
	},
	{
		name: "Hippos POS",
		img: "../../assets/ProjectSS/Hippos.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/PYT.png" /> },
			{ el: <Icon img="./assets/Icons/API.png" /> },
			{ el: <Icon img="./assets/Icons/MYSQL.png" /> },
		],
		link: "https://hippos.netlify.app/",
		info: "Project Source Code and Instructions on GitHub:",
		infolink: "https://github.com/mihaicc30/Hippos",
	},
	{
		name: "Tank VS UFOs",
		img: "../../assets/ProjectSS/TANKVSUFOS.JPG",
		tags: [
			{ el: <Icon img="./assets/Icons/PYT.png" /> },
			{ el: <Icon img="./assets/Icons/PYGAME.png" /> },
		],
		link: "https://github.com/mihaicc30/tankvsufos",
	},
];

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Landing fromDB={fromDB} />} />
					<Route path="/projects" element={<Projects fromDB={fromDB} />} />
					<Route path="/contact" element={<Contact />} />

					<Route path="*" element={<Landing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
