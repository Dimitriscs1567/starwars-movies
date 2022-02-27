import React, { useRef, useState } from 'react';
import { SortOption } from '../models/SortOption';
import searchIcon from '../resources/images/search-icon.png';
import SortWindow from './SortWindow';

type Props = {
	setFilter: (value: string) => void;
	setSortOption: (option: SortOption) => void;
	sortOption: SortOption;
};

const Header = (props: Props) => {
	const sortButtonRef = useRef<HTMLDivElement>(null);
	const [sortDialogPos, setSortDialogPos] = useState<
		undefined | { offsetTop: number; offsetLeft: number }
	>(undefined);

	const onSortClick = () => {
		if (!sortDialogPos && sortButtonRef.current) {
			setSortDialogPos({
				offsetLeft: sortButtonRef.current.offsetLeft,
				offsetTop: sortButtonRef.current.offsetTop + 35
			});
		} else {
			setSortDialogPos(undefined);
		}
	};

	const closeWindow = (option?: SortOption) => {
		setSortDialogPos(undefined);
		if (option !== undefined) {
			props.setSortOption(option);
		}
	};

	return (
		<div className="headerContainer">
			<div ref={sortButtonRef} onClick={onSortClick} className="buttonHeader">
				Sort by...
			</div>
			<div className="inputContainerHeader">
				<img className="imgHeader" src={searchIcon} alt="Search..." />
				<input
					onChange={(e) => props.setFilter(e.target.value.trim())}
					placeholder="Type to search..."
					className="inputHeader"
				/>
			</div>
			{sortDialogPos && (
				<SortWindow
					offsetLeft={sortDialogPos.offsetLeft}
					offsetTop={sortDialogPos.offsetTop}
					closeWindow={closeWindow}
					sortOption={props.sortOption}
				/>
			)}
		</div>
	);
};

export default Header;
