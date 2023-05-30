import { Clickable } from "@/components/create/StepComponent";
import React from "react";

const Create = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col h-screen items-center justify-center">
      <div className="w-full">
        <Clickable variant="circles" />
      </div>
    </div>
  );
};

export default Create;
