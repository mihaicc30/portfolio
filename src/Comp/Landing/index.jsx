import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";

import { GoDesktopDownload } from "react-icons/go";
import Icon from "../../Icon.jsx";

const Landing = ({ fromDB }) => {
	const navigate = useNavigate();
	const ref = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [width, setWidth] = useState(400);

	useEffect(() => {
	  function handleResize() {
		const newWidth = window.innerWidth > 400 ? 400 : window.innerWidth - 50;
		setWidth(newWidth);
	  }
  
	  window.addEventListener("resize", handleResize);
	  handleResize();
  
	  return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div ref={ref} className="mainContent">
			<div className="flex justify-center gap-[5vw] mx-[5vw] my-[25vh] max-[900px]:flex-col">
				<div className="flex flex-col basis-[40%] mx-2 p-4 max-[900px]:max-w-[400px] max-[900px]:mx-auto">
					<p className="text-5xl max-[500px]:text-[12vw] font-bold tracking-widest animate-fadeUPX">
						WELCOME!
					</p>
					<p className="animate-fadeUPX" style={{ animationDuration: `1s` }}>
						Hello and nice to have you here! I'm Mihai and a passionate Web
						Developer.
					</p>
					<div className="inline-flex gap-4 w-100 my-2">
						<a
							href="https://www.linkedin.com/in/mihai-culea-614747227/"
							target="_blank">
							<Icon img="./assets/Icons/LI.png" delay="1.3" />
						</a>
						<a href="https://github.com/mihaicc30" target="_blank">
							<Icon img="./assets/Icons/GH.png" delay="1.6" />
						</a>
					</div>
					<a
						href="../../assets/CVMihaiCulea.docx"
						download
						className=" px-6 py-2 bg-[--accentcolor] rounded-xl my-2 flex justify-between  animate-fadeUPX"
						style={{ animationDuration: `1.9s` }}>
						<span>Download CV</span>
						<span>
							<GoDesktopDownload className="text-2xl" />
						</span>
					</a>
				</div>

				<div className="basis-[40%] mx-2  max-[900px]:max-w-[400px]  max-[900px]:mx-auto">
					<picture>
						<img
							src="../../assets/1.jpg"
							alt=""
							className="animate-scaleFromMax"
						/>
					</picture>
				</div>
			</div>

			<div
				className="flex gap-3 mx-[5vw] flex-wrap justify-center my-[25vh] font-[bold] items-baseline animate-fadeUPX"
				style={{ animationDuration: `2.2s` }}>
				<span className="tracking-[10px] text-[--accentcolor] font-black text-xl my-auto">
					Tech Stack
				</span>
				<span className="font-bol my-auto font-black text-3xl translate-y-[-4px]">
					|
				</span>
				<Icon img="./assets/Icons/JS.png" />
				<Icon img="./assets/Icons/RE.png" />
				<Icon img="./assets/Icons/HTML.png" />
				<Icon img="./assets/Icons/CSS.png" />
				<Icon img="./assets/Icons/Bootstrap.png" />
				<Icon img="./assets/Icons/TW.png" />
				<Icon img="./assets/Icons/NODE.png" />
				<Icon img="./assets/Icons/API.png" />
				<Icon img="./assets/Icons/PYT.png" />
				<Icon img="./assets/Icons/ML.png" />
				<Icon img="./assets/Icons/LARA.png" />
				<Icon img="./assets/Icons/MYSQL.png" />
				<Icon img="./assets/Icons/SEQ.png" />
				<Icon img="./assets/Icons/MONGO.png" />
				<Icon img="./assets/Icons/MG.png" />
				<Icon img="./assets/Icons/FB.png" />
				<Icon img="./assets/Icons/GH.png" />
				<Icon img="./assets/Icons/STRIPE.png" />
				<Icon img="./assets/Icons/Cordova.png" />
			</div>

			<div className="flex justify-center gap-[5vw] mx-[5vw] my-[25vh] max-[934px]:items-center max-[934px]:flex-col">
				<div className="basis-[40%] mx-2">
					<iframe width={width} height="200" src="https://www.youtube.com/embed/LcIapRxXjw4?autoplay=1&mute=1&loop=1" title="Bredwardine Bridge -drone footage" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl "></iframe>
				</div>

				<div className="basis-[40%] mx-2">
					<p className="text-[--accentcolor] font-black tracking-[6px]">
						ABOUT ME
					</p>
					<p className="font-bold text-xl">Outside of work and academics,</p>
					<p>
					An enthusiast of drone videography and bike riding, I have a self-taught skill set in video editing and post-production. I stay informed about the latest trends and technologies in the field by actively engaging with communities related to drones and videography.
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-[5vw] mx-[5vw] mt-[25vh]">
				<div className="basis-[40%] mx-2">
					<p className="text-[--accentcolor] font-black tracking-[10px] text-center">
						PROJECTS
					</p>
				</div>
			</div>

			<div className="flex flex-wrap justify-center gap-2">
				{fromDB.map(
					(project, i) =>
						i < 3 && (
							<div
								key={crypto.randomUUID()}
								className="mx-2 w-[250px] relative my-2">
								<div className="relative ">
									<div className="absolute inset-0 bg-black opacity-25"></div>
									<picture>
										<img
											src={project.img}
											width="250"
											height="250"
											className="mx-auto block object-cover hover:opacity-50 rounded"
										/>
									</picture>
									<a
										href={project.link}
										target="_blank"
										className="absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 bg-[#dba511a3] transition duration-300 ease-out">
										<span className="font-bold text-3xl">Open Project</span>
									</a>
								</div>
								<p className="font-bold tracking-[4px] my-2">{project.name}</p>
								<div className="tags flex gap-2 flex-wrap my-2">
									{project.tags.map((tag) => (
										<span
											key={crypto.randomUUID()}
											className={`${tag.class} ${
												tag.el == "VanillaJS" ? "text-[20px]" : ""
											}`}>
											{tag.el}
										</span>
									))}
								</div>
							</div>
						),
				)}
			</div>

			<div>
				<p className="text-end text-xl font-black tracking-[6px] ">
					<NavLink
						to="/projects"
						className="font-bold tracking-widest"
						onClick={(e) => {
							e.preventDefault();
							if (location.pathname == "/projects") return;
							ref.current.classList.add("fade-out");
							setTimeout(() => {
								navigate("/projects", { state: { scrollToTop: true } });
							}, 600);
						}}>
						Check all projects ➡
					</NavLink>
				</p>
			</div>

			<p className="text-[--accentcolor] font-black tracking-[10px] text-center mt-[25vh] mb-5">
				CONTACT
			</p>
			<div className="flex justify-center gap-[5vw] mx-[5vw] mb-[25vh]  max-[600px]:flex-col">
				<div className="basis-[40%] mx-2 text-right">
					<NavLink
						to="/contact"
						className="font-bold tracking-widest"
						onClick={(e) => {
							e.preventDefault();
							if (location.pathname == "/contact") return;
							ref.current.classList.add("fade-out");
							setTimeout(() => {
								navigate("/contact");
							}, 600);
						}}>
						<p className="text-3xl font-black">Want to get in touch?</p>
						<p className="font-normal">Drop me a message ➡</p>
					</NavLink>
				</div>

				<div className="basis-[40%] mx-2">
					<picture>
						<img src="../../assets/bike.JPG" className="rounded" />
					</picture>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-[5vw] mx-[5vw] my-[25vh]">
				<p className="text-[--accentcolor] font-black tracking-[6px]">
					PORTFOLIO
				</p>
				<p className="font-bold text-xl">Mihai Culea</p>
				<div className="inline-flex gap-4">
					<a
						href="https://www.linkedin.com/in/mihai-culea-614747227/"
						target="_blank">
						<Icon img="./assets/Icons/LI.png" delay="1.3" />
					</a>
					<a href="https://github.com/mihaicc30" target="_blank">
						<Icon img="./assets/Icons/GH.png" delay="1.6" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Landing;
