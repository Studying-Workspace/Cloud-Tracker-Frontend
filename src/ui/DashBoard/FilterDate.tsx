import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const FilterDate = () => {
	const [startDate, setStartDate] = useState<Date | null>(
		new Date(new Date()),
	);
	// const ExampleCustomInput = forwardRef(({ value, onClick } : {value:any , onClick:Function}, ref) => (
	// 	<button className="example-custom-input" onClick={onClick} ref={ref}>
	// 		{value}
	// 	</button>
	// ));

	return (
		<div className="flex items-center justify-between gap-10">
			<div className="flex items-center gap-6 text-linearOrange-200">
				<button>Daily</button>
				<button>Monthly</button>
			</div>
			<div className="flex items-center gap-4">
				<span className=" text-gray-400">
					<SlCalender />
				</span>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
				<span>-</span>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
			</div>
		</div>
	);
};
export default FilterDate;
