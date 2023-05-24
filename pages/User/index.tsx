import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHome, AiOutlineLineChart } from "react-icons/ai";
import { BsUmbrella } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { motion } from "framer-motion";
import PopUp from "@/Components/PopUp";

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
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="grid grid-cols-1 lg:grid-cols-12"
		>
			<div className="col-span-2 bg-white rounded-lg lg:flex flex-col h-screen items-center hidden">
				<Image src={require("@/assets/logoBrand.png")} width={150} height={90} />
				<Image
					src={
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdQvcTSANSyEl8ICHpOjlFnBiLUZgafMuh5wZhUdA&s"
					}
					width={100}
					height={100}
					className="rounded-full"
				/>
				<h1 className="text-gray-400 font-bold p-2">Jenny Wilson</h1>
				<h1 className="text-gray-400 text-xs p-0">Agency XYZ</h1>
				<h1 className="text-gray-400 text-xs p-0">Jenny Wilson</h1>
				<div className="pt-12 ">
					{MENU_ITEM?.map((item: any) => (
						<div
							className="flex space-y-4 my-4 space-x-8 items-center 
                        hover:scale-105 transition-all cursor-pointer"
							onClick={() => setshowPopup(true)}
						>
							<div className="mt-2">{item.icon()}</div>
							<h1 className="text-sm text-gray-400">{item.title}</h1>
						</div>
					))}
				</div>
			</div>

			<div className="col-span-10 bg-[#EBF9FF] flex flex-col h-screen">
				<div className="flex space-x-3 mx-6 my-3">
					<div className="flex flex-col p-3 bg-white rounded-lg shadow-xl w-[300px]">
						<p className="text-xs font-bold">Checking Account Balance</p>
						<h1 className="mt-5 text-xl text-cyan-600">R$ 1900,520</h1>
						<p className="text-xs text-gray-400">available balance</p>
						<div className="my-5 w-full border border-gray-400 border-dashed" />
						<h1 className="mt-0 text-xl text-red-600">R$ -100,520</h1>
						<p className="text-xs text-gray-400">future balance</p>
					</div>

					<div className="flex flex-col p-3 bg-white rounded-lg shadow-xl w-full">
						<p className="text-xs font-bold">Credit Card Balance</p>
						<div className="rounded-full flex w-60 h-4 bg-green-600 mt-4" />
						<div className="my-5 w-full border border-gray-400 border-dashed" />
						<div className="flex space-x-4 w-full">
							<Image src={require("@/assets/Card.png")} width={300} height={150} />
							<div
								className="h-[150px] w-[300px] bg-gray-300 rounded-lg 
                            flex items-center justify-center"
							>
								<h1 className="text-sm text-gray-500">Add Card</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="flex overflow-auto p-4">
					{OPT?.map((item: any) => (
						<div
							className="flex flex-col mx-3  items-center 
                        justify-center w-[150px] p-8 bg-white shadow-lg rounded-lg"
						>
							<div className="mt-2">{item.icon()}</div>
							<h1 className="text-sm text-gray-900">{item.title}</h1>
						</div>
					))}
				</div>

				<div className="rounded-lg bg-white w-full m-5 overflow-scroll p-4">
					<h1 className="text-gray-400">Transactions</h1>

					<div className="m-5 flex flex-col">
						{TRANS.map((item: any) => (
							<>
								<h1 className="text-lg text-gray-400">{item.date}</h1>
								<div className="p-5 flex flex-col">
									{item.data.map((subitem: any) => (
										<div className="flex pb-10">
											<div>
												<h1 className="bg-gray-700 text-white p-2 text-xs rounded-full">
													{subitem.day}
												</h1>
											</div>
											<div>
												<p className="ml-12 text-gray-400">{subitem.title}</p>
												<p className=" ml-12 text-gray-400 text-xs mt-0">{subitem.subtitle}</p>
											</div>
											<h1
												className={`${
													subitem.isNegative ? "text-red-900" : "text-green-700"
												} ml-96`}
											>
												{subitem.value}
											</h1>
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
	);
};

export default User;
