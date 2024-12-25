import { FC } from "react";
import { Reel } from "./Reel";
import { PlayerStatus } from "../pages/Player";

interface CassetteProps {
    currentState: PlayerStatus;
    setCurrentState: (newState: PlayerStatus) => void;
}

export const Cassette: FC<CassetteProps> = (
    { currentState } // Destructure props directly
) => {
    return (
        <div className="my-8 w-96 h-52 place-self-center justify-center bg-slate-200 rounded-md">
            <div className="flex flex-row justify-center gap-28 mt-16">
                <Reel currentState={currentState} reelNumber={1} />
                <Reel currentState={currentState} reelNumber={2} />
            </div>
        </div>
    );
};

// Rest of your Reel component remains the same