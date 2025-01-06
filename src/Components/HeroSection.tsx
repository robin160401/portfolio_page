import { Link } from "react-router";

export default function HeroSection(){
	return (
		<section className="min-h-[calc(100vh)] bg-[url('/img/background-wall.jpg')] bg-center bg-no-repeat bg-cover sticky top-0">
			<div className="flex justify-between text-white bg-black bg-opacity-20 border-black">
				<div className="flex items-center pr-5 opacity-100">
					<Link to="/" className="text-2xl font-bold m-3 text-black">By Robin</Link>
					<p className="pt-1">a Web Developer</p>
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
			<div className="">
				<h1 className="text-9xl font-it-eb pl-10  pt-20"><span className="text-gray-800">Hello,</span> I'm Robin Stumpf</h1>
				<div className="flex mt-20 max-w-screen-xl">
					<div className="w-1/3 ml-12">
						<p className="text-2xl font-semibold">
							a passionate Web Developer. I love continuously honing my skills and tackling new challenges to grow as a developer.
						</p>
						<button className="bg-black bg-opacity-70 shadow-xl rounded-e-full text-white mt-16 h-12 w-40 hover:bg-black hover:opacity-50"><Link to="/about">About me</Link></button>
					</div>
					<img src="/img/me.jpg" alt="" className="h-96 ml-36 rounded-lg -mt-40 mb-20 shadow-2xl"/>
				</div>
			</div>
		</section>
	)
}