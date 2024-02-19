import React from 'react';
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-fit bg-gray-100 sticky mt-[50px]">
      <div className="p-[20px] text-[#555]">
        <div className="mb-[10px]">
          <h3 className="text-xs text-gray-500">Dashboard</h3>
          <ul className="list-none p-[5px]">
            <Link
              to="/"
              className="link"
            >
              <li className="p-[5px] cursor-pointer flex items-center rounded-[10px] active">
                <LineStyle className="mr-[5px] text-[20px]" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-xs text-gray-500">Quick Menu</h3>
          <ul className="list-none p-[5px]">
            <Link
              to="/users"
              className="link"
            >
              <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
                <PermIdentity className="mr-[5px] text-[20px]" />
                Users
              </li>
            </Link>
            <Link
              to="/products"
              className="link"
            >
              <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
                <Storefront className="mr-[5px] text-[20px]" />
                Products
              </li>
            </Link>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <AttachMoney className="mr-[5px] text-[20px]" />
              Transactions
            </li>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <BarChart className="mr-[5px] text-[20px]" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-xs text-gray-500">Notifications</h3>
          <ul className="list-none p-[5px]">
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <MailOutline className="mr-[5px] text-[20px]" />
              Mail
            </li>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <DynamicFeed className="mr-[5px] text-[20px]" />
              Feedback
            </li>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <ChatBubbleOutline className="mr-[5px] text-[20px]" />
              Messages
            </li>
          </ul>
        </div>
        <div className="mb-[10px]">
          <h3 className="text-xs text-gray-500">Staff</h3>
          <ul className="list-none p-[5px]">
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <WorkOutline className="mr-[5px] text-[20px]" />
              Manage
            </li>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <Timeline className="mr-[5px] text-[20px]" />
              Analytics
            </li>
            <li className="p-[5px] cursor-pointer flex items-center rounded-[10px]">
              <Report className="mr-[5px] text-[20px]" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
