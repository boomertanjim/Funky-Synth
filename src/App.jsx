import { useState } from "react";
import Indicator from "./components/Indicator";
import Piano from "./components/Piano";
import Knobs from "./components/Knobs";
import Arrow from "./components/Arrow";

const App = () => {
  const [knobControl, setKnobControl] = useState({
    "Volume 0": 20,
    "Volume 1": 0,
  });

  const handleKnobControl = (key, val) => {
    setKnobControl((prev) => ({
      ...prev,
      [key]: val,
    }));
    console.log(key, val);
  };
  return (
    <div className="w-screen h-screen bg-sky-400 py-[10vh] px-[5vw]">
      <div className="w-full h-full bg-green-500 grid grid-rows-8">
        <div className="row-span-4 grid grid-cols-8">
          <div className="col-span-5 flex gap-3 items-center justify-center bg-red-400 m-8">
            {Object.entries(knobControl).map(([key, val]) => (
              <Knobs
                key={key}
                title={key}
                val={val}
                onChange={handleKnobControl}
              />
            ))}
          </div>
          <Arrow />
        </div>
        <Indicator />
        <Piano />
      </div>
    </div>
  );
};

export default App;
