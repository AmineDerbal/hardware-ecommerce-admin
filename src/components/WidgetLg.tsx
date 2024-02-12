import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

const WidgetLg = () => {
  interface Order {
    _id: string;
    userId: string;
    createdAt: string; // or Date, depending on the format from the API
    amount: number;
    status: string;
  }
  const [orders, setOrders] = useState<Order[]>([]);
  const persistRoot = localStorage.getItem('persist:root');
  let tokenString: string;
  const userString = JSON.parse(persistRoot as string);
  const user = JSON.parse(userString);
  tokenString = user.accessToken;
  const userRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { token: `Bearer ${tokenString}` },
  });
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
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
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
