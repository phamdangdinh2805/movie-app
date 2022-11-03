import React from "react";
import { Spin } from "react-cssfx-loading";
import "./loading.css";

const Loading = () => {
  return (
    <div className="ovelay">
      <Spin />
    </div>
  );
};

export default Loading;
