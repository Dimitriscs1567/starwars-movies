import React from 'react';
import { SortOption } from '../models/SortOption';
import closeIcon from '../resources/images/closeIcon.png';
import { $enum } from 'ts-enum-util';

type Props = {
	offsetTop: number;
	offsetLeft: number;
	closeWindow: (option?: SortOption) => void;
	sortOption: SortOption;
};

const SortWindow = (props: Props) => {
	return (
		<div
			className="sortWindow"
			style={{ top: props.offsetTop, left: props.offsetLeft }}
		>
			<div className="sortTitleSection">
				<div className="sortByText">Sort by</div>
				<img
					onClick={() => props.closeWindow()}
					className="imgClose"
					src={closeIcon}
				/>
			</div>
			{$enum(SortOption)
				.getKeys()
				.map((option, index) => {
					return (
						<div
							key={index}
							onClick={(e) => props.closeWindow(index)}
							className="sortOption"
							style={{
								backgroundColor: props.sortOption === index ? 'beige' : 'white'
							}}
						>
							{option}
						</div>
					);
				})}
		</div>
	);
};

export default SortWindow;
