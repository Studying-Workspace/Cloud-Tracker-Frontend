import NotificationItem from "../Features/DashBoard/NotificationItem";

const Notifications = ()=>{

	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<NotificationItem instanceName="instance Name" priceOnDemand="50" priceReservedInstance="30"/>
			<NotificationItem instanceName="instance Name" priceOnDemand="50" priceReservedInstance="30"/>
			<NotificationItem instanceName="instance Name" priceOnDemand="50" priceReservedInstance="30"/>
			<NotificationItem instanceName="instance Name" priceOnDemand="50" priceReservedInstance="30"/>
		</div>
	);
}

export default Notifications ;
