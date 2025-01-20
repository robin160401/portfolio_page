import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HeroSection() {

	const [opacity, setOpacity] = useState(1);

  	useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fadePoint = 400;
      const newOpacity = Math.max(1 - scrollTop / fadePoint, 0);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
	return (
	  <>
		<div className="relative">
		  <div className="fixed top-0 left-0 w-full h-screen bg-[url('/img/background-wall.jpg')] bg-cover bg-no-repeat z-10"></div>
		  <div className="flex justify-between text-white relative z-10 h-16">
			<div className="flex items-center pr-5 opacity-100">
			  <Link to="/" className="text-2xl font-normal m-3 text-black">By Robin</Link>
			  <p className="pt-1">a Software Developer</p>
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
		</div>

		<section className="min-h-[calc(100vh)]  bg-cover font-light sticky top-16 z-10">
		  <div className="flex flex-col items-center"
		  		style={{opacity}}>
			<h1 className="text-[160px] text-center font-thin">ROBIN STUMPF</h1>
			<div className="flex max-w-screen-xl">
			  <div className="w-1/3 ml-12">
				<p className="text-2xl mt-16">
				  a passionate Software Developer. I love continuously honing my skills and tackling new challenges to grow as a developer.
				</p>
				<button className="bg-black bg-opacity-70 shadow-xl rounded-e-full text-white mt-16 h-12 w-40 hover:bg-black hover:opacity-50">
				  <Link to="/about">About me</Link>
				</button>
			  </div>
			  <img src="/img/me.jpg" alt="" className="h-96 ml-36 rounded-lg shadow-2xl" />
			</div>
		  </div>
		</section>
	  </>
	);
  }