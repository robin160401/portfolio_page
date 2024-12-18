import { Link } from "react-router";
import Header from "./Header";

export default function HeroSection(){
	return (
		<section className="min-h-screen bg-[url('/img/background-wall.jpg')] bg-center bg-no-repeat bg-cover">
			<Header/>
				<div className="mt-20 sticky top-0">
						<h1 className="text-9xl font-it-eb pl-10 max-w-screen-lg">Hello I'm Robin Stumpf</h1>
						<div className="flex mt-20 max-w-screen-xl">
							<div className="w-1/3 ml-12">
								<p className="text-xl font-semibold">
									a passionate Web Developer that loves to continuously honing his skills and tackle new challanges to grow as a developer.
								</p>
								<button className="bg-black bg-opacity-70 shadow-xl rounded-e-full text-white mt-16 h-10 w-32 hover:bg-black hover:opacity-50"><Link to="/about">About me</Link></button>
							</div>
							<img src="/img/me.jpg" alt="" className="h-96 ml-36 rounded-lg -mt-40 mb-20"/>
						</div>
				</div>
		</section>
	)
}