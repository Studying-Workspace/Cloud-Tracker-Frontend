import Spinner from "../../ui/Spinner";
import NotificationItem from "./NotificationItem";
import useGetOfferingsData from "./useGetOfferingsData";
import { InstanceInfoInterface } from "./notification-types";

const NotificationsContainer = () => {
  const { offeringsData, isLoading } = useGetOfferingsData();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div
      className="flex flex-col items-center justify-center gap-8"
    >
      {offeringsData.map((instance: InstanceInfoInterface, index: number) => (
        <NotificationItem
          instanceInfo={instance}
          key={index}
        />
      ))}
    </div>
  );
};

export default NotificationsContainer;
