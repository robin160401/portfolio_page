import ScrollBox from "./ScrollBox"

export default function AboutMeSection() {
	return (
		<section className="min-h-screen bg-black relative z-10 text-white pl-12">
			<div>
		  		<h1 className="text-3xl py-8">So, who am I?</h1>
		  		<h2 className="pb-5">I'm an ongoing Frontend Developer based in Germany.</h2>
			</div>
			<div>
		  		<h3>My Passions</h3>
		  		<ScrollBox img={['/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg', '/img/me.jpg']}/>
			</div>
	  	</section>
	)
  }
  
