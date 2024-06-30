import Spinner from "../../ui/Spinner";
import NotificationItem from "./NotificationItem";
import useGetOfferingsData from "./useGetOfferingsData";

const NotificationsContainer = () => {
  const { offeringsData, isLoading } = useGetOfferingsData();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div
      className="flex flex-col items-center justify-center gap-8"
      data-testid="NotificationPage"
    >
      {offeringsData.map((instances: Object, index: number) => (
        <NotificationItem instances={instances} key={index} />
      ))}
    </div>
  );
};

export default NotificationsContainer;
