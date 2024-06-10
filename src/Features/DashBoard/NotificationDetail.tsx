import { duration } from "@mui/material";

const NotificationDetail = () => {
	const mockData = [
		{
			name: "a1.2xlarge",
			id: "i-0abcd1234efgh5679",
			price: "$40.0",
			duration: "3 months",
		},
		{
			name: "a1.2xlarge",
			id: "i-0abcd1234efgh5679",
			price: "$40.0",
			duration: "3 months",
		},
		{
			name: "a1.2xlarge",
			id: "i-0abcd1234efgh5679",
			price: "$40.0",
			duration: "3 months",
		},
		{
			name: "a1.2xlarge",
			id: "i-0abcd1234efgh5679",
			price: "$40.0",
			duration: "3 months",
		},
	];

	return (
		<table className="w-full table-auto mobile:text-xs">
			<tbody>
				<tr className="bg-linearBlue-1 font-semibold text-white">
					<td className="text-center py-2">Instance Type</td>
					<td className="text-center py-2">Instance ID</td>
					<td className="text-center py-2">Price</td>
					<td className="text-center py-2">Duration</td>
				</tr>
				{mockData.map((instance) => (
					<tr className="border border-linearBlue-1 font-semibold text-black">
						<td className="text-center py-2">{instance.name}</td>
						<td className="text-center py-2">{instance.id}</td>
						<td className="text-center py-2">{instance.price}</td>
						<td className="text-center py-2">{instance.duration}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default NotificationDetail;
