import { useState } from "react";
import { Link } from "react-router-dom";

export const TopicSelection = () => {
	// const [choice,setChoice] = useState(false)

	// const choiceClick = () => {
	//     setChoice((prevstate)=> !prevstate)

	// }

	return (
		<section className='choice'>
			<div className='choice-title'>
				<h2>Wybierz swoje wydarzenie i poinformuj swoich bliskich!</h2>
			</div>
			<div className='choice-box'>
				<Link to='/wedding'>
					<div className='choice-card wedding-choice'>
						<button>Strona ślubna</button>
					</div>
				</Link>
				<Link to='/party'>
					<div className='choice-card party-choice'>
						<button>Inne wydarzenie</button>
					</div>
				</Link>
			</div>
		</section>
	);
};
