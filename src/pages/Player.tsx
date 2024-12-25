import { FC, useState } from "react";
import { Cassette } from "../components/Cassette";

export type PlayerStatus = "off" | "on" | "rewind" | "ff";

export const Player: FC = () => {
    const [currentState, setCurrentState] = useState<PlayerStatus>("on");

    return (
        <div className="flex flex-col justify-center mt-4">
            <div className="flex flex-col justify-center place-self-center w-[500px] bg-slate-600">
                <h1 className="place-self-center font-bold mt-4">Cassette Player</h1>
                <Cassette currentState={currentState} setCurrentState={setCurrentState} />
            </div>
        </div>
    );
};