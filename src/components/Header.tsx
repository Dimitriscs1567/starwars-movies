import React from 'react';
import searchIcon from '../resources/images/search-icon.png';

type Props = {
	setFilter: (value: string) => void;
};

const Header = (props: Props) => {
	return (
		<div className="headerContainer">
			<div className="buttonHeader">Sort by...</div>
			<div className="inputContainerHeader">
				<img className="imgHeader" src={searchIcon} alt="Search..." />
				<input
					onChange={(e) => props.setFilter(e.target.value.trim())}
					placeholder="Type to search..."
					className="inputHeader"
				/>
			</div>
		</div>
	);
};

export default Header;
