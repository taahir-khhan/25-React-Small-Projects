import React, { useEffect, useState } from "react";

function Accordion() {
  const [displayState, setDisplayState] = useState(null);

  useEffect(() => {
    setDisplayState("hidden");
  }, [displayState]);

  return (
    <div
      className="bg-orange-500 text-white py-4 px-2 w-[600px]"
      onClick={() => setDisplayState("block")}
    >
      <p className="font-medium text-xl">What are Accordion ?</p>
      <p className={`text-gray-300 ${displayState}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        voluptates itaque laboriosam, quibusdam impedit temporibus nam amet
        aperiam eum harum.
      </p>
    </div>
  );
}

export default Accordion;
