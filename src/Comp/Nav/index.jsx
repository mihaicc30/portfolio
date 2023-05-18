import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./index.css";

const Nav = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [burgerMenu, setBurgerMenu] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const ref = useRef(null);

	const toggleBurgerMenu = () => {
		setBurgerMenu(!burgerMenu)
		const menu = ref.current;
		const newRight = menu.style.right === "5%" ? "150%" : "5%";
		// const newDisplay = menu.style.right === "25%" ? "none" : "fixed";
	  
		menu.style.right = newRight;
		// menu.style.display = newDisplay;
	  };

	const handleToggle = () => {
		setDarkMode(!darkMode);
		document.body.style.backgroundColor = darkMode
			? "var(--lightthemecolor)"
			: "var(--darkthemecolor)";
		document.body.style.color = darkMode
			? "var(--darkthemecolor)"
			: "var(--lightthemecolor)";
	};

	return (
		

		<div className="flex list-none justify-between mt-5 p-3 mx-4 animate-fadeDOWN relative">
			

			<li className="font-bold tracking-widest p-3 my-auto">PORTFOLIO</li>
			<ul className="flex gap-5 p-3 ">
				<button
					to="/"
					className="nav-link font-bold tracking-widest animate-fadeDOWN2 min-[900px]:hidden"
					style={{ animationDuration: `1000ms` }}
					onClick={(e) => {
						e.preventDefault();
						toggleBurgerMenu();
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlSpace="preserve"
						id="Layer_1"
						x={0}
						y={0}
						height="50"
						style={{
							enableBackground: "new 0 0 180.7 180.7",
						}}
						viewBox="0 0 180.7 180.7">
						<style>{".st35{fill:#333}.st37{fill:#fbca04}"}</style>
						<path
							d="M91.1 83.5H38.5c-3.7-.1-4-.6-4.3-4.5-.9-15.4 5-27.9 16.6-37.6C70.5 24.9 92.5 22 116 31.9c12.7 5.3 22.1 14.4 27.8 27 3.2 7 4 14.4 3.6 22-.1 1.4-.8 2.4-2.3 2.4-2 .1-4 .1-6 .1-16 .1-32 .1-48 .1zM90.1 154.5c-10.5 0-21 .1-31.5-.1-7.3-.1-13.6-2.8-18.6-8.3-3.2-3.6-5.4-7.8-5.7-12.7-.2-2.7-1.2-4.4-4.1-5.4-3.6-1.2-4.7-4.4-3.5-7.8.7-2 2-3.5 4.3-3.6 2-.1 4-.2 6-.2h105.7c2.2 0 4.5 0 6.7.2 2.9.4 4.6 2.2 5 4.8.4 2.6-.6 5.1-3.3 6-2.9.9-3.6 2.6-4.1 5.3-2.5 15.7-15.3 22.2-26.2 21.8H90.1zM32.6 88.7c4.3 2.2 8.7 4 12.7 6.5 3 1.8 5.6 1.7 8.4 0 1.7-1 3.6-1.8 5.3-2.8 7.4-4.2 15.1-4.1 22.2.2 6.3 3.8 11.6 4.3 18 .4 7.2-4.4 15.1-4.7 22.9-.5 1.5.8 3.4 1.2 4.7 2.3 3.3 2.6 6.4 1.9 9.7-.1 3.2-1.9 6.7-3.4 10-5.1 1.5-.8 2.8-.8 3.8.8.8 1.3 1.7 2.5 2.5 3.8 2.3 3.8 2 4.6-2.1 6.8-2.7 1.4-5.3 2.8-7.9 4.3-7.1 3.9-14.2 4-21.5.3-9.4-4.8-9.9-6.2-20.6.2-6 3.6-12.4 3.5-18.7.6-2.5-1.1-4.9-2.4-7.4-3.7-3.2-1.6-6.3-1.4-9.3.2-.9.5-1.8.9-2.6 1.4-7.9 5.3-16 4.9-24.2 1-3.4-1.6-6.6-3.5-9.9-5.3-1.2-.7-1.8-1.7-1.2-3.1 1.1-2.9 2.5-5.8 5.2-8.2z"
							className="st35"
						/>
						<path
							d="M90.4 71.5H53.6c-1.5 0-3 0-4.5-.1s-2.3-1.1-2-2.5c.4-1.9.8-4 1.8-5.7C55.8 50.7 66 42.9 80.2 39.8c13-2.8 24.9-.3 36.1 6 9.1 5.1 14.9 13.2 17.6 23.3.3 1.1-.4 2-1.5 2.1-2 .2-4 .2-6 .2-12 .1-24 .1-36 .1z"
							style={{
								fill: "#e7780f",
							}}
						/>
						<path
							d="M91.3 128.4h35.3c2 0 4 0 6 .1 1.7.1 2.8 1.6 2.3 3.1-1.7 4.9-4.4 9-10 10-2 .3-4 .4-6 .5-19.3 0-38.5-.1-57.8.1-4 0-7.3-1-10.5-3.2-1.7-1.2-2.9-2.7-3.6-4.7-1.4-3.8-.2-5.8 3.8-5.8 13.5-.1 27-.1 40.5-.1z"
							style={{
								fill: "#eb760d",
							}}
						/>
						<path
							d="M72.4 60.1c0 .5 0 1-.1 1.5-.2 1.5-.9 2.9-2.4 3.5-1.7.7-3.4.4-4.8-.8-1.8-1.5-2.9-3.3-3.3-5.6-.4-2.3.8-4.6 2.7-5.6 1.6-.8 3.8-.4 5.5 1 1.8 1.6 2.4 3.2 2.4 6zM89.3 45.6c2.5.1 4.2 1.7 4.6 3.7.7 3.5-1 7-4.3 8.6-2.4 1.2-5.1.2-6-2.5-1-2.8.8-7.7 3.4-9.1.8-.4 1.8-.5 2.3-.7zM117.1 59.1c.2 2.7-1.2 4.8-3.3 5.8-1.7.7-3.6.1-5.3-1.7-2-2.2-2.7-4.7-1.8-7.6.9-2.9 4.2-4 6.6-2.2 2 1.6 3.7 3.4 3.8 5.7z"
							className="st37"
						/>
					</svg>
					<div ref={ref} className={`flex fixed flex-col w-[100%] right-[150%] bg-[--lightthemecolor] rounded-r-[50px] z-[50] transition-[2s] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] text-2xl gap-8 pr-8 py-[100px] border-2 border-black text-[--darkthemecolor] cursor-default `} >
						<span className={`cursor-pointer transition-[2s] ease bg-[--accentcolor] rounded-r-xl tracking-widest text-end px-8 shadow-[0px_4px_2px_#a5a5a5e3]`} onClick={(e) => {
								e.preventDefault();
								if (location.pathname == "/") return;
								document.querySelector(".mainContent").classList.add("fade-out");
								setTimeout(() => {
									navigate("/");
								}, 600);
							}}>HOME</span>
						<span className={`cursor-pointer transition-[2s] ease bg-[--accentcolor] tracking-widest rounded-r-xl text-end px-8 shadow-[0px_4px_2px_#a5a5a5e3]`} onClick={(e) => {
								e.preventDefault();
								if (location.pathname == "/projects") return;
								document.querySelector(".mainContent").classList.add("fade-out");
								setTimeout(() => {
									navigate("/projects");
								}, 600);
							}}>PROJECTS</span>
						<span className={`cursor-pointer transition-[2s] ease bg-[--accentcolor] tracking-widest rounded-r-xl text-end px-8 shadow-[0px_4px_2px_#a5a5a5e3]`} onClick={(e) => {
								e.preventDefault();
								if (location.pathname == "/contact") return;
								document.querySelector(".mainContent").classList.add("fade-out");
								setTimeout(() => {
									navigate("/contact");
								}, 600);
							}}>CONTACT</span>

					</div>
				</button>

				<NavLink
					to="/"
					className="nav-link font-bold tracking-widest animate-fadeDOWN2 max-[900px]:hidden"
					style={{ animationDuration: `1000ms` }}
					onClick={(e) => {
						e.preventDefault();
						if (location.pathname == "/") return;
						document.querySelector(".mainContent").classList.add("fade-out");
						setTimeout(() => {
							navigate("/");
						}, 600);
					}}>
					HOME
				</NavLink>

				<NavLink
					to="/projects"
					className="nav-link font-bold tracking-widest animate-fadeDOWN2 max-[900px]:hidden"
					style={{ animationDuration: `1500ms` }}
					onClick={(e) => {
						e.preventDefault();
						if (location.pathname == "/projects") return;
						document.querySelector(".mainContent").classList.add("fade-out");
						setTimeout(() => {
							navigate("/projects");
						}, 600);
					}}>
					PROJECTS
				</NavLink>

				<NavLink
					to="/contact"
					className="nav-link font-bold tracking-widest animate-fadeDOWN2 max-[900px]:hidden"
					style={{ animationDuration: `2000ms` }}
					onClick={(e) => {
						e.preventDefault();
						if (location.pathname == "/contact") return;
						document.querySelector(".mainContent").classList.add("fade-out");
						setTimeout(() => {
							navigate("/contact");
						}, 600);
					}}>
					CONTACT
				</NavLink>

				<button
					onClick={handleToggle}
					className=" animate-fadeDOWN2"
					style={{ animationDuration: `2500ms` }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlSpace="preserve"
						width={24}
						height={24}
						stroke="#000"
						viewBox="0 0 512.00 512.00">
						<path
							d="M235.102 62.694v36.571h-47.02L62.694 261.224H10.449l161.959-198.53zM339.592 62.694l161.959 198.53h-52.245L323.918 99.265h-47.02V62.694z"
							style={{
								fill: "#ffd248",
							}}
						/>
						<path
							d="M282.122 292.571H10.449v-31.347H501.551v31.347zM282.122 292.571H10.449v83.592c0 40.439 32.704 73.143 73.143 73.143h73.143c40.439 0 73.143-32.704 73.143-73.143v-36.571h52.245v36.571c0 40.439 32.704 73.143 73.143 73.143h73.143c40.439 0 73.143-32.704 73.143-73.143v-83.592h-219.43z"
							style={{
								fill: !darkMode ? "#010" : "#fff",
								transition: "1s ease",
							}}
						/>
						<path
							d="m509.646 254.621.001-.001-.029-.037-.007-.008L347.689 56.089a10.448 10.448 0 0 0-8.097-3.844h-62.694c-5.771 0-10.449 4.678-10.449 10.449v36.571c0 5.771 4.678 10.449 10.449 10.449h41.895l109.209 141.061H83.998l109.209-141.061h41.895c5.771 0 10.449-4.678 10.449-10.449V62.694c0-5.771-4.678-10.449-10.449-10.449h-62.694a10.451 10.451 0 0 0-8.097 3.844L2.39 254.575l-.007.008-.029.037.001.001a10.404 10.404 0 0 0-2.354 6.604v114.939c0 46.093 37.499 83.592 83.592 83.592h73.143c46.093 0 83.592-37.499 83.592-83.592v-26.122h31.347v26.122c0 46.093 37.499 83.592 83.592 83.592h73.143c46.093 0 83.592-37.499 83.592-83.592V261.225a10.417 10.417 0 0 0-2.356-6.604zM20.898 271.673h470.204v10.449H20.898v-10.449zM332.18 92.868a10.448 10.448 0 0 0-8.262-4.052h-36.571V73.143h47.284l144.911 177.633H454.43L332.18 92.868zM177.369 73.143h47.284v15.673h-36.571a10.448 10.448 0 0 0-8.262 4.052L57.569 250.775H32.458L177.369 73.143zm251.039 365.714h-73.143c-34.569 0-62.694-28.124-62.694-62.694V318.694h-20.898v10.449h-31.347v-10.449h-20.898V376.163c0 34.569-28.124 62.694-62.694 62.694H83.592c-34.569 0-62.694-28.124-62.694-62.694V303.02h470.204v73.143c0 34.57-28.124 62.694-62.694 62.694z"
							style={{
								fill: "#5c5c5c",
							}}
						/>
						<path
							d="M67.918 370.939H47.02c0 23.046 18.75 41.796 41.796 41.796v-20.898c-11.523 0-20.898-9.375-20.898-20.898zM339.592 370.939h-20.898c0 23.046 18.75 41.796 41.796 41.796v-20.898c-11.523 0-20.898-9.375-20.898-20.898z"
							style={{
								fill: darkMode ? "#010" : "#fff",
								transition: "1s ease",
							}}
						/>
					</svg>
				</button>

			</ul>
		</div>
		
	);
};

export default Nav;
