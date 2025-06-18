"use client";

import Noise from "./Animations/Noise/Noise";

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1]">
            <Noise/>

        </div>
    );
}
