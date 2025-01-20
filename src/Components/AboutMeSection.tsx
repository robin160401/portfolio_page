import Header from "./Header"
import ScrollBox from "./ScrollBox"

export default function AboutMeSection() {
	return (
		<section className="h-screen bg-black relative z-10 text-white pl-12">
			<Header/>
			<div>
		  		<h1 className="text-3xl py-8">So, who am I?</h1>
		  		<h2 className="pb-5">I'm an ongoing Frontend Developer based in Germany.</h2>
			</div>
			<div>
		  		<h3>My Passions</h3>
				<div className="">
		  			<ScrollBox img={['/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg']}/>
				</div>
			</div>
	  	</section>
	)
  }
  
