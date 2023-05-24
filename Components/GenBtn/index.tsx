import { motion } from "framer-motion";
import React from "react";

type Props = {
	onPress?: any;
	label?: any;
	disabled?: boolean;
	isGreenTheme?: boolean;
	isGreenInverted?: boolean;
};
const GenBtn = (props: Props) => {
	const { onPress, label, disabled } = props;
	return (
		<button
			onClick={onPress}
			className={`mt-4 flex select-none bg-[#375173]  p-4 w-[350px] rounded-md 
			justify-center items-center cursor-pointer hover:scale-105 transition-all`}
			disabled={disabled}
		>
			{disabled ? (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="inline-block h-6 w-6 animate-spin rounded-full border-4 
				border-solid border-current border-r-transparent align-[-0.125em] border-white
				motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				/>
			) : (
				<h1
					className={`font-bold ${
						props.isGreenTheme
							? "text-[#441AD3]"
							: props.isGreenInverted
							? "text-[#E6F50B]"
							: "text-white"
					} `}
				>
					{label}
				</h1>
			)}
		</button>
	);
};

export default GenBtn;
