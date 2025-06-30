import React, { useContext } from "react";
import Button from "./Button";
import { UserContext } from "../context/Context";

function Buttons() {
  const { btn } = useContext(UserContext);

  return (
    <div className="m-auto w-2/3 bg-gray-200 p-6 flex flex-wrap gap-10 justify-center content-center">
      {btn.map((ele, idx) => (
        <Button key={idx} data={ele} />
      ))}
    </div>
  );
}

export default Buttons;
