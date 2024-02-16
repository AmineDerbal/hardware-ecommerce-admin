import { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { userRequest } from '../constants';

const WidgetLg = () => {
  interface Order {
    _id: string;
    userId: string;
    createdAt: string; // or Date, depending on the format from the API
    amount: number;
    status: string;
  }
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  });
  const Button = ({ type }: any) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="text-[22px] font-semibold">Latest transactions</h3>
      <table className="w-full">
        <tr className="widgetLgTr">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        {orders.map((order) => (
          <tr
            className="widgetLgTr"
            key={order._id}
          >
            <td className="flex items-center font-semibold">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="font-light">{format(order.createdAt)}</td>
            <td className="font-light">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
