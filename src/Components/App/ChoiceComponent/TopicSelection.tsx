import { useState } from "react";

export const TopicSelection = () => {
    const [choice,setChoice] = useState(false)

    const choiceClick = () => {
        setChoice((prevstate)=> !prevstate)
        
    }



	return (
		<section className='choice'>
			<div className='choice-title'>
				<h2>Wybierz swoje wydarzenie i poinformuj swoich bliskich!</h2>
			</div>
			<div className='choice-box'>
				<div onClick={choiceClick} className='choice-card wedding-choice'>
					<button>Strona ślubna</button>
				</div>
				<div className='choice-card party-choice'>
					<button>Inne wydarzenie</button>
				</div>
			</div>
		</section>
       
	);
};
