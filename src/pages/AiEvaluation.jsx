import React from "react";

const AiEvaluation = () => {
  return (
    <div className="flex flex-col gap-4 mx-4 my-4 h-screen">
      <div className="rounded-xl shadow-md border border-gray-200 flex-grow flex justify-center items-center px-6">
        <p
          className="text-7xl font-semibold text-purple-900 ml-16"
          style={{
            textShadow:
              "4px 4px 6px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.5)",
          }}
        >
          This is AI Evaluation Page. Click on "Dashboard Tab"
        </p>
      </div>
    </div>
  );
};

export default AiEvaluation;
