import SelectFilter from "./SelectFilter";

interface Props {
	region: string;
	setRegion: Function;
	zones: string;
	setZones: Function;
	pricing: string;
	setPricing: Function;
}

const ChartFilter = ({
	region,
	setRegion,
	zones,
	setZones,
	pricing,
	setPricing,
}: Props) => {
	return (
		<div className="flex w-full items-center justify-between px-14 mobile:flex-col mobile:items-start mobile:justify-start">
			<SelectFilter
				value={region}
				setValue={setRegion}
				defaultValue="Region"
				options={[]}
				title="showing"
			/>
			<SelectFilter
				value={zones}
				setValue={setZones}
				defaultValue="Availability zones"
				options={[]}
				title="showing"
			/>
			<SelectFilter
				value={pricing}
				setValue={setPricing}
				defaultValue="Pricing"
				options={[]}
				title="showing"
			/>
		</div>
	);
};
export default ChartFilter;
