import { FC } from "react";
import "../../../styles/WeddingStyles/flowers.css";
import { detailsDataProps } from "../../App/CeremonyDateCreator/DateCreator";

export const WeddingPartyTime = ({date,place}:any) => {
	return (
		<section className='section wedding-party-time'>
			<div className='wedding-time'>
				<img
					src='https://static.wixstatic.com/media/ea71bb_4afe88d84e374fb293ca75499f61ca11~mv2_d_1463_1253_s_2.png/v1/fill/w_105,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4afe88d84e374fb293ca75499f61ca11~mv2_d_1463_1253_s_2.png'
					alt=''
				/>
				<h3>Uroczystość ślubu</h3>
				<h5>Kiedy?</h5>
				<p>{date}</p>
				<h5>Gdzie?</h5>
				<p>{place.city}</p>
				<p>{place.street}</p>
				<p>{place.adress}</p>
			</div>
		</section>
	);
};
