import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineLineChart } from "react-icons/ai";
import { BsUmbrella } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { motion } from "framer-motion";
import PopUp from "@/Components/PopUp";
import GenBtn from "@/Components/GenBtn";
import NavBar from "@/Components/NavBar";

type Props = {};
const MENU_ITEM = [
	{
		title: "Home",
		icon: () => <AiOutlineHome size={25} className="text-gray-400" />,
	},
	{
		title: "Investments",
		icon: () => <AiOutlineLineChart size={25} className="text-gray-400" />,
	},
	{
		title: "Loans",
		icon: () => <CiMoneyBill size={25} className="text-gray-400" />,
	},
	{
		title: "Insurance",
		icon: () => <AiOutlineHome size={25} className="text-gray-400" />,
	},
	{
		title: "Debts",
		icon: () => <AiOutlineHome size={25} className="text-gray-400" />,
	},
	{
		title: "Overdrafts",
		icon: () => <AiOutlineHome size={25} className="text-gray-400" />,
	},
];

const OPT = [
	{
		title: "Statements",
		icon: () => <BsUmbrella size={25} className="text-gray-900" />,
	},
	{
		title: "Transfer",
		icon: () => <AiOutlineLineChart size={25} className="text-gray-900" />,
	},
	{
		title: "Payments",
		icon: () => <BsUmbrella size={25} className="text-gray-900" />,
	},
	{
		title: "PIX",
		icon: () => <AiOutlineLineChart size={25} className="text-gray-900" />,
	},
	{
		title: "Savings",
		icon: () => <BsUmbrella size={25} className="text-gray-900" />,
	},
];

const TRANS = [
	{
		date: "Jan 2023",
		data: [
			{
				title: "Mr. Prize SuperMarket",
				subtitle: "SuperMarket goods purchase",
				value: "-$63.00",
				isNegative: true,
				day: 10,
			},
			{
				title: "Mr. Goodbye SuperMarket",
				subtitle: "SuperMarket goods purchase",
				value: "$63.00",
				isNegative: false,
				day: 10,
			},
			{
				title: "Mr. Minca Corp",
				subtitle: "SuperMarket goods purchase",
				value: "-$63.00",
				isNegative: true,
				day: 10,
			},
			{
				title: "Safari Stores",
				subtitle: "SuperMarket goods purchase",
				value: "$623.00",
				isNegative: false,
				day: 10,
			},
		],
	},
];

const User = (props: Props) => {
	const [showPopup, setshowPopup] = useState(false);
	return (
		<>
			<NavBar />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="grid grid-cols-1 lg:grid-cols-12 bg-[#EBF9FF] px-20 pt-16"
			>
				<div className="col-span-2 bg-[#EBF9FF] p-0 rounded-lg lg:flex flex-col items-center hidden">
					{/* <Image src={require("@/assets/logoBrand.png")} width={150} height={90} /> */}
					<div className="bg-[#00A2DD] flex flex-col w-full p-8  rounded-lg">
						<div className="flex items-center justify-center">
							<Image
								src={require("@/assets/user.png")}
								width={140}
								height={140}
								className="rounded-full"
							/>
						</div>
						<h1 className="text-white text-center text-sm font-bold p-2">Jenny Wilson</h1>
						<h1 className="text-white text-center text-xs p-0">Agency XYZ</h1>
						<h1 className="text-white text-center text-xs p-0">Jenny Wilson</h1>
					</div>

					<div className="mt-4 bg-white p-2 rounded-lg w-full">
						{MENU_ITEM?.map((item: any) => (
							<div
								className="flex space-y-2 my-1 space-x-4 items-center 
                        hover:scale-105 transition-all cursor-pointer p-2"
								onClick={() => setshowPopup(true)}
							>
								<div className="mt-2">{item.icon()}</div>
								<h1 className="text-sm text-gray-400">{item.title}</h1>
							</div>
						))}
					</div>
				</div>

				<div className="col-span-10 bg-[#EBF9FF] flex flex-col h-screen">
					<div className="flex space-x-3 mx-6 my-0">
						<div className="flex flex-col p-8 bg-white rounded-lg shadow-xl w-[300px]">
							<p className="text-xs font-bold text-blue-800">Checking Account Balance</p>
							<h1 className="mt-5 text-xl text-cyan-600">$ 1900,520</h1>
							<p className="text-xs text-gray-400">Available Balance</p>
							<div className="my-5 w-full border border-gray-400 border-dashed" />
						</div>

						<div className="flex flex-col p-8 bg-white rounded-lg shadow-xl w-full">
							<p className="text-xs font-bold">Credit Card Balance</p>
							<div className="rounded-full flex w-96 h-4 bg-green-600 my-4" />
							<div className="flex space-x-4 space-y-0 w-full">
								<Image src={require("@/assets/Card.png")} width={300} height={10} />
								<div className="ml-2 flex">
									<Image src={require("@/assets/Card1.png")} width={300} height={50} />
								</div>
								<div
									className="h-[150px] w-[300px] bg-gray-300 rounded-lg 
                            flex items-center justify-center"
								>
									<h1 className="text-sm text-gray-500">Add Card</h1>
								</div>
							</div>
						</div>
					</div>

					<div className="flex m-4 w-full">
						{OPT?.map((item: any) => (
							<div
								className="flex flex-col mx-2  items-center 
                        justify-center w-[164px] h-[115px] p-3 bg-white shadow-lg rounded-lg"
							>
								<div className="mt-2">{item.icon()}</div>
								<h1 className="text-xs text-gray-900">{item.title}</h1>
							</div>
						))}
					</div>

					<div className="rounded-lg bg-white mx-5 p-4">
						<h1 className="text-gray-400">Transactions</h1>

						<div className="flex flex-col">
							{TRANS.map((item: any) => (
								<>
									<h1 className="text-lg text-gray-400">{item.date}</h1>
									<div className="p-5 flex flex-col">
										{item.data.map((subitem: any) => (
											<div className="flex justify-between pb-10">
												<div className="flex">
													<div className="flex">
														<h1 className="bg-gray-700 text-white p-2 m-2 text-xs rounded-full">
															{subitem.day}
														</h1>
													</div>
													<div className="mt-1">
														<p className="ml-12 text-gray-400">{subitem.title}</p>
														<p className=" ml-12 text-gray-400 text-xs mt-0">{subitem.subtitle}</p>
													</div>
												</div>
												<div className="flex items-end">
													<h1
														className={`${subitem.isNegative ? "text-red-900" : "text-green-700"}`}
													>
														{subitem.value}
													</h1>
												</div>
											</div>
										))}
									</div>
								</>
							))}
						</div>
					</div>
				</div>
				<PopUp isVisible={showPopup} onClose={() => setshowPopup(false)} />
			</motion.div>
		</>
	);
};

export default User;
