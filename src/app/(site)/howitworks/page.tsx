import TimelineComponent from "@/components/howitworks/Timeline";
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-4 py-[100px]">
      <div className="text-center space-y-4">
        <h2 className="uppercase text-lg font-medium"> Features</h2>
        <p className="text-4xl md:text-5xl font-bold capitalize ">
          Checkout our Benefits <br /> and Features
        </p>
      </div>

      <div>
        <TimelineComponent />
      </div>
    </section>
  );
};

export default HowItWorksSection;
