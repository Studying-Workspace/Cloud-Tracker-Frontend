import { orange } from "@mui/material/colors";
import { MenuItem, Select } from "@mui/material";

interface Prop {
	value: string | File;
	defaultValue: string |File ;
	setValue: Function;
	options: any[];
	title ?: string ;
}

const SelectFilter = ({ value, defaultValue, setValue, options , title}: Prop) => {
	return (
		<div className="flex h-[35px] w-[250px] items-center justify-center bg-white mobile:justify-start">
			<div className="text-sm text-stone-400">{title}</div>
			<Select
				labelId="label"
				id="select"
				onChange={(e) => setValue(e.target.value)}
				value={typeof(value) === "string" ? value : undefined}
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
						{value === "" ? typeof(defaultValue) === "string" ? defaultValue : "" : value}
					</span>
				)}
			>

				{options?.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
			</Select>
		</div>
	);
};

export default SelectFilter;
