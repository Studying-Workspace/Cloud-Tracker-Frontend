import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useGetBillingData from "../../Features/DashBoard/useGetBillingData";
import { defaultDates } from "../../utils/billingDataHandling";
const FilterDate = () => {
	const { BillingData } = useGetBillingData();
	const { startDate, endDate } = defaultDates(BillingData);

	const [inputStartDate, setInputStartDate] = useState<Date | null>(
		new Date(startDate),
	);

	const [inputEndDate, setInputEndDate] = useState<Date | null>(
		new Date(endDate),
	);

	const [granularity , setGranularity] = useState<string>("m") ;

	return (
		<div className="flex items-center justify-between gap-40">
			<div className="flex items-center gap-6 text-linearOrange-200">
				<button onClick={()=>setGranularity("d")} className={`${granularity === "d" ? " font-bold text-lg" : ""}`}>Daily</button>
				<button onClick={()=>setGranularity("m")} className={`${granularity === "m" ? " font-bold text-lg" : ""}`}>Monthly</button>
			</div>
			<div className="flex items-center gap-4">
				<span className=" text-gray-400">
					<SlCalender />
				</span>
				<div className="flex flex-col">
					<DatePicker
						selected={inputStartDate}
						onChange={(date) => setInputStartDate(date)}
					/>
					<DatePicker
						selected={inputEndDate}
						onChange={(date) => setInputEndDate(date)}
					/>
				</div>
			</div>
		</div>
	);
};
export default FilterDate;
