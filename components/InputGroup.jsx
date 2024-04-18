import React from "react";

const InputGroup = ({ children }) => {
	return (
		<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
			{children}
		</div>
	);
};

export default InputGroup;
