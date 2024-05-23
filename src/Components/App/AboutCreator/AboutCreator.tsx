import { ChangeEvent, useState } from "react";
import { FlowersAbout } from "../../WeddingComponents/FlowersTemplate/FlowersAbout";
import { FlowersNav } from "../../WeddingComponents/FlowersTemplate/FlowersNav";
import { url } from "inspector";

export const AboutCreator = () => {
	const [loveDescription, setLoveDescription] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel recusandae sed aspernatur tempora. Eligendi quisquam dolor, libero cum quo rerum, unde maxime alias autem similique iusto minima eum, eaque eveniet nam sint velit dolore corrupti exercitationem. Consequatur facere illum iste maxime ratione? Nam aperiam, quas iusto perspiciatis dignissimos ad."
	);

	const [aboutImg, setAboutImg] = useState(
		"https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg"
	);

	const examplesPicturesClick = (e: any) => {
		setAboutImg(e.target.src);
	};

	// const [file, setFile] = useState<File | null>(null);
	// const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
	// 	const files = e.currentTarget.files;
	// 	if (files) setFile(files[0]);
	//     console.log(files);
	// };

	return (
		<section
			id='about-setup'
			className='setup'
		>
			<div className='creator-setup'>
				<h3>Przedstawcie Waszą historię w kilku słowach!</h3>
				<input
					type='text'
					placeholder='Wasza historia...'
					onChange={(e) => {
						setLoveDescription(e.target.value);
					}}
				/>
				<label htmlFor='about-img'>
					Dodaj Wasze ulubione zdjęcie lub skorzystaj z kilku gotowych poniżej
				</label>
				{/* <input
					type='file'
				/> */}
				<input
					type='text'
					placeholder='Posiadasz link do zdjęcia? Wrzuć go tutaj'
					onChange={(e) => {
						setAboutImg(e.target.value);
					}}
				/>
				<div className='sample-pictures-about'>
					{samplePictures.map((url, index) => (
						<img
							src={url.url}
							key={index}
							onClick={examplesPicturesClick}
						/>
					))}
				</div>
				<a href='#header-setup'>
					<button className='next-step'>Cofnij</button>
				</a>
				<a href=''>
					<button
						disabled
						className='next-step'
					>
						Przejdź dalej
					</button>
				</a>
			</div>
			<div className='result'>
				<FlowersNav />
				<FlowersAbout
					img={aboutImg}
					aboutdescrption={loveDescription}
				/>
			</div>
		</section>
	);
};

type picturesType = {
	id: number;
	url: string;
};

const samplePictures: picturesType[] = [
	{
		id: 1,
		url: "https://cdn.pixabay.com/photo/2017/08/07/07/48/couple-2601156_640.jpg",
	},
	{
		id: 2,
		url: "https://cdn.pixabay.com/photo/2017/07/31/23/50/people-2562102_640.jpg",
	},
	{
		id: 3,
		url: "https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_640.jpg",
	},
	{
		id: 4,
		url: "https://cdn.pixabay.com/photo/2016/10/30/17/49/couple-1783843_640.jpg",
	},
	{
		id: 5,
		url: "https://cdn.pixabay.com/photo/2016/11/23/15/24/couple-1853499_640.jpg",
	},
	{
		id: 6,
		url: "https://cdn.pixabay.com/photo/2020/04/17/12/28/cloud-5055011_640.jpg",
	},
];
