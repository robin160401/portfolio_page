import { useEffect, useState } from "react";
import Header from "./Header"
import ScrollBox from "./ScrollBox"

export default function AboutMeSection() {
	// const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	// const sectionRef = useRef(null);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		([entry]) => {
	// 			if (entry.isIntersecting){
	// 				setIsHeaderVisible(true);
	// 			} else {
	// 				setIsHeaderVisible(false);
	// 			}
	// 		},
	// 		// {

	// 		// }
	// 	)
	// })
	return (
		<section className="h-screen bg-black relative z-10 text-white pl-12">
			<Header/>
			<div>
		  		<h1 className="text-3xl py-8">So, who am I?</h1>
		  		<h2 className="pb-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus obcaecati, reprehenderit sapiente aut placeat veritatis incidunt eum tempora temporibus iusto rerum officia, recusandae ratione earum commodi odit. Totam dolorum illum magni veritatis eaque, enim modi rerum itaque! Impedit laudantium repellat rem ducimus officiis esse quo minus quas, odit asperiores beatae id reiciendis ad explicabo dolor hic non assumenda repudiandae unde?
				</h2>
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
  
