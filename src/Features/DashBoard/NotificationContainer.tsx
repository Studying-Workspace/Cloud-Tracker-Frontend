import Spinner from "../../ui/Spinner";
import NotificationItem from "./NotificationItem";
import useGetOfferingsData from "./useGetOfferingsData";
import { instanceInfoInterface } from "./notification-types";

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
      {offeringsData.map((instance: instanceInfoInterface, index: number) => (
        <NotificationItem
          instanceInfo={instance}
          key={index}
        />
      ))}
    </div>
  );
};

export default NotificationsContainer;
