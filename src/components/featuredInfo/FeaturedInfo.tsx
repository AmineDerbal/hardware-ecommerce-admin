import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
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
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 mx-[20px] p-[30px] rounded-[10px] cursor-pointer shadow-lg">
        <span className="text-[20px]">Revanue</span>
        <div className="my-[10px] flex items-center">
          <span className="text-[30px] font-semibold">${income[1]?.total}</span>
          <span className="flex items-center ml-[20px]">
            %{Math.floor(perc)}{' '}
            {perc < 0 ? (
              <ArrowDownward className="text-[14px] ml-[5px] negative" />
            ) : (
              <ArrowUpward className="text-[14px] ml-[5px]" />
            )}
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
      <div className="flex-1 mx-[20px] p-[30px] rounded-[10px] cursor-pointer shadow-lg">
        <span className="text-[20px]">Sales</span>
        <div className="my-[10px] flex items-center">
          <span className="text-[30px] font-semibold">$4,415</span>
          <span className="flex items-center ml-[20px]">
            -1.4 <ArrowDownward className="text-[14px] ml-[5px] negative" />
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
      <div className="flex-1 mx-[20px] p-[30px] rounded-[10px] cursor-pointer shadow-lg">
        <span className="text-[20px]">Cost</span>
        <div className="my-[10px] flex items-center">
          <span className="text-[30px] font-semibold">$2,225</span>
          <span className="flex items-center ml-[20px]">
            +2.4 <ArrowUpward className="text-[14px] ml-[5px]" />
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
