import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartFilter from "../../ui/DashBoard/ChartFilter";
import useGetElementWidth from "../../hooks/useGetElementWidth";
import useGetBillingData from "./useGetBillingData";
import { defaultDates, formatDashboardData } from "../../utils/billingDataHandling";
import FilterDate from "../../ui/DashBoard/FilterDate";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const LineChart = ({ type }: { type: "full" | "mini" }) => {
	const { BillingData } = useGetBillingData();
	const { startDate, endDate } = defaultDates(BillingData);
	const [granularity, setGranularity] = useState<string>("m");
	const [inputStartDate, setInputStartDate] = useState<string>(
		startDate == undefined ? new Date().toLocaleDateString() : startDate,
	);

	const [inputEndDate, setInputEndDate] = useState<string>(
		endDate == undefined ? new Date().toLocaleDateString() : endDate,
	);
	const [region, setRegion] = useState<string>("");
	const [zones, setZones] = useState<string>("");
	const [pricing, setPricing] = useState<string>("");

	const [datesArray, setDatesArray] = useState<any[]>([]);
	const [seriesData, setSeriesData] = useState<{ name: string; data: number[] }[]>([]);
	const {containerRef, width } = useGetElementWidth();

	const [chartData, setChartData] = useState<ChartData>({
		series: seriesData,
		options: {
			chart: {
				type: "line",
				zoom: {
					enabled: true,
				},
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			//   title: {
			//     text: "Product Trends by Month",
			//     align: "center",
			//   },
			grid: {
				row: {
					colors: ["transparent"],
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: datesArray,
			},
			yaxis:{
				title:{
					text: "Price in $",
					style:{
						fontSize: '16px' ,
						fontWeight : "normal"
					}
				}
			}
		},
	});
	useEffect(() => {
		// console.log(inputStartDate);
		const {datesArray , seriesData} = formatDashboardData(BillingData, granularity, inputStartDate, inputEndDate);
		setSeriesData(seriesData);
		setDatesArray(datesArray);
		// setGranularity(granularity);
		const newChartData = {
			series : seriesData,
			options : {
				...chartData.options, 
				xaxis : {
					categories : datesArray
				}
			}
		}
		setChartData(newChartData);
		// console.log(seriesData);
	},[BillingData, inputStartDate, inputEndDate, granularity])


	if (type === "mini") {
		return (
			<div
				ref={containerRef}
				className=" transtion-all desktop:w-[1000px] flex w-[1220px] cursor-pointer items-center justify-center bg-white p-2 shadow-xl duration-300 hover:bg-stone-50 mobile:w-[350px] tablet:w-[600px]"
			>
				<ReactApexChart
					options={chartData.options}
					series={chartData.series}
					type={chartData.options.chart?.type}
					height={250}
					width={width}
				/>
			</div>
		);
	}

	return (
		<div
			ref={containerRef}
			className=" transtion-all flex h-full w-[70%] flex-col items-center justify-between bg-white py-20 shadow-xl duration-300 mobile:w-full mobile:gap-8 tablet:w-full tablet:gap-8"
		>
			<ChartFilter
				region={region}
				setRegion={setRegion}
				zones={zones}
				setZones={setZones}
				pricing={pricing}
				setPricing={setPricing}
			/>
			<FilterDate
				granularity={granularity}
				setInputStartDate={setInputStartDate}
				setInputEndDate={setInputEndDate}
				inputStartDate={inputStartDate}
				inputEndDate={inputEndDate}
				setGranularity={setGranularity}

			/>
			<ReactApexChart
				options={chartData.options}
				series={chartData.series}
				type={chartData.options.chart?.type}
				height={350}
				width={width}
			/>
		</div>
	);
};
export default LineChart;
