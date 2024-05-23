import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlowersAbout } from "../../WeddingComponents/FlowersTemplate/FlowersAbout";
import { FlowersAccomodation } from "../../WeddingComponents/FlowersTemplate/FlowersAccomodation";
import { FlowersContact } from "../../WeddingComponents/FlowersTemplate/FlowersContact";
import { FlowersNav } from "../../WeddingComponents/FlowersTemplate/FlowersNav";
import { WeddingPartyTime } from "../../WeddingComponents/FlowersTemplate/FlowersWeddingParty";
import { FlowersWitnesses } from "../../WeddingComponents/FlowersTemplate/FlowersWitnesses";
import "../../../styles/WeddingStyles/flowers.css";
import { useState } from "react";

export const HeadingCreator = () => {
	const [names, setNames] = useState("Kasia i Ryszard");
	const [description, setDescription] = useState(
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit." +
			" Doloribus ipsa iste cumque suscipit ducimus libero culpa tempore" +
			"quas minima sint. "
	);
	const [checked, setChecked] = useState(false);

	return (
		<section id="header-setup" className='setup heading-creator'>
			<div className='creator-setup'>
				<input
					type='text'
					placeholder='Podaj Wasze imiona'
					onChange={(e) => {
						setNames(e.target.value);
					}}
				/>

				{!checked && (
					<input
						type='text'
						placeholder='Wprowadź swój opis wydarzenia poniżej nagłówka'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				)}
				<div className='checkbox'>
					<label htmlFor='resignation'>Rezygnuję z opisu wydarzenia</label>
					<input
						type='checkbox'
						name='resignation'
						onClick={() => {
							setChecked((prevState) => !prevState);
						}}
					></input>
				</div>
				<a href="#about-setup"><button
					disabled={names === "Kasia i Ryszard"}
					className='next-step'
				>
					Przejdź dalej
				</button></a>
			</div>
			<div className='result'>
				<>
					<FlowersNav names={names} />
					<section className='flowers-header'>
						<div className='flowers-picture'>
							<h1>{names}</h1>
						</div>
						{!checked && <p>{description}</p>}
						<a href='#about'>
							<button>
								<FontAwesomeIcon
									icon={faAnglesDown}
									className='arrow-down'
								/>
							</button>
						</a>
					</section>
					{/* <FlowersAbout /> */}
					<WeddingPartyTime date={"10/10/2030"} place={{
						city: "Kraków",
						street: "Mariacka",
						adress: "123"
					}}					
					/>
					<FlowersAccomodation />
					<FlowersWitnesses />
					<FlowersContact></FlowersContact>
				</>
			</div>
		</section>
	);
};

// {
// 	{
// <FlowersAccomodation/>
// <FlowersContact/> */
// 	}
// }
