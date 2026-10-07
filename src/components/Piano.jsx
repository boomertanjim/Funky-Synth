const whiteKeys = Array.from({ length: 9 }, (_, index) => index + 1);
const blackKeys = [0, 1, 3, 4, 5, 7];

const Piano = () => {
  return (
    <div className="w-full h-full row-span-3 flex items-center justify-center overflow-x-auto">
      <div className="relative flex w-max">
        {whiteKeys.map((key) => (
          <button
            key={key}
            className="relative w-12 h-45 rounded-b-md border border-gray-400 bg-white active:bg-gray-200"
          ></button>
        ))}
        {blackKeys.map((key) => (
          <button
            key={key}
            style={{ left: `${28 + key * 48}px` }}
            className="absolute top-0 z-10 w-10 h-28 rounded-b-md bg-black shadow-md active:bg-gray-800"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Piano;
