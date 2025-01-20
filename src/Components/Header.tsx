import { Link } from "react-router";

export default function Header(){
	return(
	<div className="flex justify-between bg-black text-white font-thin">
		<div className="flex items-center pr-5">
			<Link to="/" className="text-xl font-medium m-3">By Robin</Link>
			<p >a Software Developer</p>
		</div>
		<nav className="m-5 flex items-center">
			<Link to="/about" className="group flex p-2">
				<p className="mr-3 group-hover:animate-jump-in">About</p>
			</Link>
			<Link to="/blog" className="group flex items-center p-2">
				<p className="mr-3 group-hover:animate-jump-in">Blog</p>
			</Link>
			<Link to="/projects" className="group flex items-center p-2">
				<p className="group-hover:animate-jump-in">Projects</p>
			</Link>
			<button className="ml-10 mr-3">DE</button>
			<p>|</p>
			<button className="ml-3">EN</button>
		</nav>
	</div>
	)
}