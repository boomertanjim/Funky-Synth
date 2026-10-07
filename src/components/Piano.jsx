const whiteKeys = Array.from({ length: 10 }, (_, i) => i + 1);
const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5"];
const blackKeys = [0, 1, 3, 4, 5, 7, 8];

const Piano = () => {
  return (
    <div className="w-full h-full row-span-3 flex items-center justify-center overflow-x-auto">
      <div className="relative flex w-max">
        {whiteKeys.map((key) => (
          <button
            key={key}
            className="relative flex items-end justify-center w-12 h-45 rounded-b-md border border-gray-400 bg-white active:bg-gray-200"
          >
            {whiteNotes[key - 1]}
          </button>
        ))}
        {blackKeys.map((key, j) => (
          <button
            key={key}
            style={{ left: `${28 + key * 48}px` }}
            className="absolute flex items-end justify-center text-white top-0 z-10 w-10 h-28 rounded-b-md bg-black shadow-md active:bg-gray-800"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Piano;
