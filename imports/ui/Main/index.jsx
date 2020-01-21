import React, { useState } from 'react';

import Modal from '../Modal';
import Content from '../Content';

import './main.css';

const Main = (props) => {
	const [isOpened, setOpened] = useState(false);
	
	return (
		<main className="main">
			<div className="container">
				<div className="main__inner">
					<Modal isOpened={isOpened} />
					<Content 
						{...props}
					/>
				</div>
			</div>
		</main>
	);
}

export default Main;