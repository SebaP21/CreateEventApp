import "../../../styles/WeddingStyles/flowers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export const FlowersHeader = () => {
	return (
		<section className='flowers-header'>
			<div className='flowers-picture'>
				<h1>Kasia i Srasia</h1>
			</div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa
				iste cumque suscipit ducimus libero culpa tempore quas minima sint.
			</p>
			<button>
				<FontAwesomeIcon
					icon={faAnglesDown}
					className='arrow-down'
				/>
			</button>
		</section>
	);
};
