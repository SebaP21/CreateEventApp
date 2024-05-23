import "../../../styles/WeddingStyles/flowers.css";

export const FlowersAbout = ({ img, aboutdescrption }:any) => {
	return (
		<section
			id='about'
			className='section flowers-about'
		>
			<div className='flowers-our-story'>
				<img
					src='https://static.wixstatic.com/media/ea71bb_6ddba9a5c2c641b28affaa9173df0b5f~mv2_d_1300_1286_s_2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_6ddba9a5c2c641b28affaa9173df0b5f~mv2_d_1300_1286_s_2.png'
					alt=''
				/>
				<h3>Nasza historia</h3>
				<p> {aboutdescrption}</p>
			</div>
			<div className='our-picture-flowers'>
				<img
					src={img}
					alt=''
				/>
			</div>
		</section>
	);
};
