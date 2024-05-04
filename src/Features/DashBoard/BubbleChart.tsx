import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useGetElementWidth from "../../hooks/useGetElementWidth";
import ChartFilter from "../../ui/DashBoard/ChartFilter";
import SelectFilter from "../../ui/DashBoard/SelectFilter";
import { useUserContext } from "../../context/UserProvider";
import useIamRoles from "./useIamRoles";
import Spinner from "../../ui/Spinner";

interface ChartData {
	series: { name: string; data: number[][] }[];
	options: ApexOptions;
}

const BubbleChart = ({ type }: { type: "full" | "mini" }) => {
	const { containerRef, width } = useGetElementWidth();
	const [region, setRegion] = useState<string>("");
	const [zones, setZones] = useState<string>("");
	const [pricing, setPricing] = useState<string>("");
	const { selectedRole, setSelectedRole, iamRolesArn } = useUserContext();
	const { isLoading: IamRolesLoading } = useIamRoles();

	function generateData(baseval: any, count: any, yrange: any) {
		var i = 0;
		var series = [];
		while (i < count) {
			var x = new Date(baseval + i * 86400000).getTime(); // Format date correctly
			var y =
				Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
				yrange.min;
			var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

			series.push([x, y, z]);
			i++;
		}
		return series;
	}

	const [ChartData] = useState<ChartData>({
		series: [
			{
				name: "Bubble1",
				data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: "Bubble2",
				data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: "Bubble3",
				data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
			{
				name: "Bubble4",
				data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
					min: 10,
					max: 60,
				}),
			},
		],
		options: {
			chart: {
				height: 350,
				type: "bubble",
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: "gradient",
			},
			xaxis: {
				type: "datetime", // Set x-axis type to datetime
				tickAmount: 12,
				labels: {
					rotate: 0,
				},
			},
			yaxis: {
				max: 70,
				title: {
					text: "Price in $",
					style: {
						fontSize: "16px",
						fontWeight: "normal",
					},
				},
			},
			theme: {
				palette: "palette2",
			},
		},
	});

	if (IamRolesLoading) return <Spinner />;

	if (type === "mini") {
		return (
			<div
				ref={containerRef}
				className="desktop:w-[500px] transtion-all flex h-[300px] w-[600px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50 mobile:w-[350px]"
			>
				<ReactApexChart
					options={ChartData.options}
					series={ChartData.series}
					type={ChartData.options.chart?.type}
					height={250}
					width={width}
				/>
			</div>
		);
	}

	return (
		<div
			ref={containerRef}
			className="flex h-full w-[90%] flex-col justify-between mobile:w-full tablet:w-full"
		>
			<SelectFilter
				value={selectedRole}
				setValue={setSelectedRole}
				options={iamRolesArn}
				defaultValue={
					selectedRole === "" || undefined
						? "I Am Role Arn"
						: selectedRole
				}
			/>
			<div className="transtion-all flex gap-2 w-full  flex-col items-center justify-between bg-white py-20 shadow-xl duration-300  mobile:gap-8  tablet:gap-8">
				<ChartFilter
					region={region}
					setRegion={setRegion}
					zones={zones}
					setZones={setZones}
					pricing={pricing}
					setPricing={setPricing}
				/>
				{/* <FilterDate /> */}
				<ReactApexChart
					options={ChartData.options}
					series={ChartData.series}
					type={ChartData.options.chart?.type}
					height={350}
					width={width}
				/>
			</div>
		</div>
	);
};
export default BubbleChart;
