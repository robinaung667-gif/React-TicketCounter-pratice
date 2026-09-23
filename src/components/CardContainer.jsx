import React from "react";

const CardContainer = ({ children, title }) => {
  return (
    <div className="w-full pl-10 py-5">
      <h2 className="text-[1.05rem] font-medium text-white mb-3">{title}</h2>
      {children}
    </div>
  );
};

export default CardContainer;
