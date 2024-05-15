import { Link } from "react-router-dom";

export const HeaderApp = () => {
	return (
		<section className='header-app'>
			<Link to='/'>
				<h1>
					Create<span>Your</span>Page
				</h1>
			</Link>
			<Link to='/wedding'>Konfigurator ślubny</Link>
			<Link to='party'>Inne Wydarzenia</Link>
		</section>
	);
};
