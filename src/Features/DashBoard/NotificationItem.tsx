import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import notificationImg from "../../assets/notificationImg.png";
import { useState } from "react";
import NotificationDetails from "./NotificationDetails";
import { NotificationItemProps } from "./notification-types";

const NotificationItem = ({ instanceInfo }: NotificationItemProps) => {
  const { instance: usedInstance, ridtos: RIList } = instanceInfo;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="w-[80%] space-y-4 mobile:w-full tablet:w-full">
      {/* Notification Item */}
      <div className="flex flex-col rounded-xl bg-white px-20 py-4 shadow-lg mobile:px-4 tablet:px-8">
        <div className="flex items-center justify-between mobile:gap-8">
          <img
            src={notificationImg}
            className="mobile:h-16 mobile:w-16 tablet:h-24 tablet:w-24"
            alt="img"
          />
          <div className="flex w-[80%] flex-col">
            <p
              className="text-2xl font-bold tracking-widest mobile:text-lg mobile:tracking-wider"
              data-testid="title"
            >
              {usedInstance.instanceType}
            </p>
            <p
              className="w-[70%] text-xl mobile:w-full mobile:text-xs"
              data-testid="description"
            >
              {`The current instance running on ${usedInstance.os} in the ${usedInstance.region} costs ${usedInstance.cost} USD Let's
              explore alternatives with Reserved Instances to optimize costs.`}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowDetails((e) => !e)}
          className="flex items-center gap-2 self-end font-semibold text-linearBlue-1 mobile:text-xs"
        >
          Show Options{" "}
          <span className="text-2xl">
            {showDetails ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </button>
      </div>

      {/* Notification Detail */}
      {showDetails && <NotificationDetails RIList={RIList} />}
    </div>
  );
};
export default NotificationItem;
