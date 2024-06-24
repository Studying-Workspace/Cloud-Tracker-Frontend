import useGetForecastData from './useGetForecastData';

const ExpectedPrice = () => {
	const { ForecastData, isLoading } = useGetForecastData();
	return (
		<div className="flex gap-20">
			{/* <div className="space-y-1">
				<p className="text-lg mobile:text-sm">Current month costs</p>
				<p className="text-xl font-semibold mobile:text-lg text-linearOrange-200">
					$0.00
				</p>
			</div> */}
			<div className="space-y-2 text-center">
				<p className="text-lg mobile:text-sm">Forecasted month end costs</p>
				{isLoading ? (
					<p className="text-xl font-semibold mobile:text-lg text-linearOrange-200">
						Loading...
					</p>
				) : (
					<p className="text-xl font-semibold mobile:text-lg text-linearOrange-200">
						${ForecastData.toFixed(2)}
					</p>
				)}
			</div>
		</div>
	);
};

export default ExpectedPrice;
