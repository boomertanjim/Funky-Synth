const indicators = Array.from({ length: 16 }, (_, i) => i + 1);

const Indicator = () => {
  return (
    <div className="w-full h-full row-span-1 flex justify-center gap-3">
      {indicators.map((i) => (
        <div key={i} className="w-13 h-3 bg-gray-800 rounded-xs"></div>
      ))}
    </div>
  );
};

export default Indicator;
