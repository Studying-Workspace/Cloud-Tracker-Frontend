import { orange } from "@mui/material/colors";
import { MenuItem, Select } from "@mui/material";

interface Prop {
	value: string;
	defaultValue: string;
	setValue: Function;
	options: string[];
}

const SelectFilter = ({ value, defaultValue, setValue, options }: Prop) => {
	return (
		<div className="flex h-[35px] w-[200px] items-center justify-center  bg-white mobile:justify-start">
			<div className="text-sm text-stone-400">showing</div>
			<Select
				labelId="label"
				id="select"
				onChange={(e) => setValue(e.target.value)}
				value={value}
				displayEmpty
				className="w-full"
				sx={{
					"& .MuiOutlinedInput-notchedOutline": {
						color: orange[500],

						border: "none",
					},
					"& .MuiSelect-icon": {
						color: orange[600],
						fontSize: "2rem",
					},
					"& .MuiSelect-select": {
						color: orange[500],
						fontSize: "1rem",
						fontFamily: '"Poppins", sans-serif',
					},
					"& .MuiMenuItem-root": {
						color: orange[500],
						fontSize: "1rem",
						fontFamily: '"Poppins", sans-serif',
					},
				}}
				renderValue={(value) => (
					<span
						style={{
							color: orange[600],
							fontFamily: '"Poppins", sans-serif',
							fontSize: "1.1rem",
						}}
					>
						{value === "" ? defaultValue : value}
					</span>
				)}
			>
				{options?.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
			</Select>
		</div>
	);
};

export default SelectFilter;
