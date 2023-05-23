"use client";

import React from "react";
// import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from "antd";
import { AiFillPlusCircle, AiFillProfile } from "react-icons/ai";
import { BiMoney, BiSelection } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import TimelineItem from "./TimelineItem";
const TimelineComponent: React.FC = () => (
  <Timeline
    mode="left"
    className="w-5/6 mx-auto"
    items={[
      {
        label: "",
        dot: <AiFillPlusCircle size={35} className="text-red-500 " />,
        children: (
          <TimelineItem
            label="Create your account"
            desc="Start by opening an account with us with your basic details and information then we will refirect you to the dashboard automatically
        "
          />
        ),
      },
      {
        dot: <AiFillProfile size={35} className="text-red-500 " />,

        children: (
          <TimelineItem
            label="Login into your account"
            desc="Once you open an account with us, you get logged in automatically into your account and you can begin creating your giftcards"
          />
        ),
      },
      {
        dot: <BiSelection size={35} className="text-red-500 " />,
        children: (
          <TimelineItem
            label="Choose your design or gift-card type"
            desc="Once you login into your account, select the type of giftcard you want to create and customize it"
          />
        ),
      },
      {
        dot: <BiMoney size={35} className="text-red-500 " />,
        children: (
          <TimelineItem
            label="Make the Payment"
            desc="Once you are done with customizing your giftcard to your liking and then it is time to make the payment for the giftcard"
          />
        ),
      },
      {
        dot: <BsPeople size={35} />,

        children: (
          <TimelineItem
            label="Enter the receiver details"
            desc="Once you have made the payment and it is successful, then you will be redirected to a page to enter the details of the receiver or you can choose to send it to your email instead "
          />
        ),
      },
    ]}
  />
);

export default TimelineComponent;
