import { Link } from "react-router";

export default function HeroSection(){
	return (
		<section className="min-h-[calc(100vh-10h)] bg-[url('/img/background-wall.jpg')] bg-center bg-no-repeat bg-cover sticky top-0">
			<div className="">
			<h1 className="text-9xl font-it-eb pl-10  pt-20">Hello, I'm Robin Stumpf</h1>
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