import { Features } from "@/utils/constant";
import React from "react";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-4 py-[100px]">
      <h2 className="uppercase text-lg font-medium"> Features</h2>
      <p className="text-4xl md:text-5xl font-bold capitalize text-center">
        Checkout our Benefits <br /> and Features
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 mx-auto">
        {Features.map((feature, index) => (
          <FeaturesCard
            key={index}
            title={feature.label}
            desc={feature.desc}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
