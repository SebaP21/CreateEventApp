import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FlowersContact = () => {
	return (
		<section className='section flowers-contact'>
			<div className='flowers-contact-items'>
				<h3>Skontaktuj się z nami, aby potwierdzić swoją obecność</h3>
				<div className='flowers-contact-person'>
					<h5>Kasia</h5>
					<p>
						<FontAwesomeIcon
							icon={faPhone}
							style={{ color: "#f4c0af" }}
						/>
						300-300-300
					</p>
					<p>
						<FontAwesomeIcon
							icon={faEnvelope}
							style={{ color: "#f4c0af" }}
						/>
						kasia@srasia.pl
					</p>
				</div>
				<div className='flowers-contact-person'>
					<h5>Srasia</h5>
					<p>
						<FontAwesomeIcon
							icon={faPhone}
							style={{ color: "#f4c0af" }}
						/>
						500-500-500
					</p>
					<p>
						<FontAwesomeIcon
							icon={faEnvelope}
							style={{ color: "#f4c0af" }}
						/>
						srasia@srasia.pl
					</p>
				</div>
			</div>
            <div className="flowers-contact-picture">dsa</div>
		</section>
	);
};
