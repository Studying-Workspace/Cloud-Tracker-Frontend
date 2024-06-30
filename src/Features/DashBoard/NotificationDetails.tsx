import { NotificationDetailsProps } from "./notification-types";
import { convertSecondsToMonths } from "../../utils/helper";

const NotificationDetails = ({ RIList }: NotificationDetailsProps) => {
  return (
    <table className="w-full table-auto mobile:text-xs" data-testid="table">
      <tbody>
        <tr className="bg-linearBlue-1 font-semibold text-white">
          <td className="py-2 text-center">Instance Type</td>
          <td className="py-2 text-center">OS</td>
          <td className="py-2 text-center">Price</td>
          <td className="py-2 text-center">Duration</td>
        </tr>

        {RIList.map((RI) => (
          <tr className="border border-linearBlue-1 font-semibold text-black">
            <td className="py-2 text-center">{RI.instanceType}</td>
            <td className="py-2 text-center">{RI.os}</td>
            <td className="py-2 text-center">{RI.price}</td>
            <td className="py-2 text-center">{convertSecondsToMonths(RI.duration).toFixed(1)} months</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotificationDetails;
