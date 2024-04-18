import React from "react";

const StatsItem = ({ title, itemText }) => {
	return (
		<div>
			<h2 className="text-3xl sm:text-5xl font-bold playfair-display  text-red-500">
				{title}
			</h2>
			<p className="leading-4 max-w-40 mt-3">{itemText}</p>
		</div>
	);
};

export default StatsItem;
