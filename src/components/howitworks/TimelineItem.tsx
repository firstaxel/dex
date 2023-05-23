import React from "react";

type Props = {
  label: string;
  desc: string;
};

const TimelineItem = ({ desc, label }: Props) => {
  return (
    <div className=" pl-5 text-start space-y-4 flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold capitalize">{label}</h3>
      <p className="text-sm md:text-md capitalize ">{desc}</p>
    </div>
  );
};

export default TimelineItem;
