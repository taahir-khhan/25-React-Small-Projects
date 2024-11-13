import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  const randomHexColorGenerator = () => {
    const colorCode = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 1; i <= 6; i++) {
      randomColor += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    setColor(randomColor);
  };

  const randomRGBColorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      randomHexColorGenerator();
    } else {
      randomRGBColorGenerator();
    }
  }, [typeOfColor]);

  return (
    <div className="wrapper">
      <div>
        <button
          className="py-2 px-4 mx-2 bg-yellow-500 rounded-lg text-white font-medium "
          onClick={() => setTypeOfColor("hex")}
        >
          Generate Hex Code Color
        </button>

        <button
          className="py-2 px-4 mx-2 bg-orange-500 rounded-lg text-white font-medium "
          onClick={() => setTypeOfColor("rgb")}
        >
          Generate RGB Code Color
        </button>

        <button
          className="py-2 px-4 mx-2 bg-indigo-500 rounded-lg text-white font-medium"
          onClick={() =>
            typeOfColor === "hex"
              ? randomHexColorGenerator()
              : randomRGBColorGenerator()
          }
        >
          Generate Color
        </button>
      </div>
      {
        <div
          className="w-full h-[50vh] mt-5 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <span className="text-xl text-white">{color}</span>
        </div>
      }
    </div>
  );
}

export default RandomColor;
