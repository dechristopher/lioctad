type BGColors = keyof typeof bgColors;
type BGIntensities = keyof typeof bgColors[BGColors];
export type BackGroundColors = typeof bgColors[BGColors][BGIntensities];

type TColors = keyof typeof bgColors;
type TIntensities = keyof typeof bgColors[TColors];
export type TextColors = typeof textColors[TColors][TIntensities];

type BColors = keyof typeof bgColors;
type BIntensities = keyof typeof bgColors[BColors];
export type BorderColors = typeof borderColors[BColors][BIntensities];

export const bgColors = {
    green: {
        100: "bg-green-100",
        200: "bg-green-200",
        300: "bg-green-300",
        400: "bg-green-400",
        500: "bg-green-500",
        600: "bg-green-600",
        700: "bg-green-700",
        800: "bg-green-800",
        900: "bg-green-900",
        1000: "bg-green-1000",
    },
    yellow: {
        100: "bg-yellow-100",
        200: "bg-yellow-200",
        300: "bg-yellow-300",
        400: "bg-yellow-400",
        500: "bg-yellow-500",
        600: "bg-yellow-600",
        700: "bg-yellow-700",
        800: "bg-yellow-800",
        900: "bg-yellow-900",
        1000: "bg-yellow-1000",
    },
    gray: {
        100: "bg-gray-100",
        200: "bg-gray-200",
        300: "bg-gray-300",
        400: "bg-gray-400",
        500: "bg-gray-500",
        600: "bg-gray-600",
        700: "bg-gray-700",
        800: "bg-gray-800",
        900: "bg-gray-900",
        1000: "bg-gray-1000",
    }
}

export const textColors = {
    green: {
        100: "text-green-100",
        200: "text-green-200",
        300: "text-green-300",
        400: "text-green-400",
        500: "text-green-500",
        600: "text-green-600",
        700: "text-green-700",
        800: "text-green-800",
        900: "text-green-900",
        1000: "text-green-1000",
    },
    yellow: {
        100: "text-yellow-100",
        200: "text-yellow-200",
        300: "text-yellow-300",
        400: "text-yellow-400",
        500: "text-yellow-500",
        600: "text-yellow-600",
        700: "text-yellow-700",
        800: "text-yellow-800",
        900: "text-yellow-900",
        1000: "text-yellow-1000",
    },
    gray: {
        100: "text-gray-100",
        200: "text-gray-200",
        300: "text-gray-300",
        400: "text-gray-400",
        500: "text-gray-500",
        600: "text-gray-600",
        700: "text-gray-700",
        800: "text-gray-800",
        900: "text-gray-900",
        1000: "text-gray-1000",
    },
    white: {
        100: "text-white-100",
        200: "text-white-200",
        300: "text-white-300",
        400: "text-white-400",
        500: "text-white-500",
        600: "text-white-600",
        700: "text-white-700",
        800: "text-white-800",
        900: "text-white-900",
        1000: "text-white-1000",
    },
    black: {
        100: "text-black-100",
        200: "text-black-200",
        300: "text-black-300",
        400: "text-black-400",
        500: "text-black-500",
        600: "text-black-600",
        700: "text-black-700",
        800: "text-black-800",
        900: "text-black-900",
        1000: "text-black-1000",
    }
}

export const borderColors = {
    green: {
        100: "border-green-100",
        200: "border-green-200",
        300: "border-green-300",
        400: "border-green-400",
        500: "border-green-500",
        600: "border-green-600",
        700: "border-green-700",
        800: "border-green-800",
        900: "border-green-900",
        1000: "border-green-1000",
    },
    yellow: {
        100: "border-yellow-100",
        200: "border-yellow-200",
        300: "border-yellow-300",
        400: "border-yellow-400",
        500: "border-yellow-500",
        600: "border-yellow-600",
        700: "border-yellow-700",
        800: "border-yellow-800",
        900: "border-yellow-900",
        1000: "border-yellow-1000",
    },
    gray: {
        100: "border-gray-100",
        200: "border-gray-200",
        300: "border-gray-300",
        400: "border-gray-400",
        500: "border-gray-500",
        600: "border-gray-600",
        700: "border-gray-700",
        800: "border-gray-800",
        900: "border-gray-900",
        1000: "border-gray-1000",
    }
}