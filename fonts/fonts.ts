import { JetBrains_Mono } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";

export const jetbrains_400weight = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
});

export const jetbrains_800weight = JetBrains_Mono({
    weight: "800",
    subsets: ["latin"],
});

export const space_400weight = Space_Mono({
    weight: "400",
    subsets: ["latin"],
});

export const space_700weight = Space_Mono({
    weight: "700",
    subsets: ["latin"],
});


export const space_700weight_italic = Space_Mono({
    weight: "700",
    style: 'italic',
    subsets: ["latin"],
});

//i changed this, too lazy to change the other stuff
// k bowser

export const open_sans_400weight = Open_Sans({
    weight: "400",
    subsets: ["latin"],
});

export const open_sans_700weight = Open_Sans({
    weight: "700",
    subsets: ["latin"],
});


export const open_sans_700weight_italic = Open_Sans({
    weight: "700",
    style: 'italic',
    subsets: ["latin"],
});
