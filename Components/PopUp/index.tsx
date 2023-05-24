import React from "react";

type Props = {
	isVisible?: boolean;
	onClose?: any;
};

const PopUp = (props: Props) => {
	return props.isVisible ? (
		<div
			className="left-[40%] bg-gray-200 top-[40%] absolute flex-col
		border rounded-lg border-gray-400 p-20 flex items-center"
		>
			<h1>To enjoy all the features, kindly activate your debit card.</h1>
			<button className="m-10" onClick={props.onClose}>
				Close
			</button>
		</div>
	) : null;
};

export default PopUp;
