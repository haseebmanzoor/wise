//THIS IS HOME SCREEN PAGE WITHOUT ANY ROUTE NAME SO IT WILL ALWAYS RENDER AS HOME WHEN NO ROUTE IS PROVIDED
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React from "react";
import SetUserAction from "@/Store/User/SetUserAction";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import GenBtn from "@/Components/GenBtn";

export default function Home({ results }) {
	const dispatch = useDispatch<any>();
	const router = useRouter();
	const userData = useSelector((state: any) => state.userr.user);

	const [accNo, setaccNo] = useState("");
	const [lName, setlName] = useState("");
	const [password, setpassword] = useState("");

	const [loading, setloading] = useState(false);

	const handleNext = () => {
		setloading(true);
		setTimeout(() => {
			router.push("/User");
		}, 3000);
	};

	//FUNCTIONS

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="flex flex-col h-screen items-center overflow-auto 
				scrollbar-hide space-y-4 bg-[#00A2DD] justify-center"
			>
				<h1 className="text-sm text-white">Sign In</h1>
				<Image src={require("@/assets/logoBrand.png")} width={200} height={100} />
				<div className="space-y-4 flex flex-col">
					<input
						type="number"
						className="form-input bg-gray-50 rounded-lg border-0 transition-all  
					w-[350px] text-sm  h-[50px] text-gray-400 tracking-wider "
						placeholder="Account Number"
						value={accNo}
						onChange={(e) => {
							setaccNo(e.target.value);
						}}
					/>
					<input
						type="text"
						className="form-input bg-gray-50 rounded-lg border-0 transition-all  
					w-[350px] text-sm  h-[50px] text-gray-400 tracking-wider "
						placeholder="Last Name"
						value={lName}
						onChange={(e) => {
							setlName(e.target.value);
						}}
					/>
					<label className="flex relative">
						<input
							type="password"
							className="form-input bg-gray-50 rounded-lg border-0 transition-all  
				  w-[350px] text-sm  h-[50px] text-gray-400 tracking-wider "
							placeholder="Password"
							value={password}
							onChange={(e) => {
								setpassword(e.target.value);
							}}
						/>
						<FiEye size={20} className="absolute right-0 m-3" />
					</label>
					<div className="py-6 flex">
						<GenBtn label="LOGIN" onPress={handleNext} disabled={loading} />
					</div>
				</div>
			</motion.div>
		</>
	);
}
