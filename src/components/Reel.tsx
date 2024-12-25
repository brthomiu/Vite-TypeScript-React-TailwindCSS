import { FC, useEffect, useState, useRef } from "react";
import { PlayerStatus } from "../pages/Player";

interface ReelProps {
  currentState: PlayerStatus;
  reelNumber: number;
}

export const Reel: FC<ReelProps> = (reelProps) => {
  const { currentState, reelNumber, speedMultiplier } = reelProps;
  const [rotation, setRotation] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (currentState === "on") {
        setRotation((prevRotation) => (prevRotation + speedMultiplier) % 360);
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (currentState === "on") {
      animate(); // Start the animation only when currentState is "on"
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [currentState, speedMultiplier]);

  return (
    <div>
      {reelNumber.toString()}
      <div style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="w-16 h-16 place-content-center rounded-full bg-black">
          <div className="ml-2 w-12 h-12 place-self-center rounded-full bg-slate-200"></div>
          <div className="bg-black w-2 h-2 absolute ml-7 -translate-y-[6px]"></div>
          <div className="bg-black w-2 h-2 absolute ml-7 -translate-y-[50px]"></div>
          <div className="bg-black w-2 h-2 absolute ml-[5px] -translate-y-[28px]"></div>
          <div className="bg-black w-2 h-2 absolute ml-[50px] -translate-y-[28px]"></div>
          <div className="rotate-45 translate-x-[-17px] translate-y-[-8px]">
            <div className="bg-black w-2 h-2 absolute ml-7 -translate-y-[6px]"></div>
            <div className="bg-black w-2 h-2 absolute ml-7 -translate-y-[50px]"></div>
            <div className="bg-black w-2 h-2 absolute ml-[5px] -translate-y-[28px]"></div>
            <div className="bg-black w-2 h-2 absolute ml-[50px] -translate-y-[28px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
