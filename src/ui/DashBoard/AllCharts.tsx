import { useNavigate } from "react-router-dom";
import ColumnChart from "../../Features/DashBoard/ColumnChart";
import LineChart from "../../Features/DashBoard/LineChart";
import PieChart from "../../Features/DashBoard/PieChart";
import useIamRoles from "../../Features/DashBoard/useIamRoles";
import { useEffect, useState } from "react";
import SelectFilter from "./SelectFilter";
import Spinner from "../Spinner";
import { useUserContext } from "../../context/UserProvider";
import useGetBillingData from "../../Features/DashBoard/useGetBillingData";


const AllCharts = () => {
	const {isLoading:billingDataLoading} = useGetBillingData();
	const navigate = useNavigate();
	const { IamRoles, isLoading:IamRolesLoading } = useIamRoles();
	const [iamRolesName, setIAMRoleName] = useState<string[]>([]);
	const {selectedRole , setSelectedRole} = useUserContext() ;
	useEffect(() => {
		if (IamRolesLoading) return;
		let handleIamRoles: string[] = [];
		IamRoles?.map((role: any) => handleIamRoles.push(role?.arn));
		setIAMRoleName(handleIamRoles);
		setSelectedRole(handleIamRoles[0]);
	}, [IamRoles, IamRolesLoading]);
	if (IamRolesLoading || billingDataLoading) return <Spinner />;

	return (
		<div>
			<SelectFilter
				value={selectedRole}
				setValue={setSelectedRole}
				options={iamRolesName}
				defaultValue={iamRolesName?.[0]}
			/>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-4 mobile:flex  mobile:flex-col mobile:gap-4 mobile:overflow-y-auto mobile:overflow-x-hidden tablet:flex tablet:flex-col tablet:gap-4 tablet:overflow-y-auto tablet:overflow-x-hidden">
				<div
					className="col-span-2 w-full self-center tablet:col-span-1"
					onClick={() => navigate("lineChart")}
				>
					<LineChart type="mini" />
				</div>
				<div onClick={() => navigate("columnChart")}>
					<ColumnChart type="mini" />
				</div>
				<div onClick={() => navigate("pieChart ")}>
					<PieChart type="mini" />
				</div>
			</div>
		</div>
	);
};
export default AllCharts;
