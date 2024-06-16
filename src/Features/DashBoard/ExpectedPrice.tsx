const ExpectedPrice = () => {
	return (
		<div className="flex gap-20">
			<div className="space-y-1">
				<p className="text-lg mobile:text-sm">Current month costs</p>
				<p className=" text-xl font-semibold mobile:text-lg text-linearOrange-200">
					$0.00
				</p>
			</div>
			<div className="space-y-2">
				<p className="text-lg mobile:text-sm">Forecasted month end costs</p>
				<p className=" text-xl font-semibold mobile:text-lg text-linearOrange-200">
					$0.00
				</p>
			</div>
		</div>
	);
};
export default ExpectedPrice;
