import React from "react";
const Loading = ({ theme }) => {
  return (
    <div className="text-center">
      <div className={`loadnig spinner-border ${theme || "text-blue-600"}`}></div>
    </div>
  );
};
export default Loading;
