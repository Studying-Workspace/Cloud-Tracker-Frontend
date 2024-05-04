import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartFilter from "../../ui/DashBoard/ChartFilter";
import useGetElementWidth from "../../hooks/useGetElementWidth";
import useGetBillingData from "./useGetBillingData";
import { formatDashboardData } from "../../utils/billingDataHandling";

interface ChartData {
	series: { name: string; data: number[] }[];
	options: ApexOptions;
}

const ColumnChart = ({ type }: { type: "full" | "mini" }) => {
	const {BillingData} = useGetBillingData();
	const {datesArray , seriesData} = formatDashboardData(BillingData) ;
	const { containerRef, width } = useGetElementWidth();

	const [miniChartData] = useState<ChartData>({
		series: seriesData,
		options: {
			chart: {
				type: "bar",
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
				categories: datesArray,
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val: number) {
						return "$ " + val;
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
					height={250}
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
				options={miniChartData.options}
				series={miniChartData.series}
				type={miniChartData.options.chart?.type}
				height={350}
				width={width}
			/>
		</div>
	);
};

export default ColumnChart;
