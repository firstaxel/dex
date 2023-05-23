import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  desc: string;
  icon: IconType;
};

const FeaturesCard = ({ title, desc, icon: Icon }: Props) => {
  return (
    <div className="group flex flex-col items-center justify-center text-center space-y-4 h-[200px] shadow-md shadow-black/20 rounded-xl  hover:bg-red-500 hover:text-white transition-colors duration-150 ease-in">
      <Icon size={35} className="text-red-500 group-hover:text-white" />
      <h3 className="text-lg font-semibold capitalize">{title}</h3>
      <p className="w-5/6 mx-auto text-sm ">{desc}</p>
    </div>
  );
};

export default FeaturesCard;
