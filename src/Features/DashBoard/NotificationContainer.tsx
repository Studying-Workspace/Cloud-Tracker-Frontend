import Spinner from "../../ui/Spinner";
import NotificationItem from "./NotificationItem"
import useGetOfferingsData from "./useGetOfferingsData"

const NotificationsContainer = () => {
    const {OfferingsData, isLoading} = useGetOfferingsData();
    if(isLoading)
        return <Spinner/>;
    console.log(OfferingsData);
    return (	
    <div className="flex flex-col justify-center items-center gap-8 " data-testid="NotificationPage">
        {OfferingsData.map((instances:Object, index:number) => <NotificationItem instances={instances} key={index}/>)};
    </div>
)
}

export default NotificationsContainer;