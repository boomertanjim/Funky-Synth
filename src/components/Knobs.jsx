import { useState, useRef } from "react";

const Knobs = ({ title, val, onChange }) => {
  const [value, setValue] = useState(val);
  const dragging = useRef(false);
  const startY = useRef(0);
  const startVal = useRef(0);
  const knob = useRef(0);

  const totalTicks = 11;
  const ang = 135;
  const currentAng = -ang + (value / 100) * (2 * ang);

  const mouseDown = (i) => {
    dragging.current = true;
    startY.current = i.clientY;
    startVal.current = value;
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (i) => {
    if (!dragging.current) return;
    const deltaY = startY.current - i.clientY;
    const newVal = Math.min(100, Math.max(0, startVal.current + deltaY));
    const currentAng = ang + (newVal / 100) * (ang * 2);
    onChange(title, newVal);

    if (knob.current) {
      knob.current.style.transform = `rotate(${currentAng}deg)`;
    }
    setValue(newVal);
  };

  const mouseUp = () => {
    dragging.current = false;
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <div
        className="relative w-16 h-16 flex items-center justify-center cursor-pointer select-none"
        onMouseDown={mouseDown}
      >
        {Array.from({ length: totalTicks }).map((_, i) => {
          const tickAng = -ang + (i / (totalTicks - 1)) * 2 * ang;
          const active = tickAng <= currentAng;

          return (
            <div
              key={i}
              className="absolute w-1 h-full flex justify-center"
              style={{ transform: `rotate(${tickAng}deg)` }}
            >
              <div
                className={`w-1 h-2.5 rounded-full transition-colors duration-150 ${
                  active
                    ? "bg-white shadow-[0_0_6px_rgba(255, 255, 255, 0.8)]"
                    : "bg-gray-400 opacity-40"
                }`}
              ></div>
            </div>
          );
        })}
        <div
          className="w-9 h-9 bg-[#3a3a3a] rounded-full border border-gray-600 hadow-lg flex items-center justify-center transition-transform"
          style={{ transform: `rotate(${currentAng}deg)` }}
        >
          <div className="absolute top-0.5 w-0.75 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      <span className="text-xs">{title}</span>
    </div>
  );
};

export default Knobs;
