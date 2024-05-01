import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartFilter from "../../ui/DashBoard/ChartFilter";
import useGetElementWidth from "../../hooks/useGetElementWidth";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const ColumnChart = ({ type }: { type: "full" | "mini" }) => {
	const { containerRef, width } = useGetElementWidth();

	const [miniChartData] = useState<ChartData>({
		series: [
			{
				name: "EC2",
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 41, 90],
			},
			{
				name: "S3",
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 40],
			},
			{
				name: "RDS",
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 69, 20],
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 250,
				width: 600,
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "55%",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"],
			},
			xaxis: {
				categories: [
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nev",
					"Dec",
				],
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val: number) {
						return "$ " + val + " thousands";
					},
				},
			},
		},
	});

	const [fullChartData] = useState<ChartData>({
		series: [
			{
				name: "EC2",
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 41, 90],
			},
			{
				name: "S3",
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 40],
			},
			{
				name: "RDS",
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 69, 20],
			},
		],
		options: {
			chart: {
				type: "bar",
				height: 350,
				width: 800,
			},
			legend: {
				position: "bottom",
				fontSize: "14px",
				fontWeight: "bold",
				labels: {
					colors: "gray",
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "55%",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"],
			},
			xaxis: {
				categories: [
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nev",
					"Dec",
				],
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val: number) {
						return "$ " + val + " thousands";
					},
				},
			},
		},
	});

	if (type === "mini") {
		return (
			<div
				ref={containerRef}
				className="desktop:w-[500px] transtion-all flex h-[300px] w-[600px] cursor-pointer items-center justify-center bg-white shadow-xl duration-300 hover:bg-stone-50 mobile:w-[350px]"
			>
				<ReactApexChart
					options={miniChartData.options}
					series={miniChartData.series}
					type={miniChartData.options.chart?.type}
					height={miniChartData.options.chart?.height}
					width={width}
				/>
			</div>
		);
	}

	const [region, setRegion] = useState<string>("");
	const [zones, setZones] = useState<string>("");
	const [pricing, setPricing] = useState<string>("");

	return (
		<div
			ref={containerRef}
			className="transtion-all flex  h-full w-[90%] flex-col items-center justify-between bg-white py-20 shadow-xl duration-300 mobile:w-full mobile:gap-8 tablet:w-full tablet:gap-8"
		>
			<ChartFilter
				region={region}
				setRegion={setRegion}
				zones={zones}
				setZones={setZones}
				pricing={pricing}
				setPricing={setPricing}
			/>
			<ReactApexChart
				options={fullChartData.options}
				series={fullChartData.series}
				type={fullChartData.options.chart?.type}
				height={fullChartData.options.chart?.height}
				width={width}
			/>
		</div>
	);
};

export default ColumnChart;
