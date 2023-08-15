import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = ({ color, stroke, width, delay, visible, ...props }) => {
  return (
    <RotatingLines
      {...props}
      strokeColor={color || "gray"}
      strokeWidth={stroke || "2"}
      animationDuration={delay || "0.75"}
      width={width || "30"}
      visible={visible || true}
    />
  );
};

export default Loading;
