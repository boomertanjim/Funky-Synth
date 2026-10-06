import Indicator from "./components/Indicator";
import Piano from "./components/Piano";
import Knobs from "./components/Knobs";
import Arrow from "./components/Arrow";

const App = () => {
  return (
    <div className="w-screen h-screen bg-sky-400 py-[10vh] px-[5vw]">
      <div className="w-full h-full bg-green-500 grid grid-rows-8">
        <div className="row-span-4">
          <Knobs />
          <Arrow />
        </div>
        <div className="row-span-1">
          <Indicator />
        </div>
        <div className="row-span-3">
          <Piano />
        </div>
      </div>
    </div>
  );
};

export default App;
