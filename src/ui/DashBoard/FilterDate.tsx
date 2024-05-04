import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface props{
	inputStartDate:string;
	setInputStartDate:Function;

	inputEndDate:string;
	setInputEndDate:Function;

	granularity:string;
	setGranularity:Function;
}

const FilterDate = ({inputStartDate, setInputStartDate, inputEndDate, setInputEndDate, granularity, setGranularity }:props) => {

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
						selected={new Date(inputStartDate)}
						onChange={(date) => setInputStartDate(date?.toLocaleDateString())}
					/>
					<DatePicker
						selected={new Date(inputEndDate)}
						onChange={(date) => setInputEndDate(date?.toLocaleDateString())}
					/>
				</div>
			</div>
		</div>
	);
};
export default FilterDate;
