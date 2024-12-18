import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface ScrollBoxProps {
	img: string[];
}

export default function ScrollBox(props: ScrollBoxProps){

	const slideLeft = () => {
		const slider = document.getElementById('slider');
		slider!.scrollLeft = slider!.scrollLeft - 200;
	}

	const slideRight = () => {
		const slider = document.getElementById('slider');
		slider!.scrollLeft = slider!.scrollLeft + 200;
	}
	return (
		<div className="relative flex items-center">
			<MdChevronLeft size={40} onClick={slideLeft}/>
			<div id="slider" className="w-1/3 overflow-x-scroll overflow-y-hidden scroll border scroll-smooth whitespace-nowrap snap-mandatory snap-x">
				{props.img.map((img, index) => (
					<img 
						className=" w-[240px] p-5 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 snap-center"
						src={img}
						key={index}
					/>
				))}
			</div>
			<MdChevronRight size={40} onClick={slideRight}/>
		</div>
	)
}