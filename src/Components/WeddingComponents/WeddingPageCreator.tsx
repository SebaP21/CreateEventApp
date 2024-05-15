import { useState } from "react";
import { HeaderApp } from "../App/HeaderApp/HeaderApp";
import { WeddingHeader } from "./WeddingHeader";
import { HeadingCreator } from "../App/HeadingCreator/HeadCreator";

export const WeddingPageCreator = () => {
	const [templateSelect, setTemplateSelect] = useState("");
	return (
		<>
			<HeaderApp />
			{templateSelect === "" && (
				<section className='section'>
					<h2>Wybierz jeden z gotowych szablonów i rozpocznij konfigurację!</h2>
					<div className='select-template-box'>
						<div className='select-template-card'>
							<div className='template-preview'>Kwiaty</div>
							<button onClick={() => setTemplateSelect("flowers")}>
								Wybierz
							</button>
						</div>
						<div className='select-template-card'>
							<div className='template-preview'>Boho</div>
							<button onClick={() => setTemplateSelect("boho")}>Wybierz</button>
						</div>
						<div className='select-template-card'>
							<div className='template-preview'>Glamour</div>
							<button onClick={() => setTemplateSelect("glamour")}>
								Wybierz
							</button>
						</div>
					</div>
				</section>
			)}
			{templateSelect === "flowers" && <HeadingCreator/>}
		</>
	);
};
