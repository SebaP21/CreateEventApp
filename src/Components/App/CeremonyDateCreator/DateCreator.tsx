import { useState } from "react";
import { FlowersNav } from "../../WeddingComponents/FlowersTemplate/FlowersNav";
import { WeddingPartyTime } from "../../WeddingComponents/FlowersTemplate/FlowersWeddingParty";

export const DateCreator = () => {
	const [date, setDate] = useState<string>("10.10.2020");
	const [details, setDetails] = useState<detailsDataProps>(detailsData);

	return (
		<section className='setup'>
			<div className='creator-setup'>
				<h4>Podaj datę ślubu</h4>
				<input type='date' onChange={(e)=>{
                    setDate(e.target.value)
                }} />
				<h4>Podaj miejsce uroczystości</h4>
				<div className='place-details'>
					<input
						type='text'
						name='city'
						placeholder='Miejscowość'
                        />
					<input
						type='text'
						name='street'
						placeholder='Ulica'
					/>
					<input
						type='text'
						name='number'
						placeholder='Numer budynku'
					/>
				</div>
			</div>
			<div className='result'>
				<>
					<FlowersNav />
					<WeddingPartyTime
						date={date}
						place={details.place}
					/>
				</>
			</div>
		</section>
	);
};

export type detailsDataProps = {
	place: {
		city: string;
		street: string;
		adress: string;
	};
};

const detailsData: detailsDataProps = {
	place: {
		city: "Zakopane",
		street: "Mariacka",
		adress: "55",
	},
};
