"use client";

import { useTheme } from 'next-themes'
import Silk from "@/components/Silk";

export default function Silkw() {
    let { theme } = useTheme()

    if (!theme) theme = 'dark'

    return (
        <>
            {theme === 'dark' ? (
                <Silk
                    speed={5}
                    scale={1}
                    color="#a357eb"
                    bgColor="#000000"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            ) : (
                <Silk
                    speed={5}
                    scale={1}
                    color="#FFFFFF"
                    bgColor="#c488fc"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            )}
        </>
    )
}