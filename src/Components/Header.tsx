import { Link } from "react-router";

export default function Header(){
	return(
	<div className="flex justify-between bg-black text-white">
		<div className="flex items-center">
			<Link to="/" className="mr-5 text-xl font-bold m-5">By Robin</Link>
			<p >a Web Developer</p>
		</div>
		<div className="m-5 flex items-center">
			<Link to="/about" className="mr-3">About</Link>
			<Link to="/blog" className="mr-3">Blog</Link>
			<Link to="/projects" className="mr-3">Projects</Link>
			<button className="ml-10 mr-3">DE</button>
			<p>|</p>
			<button className="ml-3">EN</button>
		</div>
	</div>
	)
}