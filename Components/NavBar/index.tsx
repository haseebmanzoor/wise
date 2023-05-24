import Image from "next/image";
import React, { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

type Props = {};

const NavBar = (props: Props) => {
	const [accNo, setaccNo] = useState("");
	return (
		<div className="flex justify-start items-center bg-[#EBF9FF] px-10">
			<Image src={require("@/assets/logoBrand.png")} width={150} height={80} />

			<label className="flex relative">
				<input
					type="number"
					className="form-input px-8 bg-gray-50 rounded-full border-0 transition-all  
					w-[550px] text-sm  h-[50px] text-gray-400 tracking-wider ml-52 "
					placeholder="Search"
					value={accNo}
					onChange={(e) => {
						setaccNo(e.target.value);
					}}
				/>
			</label>
		</div>
	);
};

export default NavBar;
