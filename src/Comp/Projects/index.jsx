import React , {useEffect} from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

import Icon from "../../Icon.jsx";

const Projects = ({ fromDB }) => {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<div className="mainContent">
			<p className="text-[--accentcolor] font-black tracking-[10px] text-center mt-[25vh] mb-5">
				PROJECTS
			</p>

			<div className="flex flex-wrap justify-center gap-2 mb-[25vh]">
				{fromDB.map((project, i) => (
					<div
						key={crypto.randomUUID()}
						className={`mx-2 w-[250px] relative my-2 animate-fadeUP2 border-2 border-[#74747424]`}
						style={{ animationDuration: `${(i + 2) * 0.5}s` }}>
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
						<p className="font-bold tracking-[4px] my-2  p-2">{project.name}</p>
						<div className="tags flex gap-2 flex-wrap my-2 p-2">
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

						{project.info &&
						<div className="tags flex gap-2 flex-wrap my-2 p-2">
								<span
									key={crypto.randomUUID()}
									>
									{project.info} <a href={project.infolink} className="underline text-[--accentcolor]" target="_blank">LINK</a>
								</span>
						</div>}

					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
