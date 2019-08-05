export const primitives = {
    color: {
        brand: "#B133FF",
        lightBrand: "#DA9EFF",
        tint: "#F3F3F3",
        dark: "#272329",
    },
    transitions: {
        default: {
            type: "tween",
            duration: 0.48,
            ease: "easeOut"
        },
        default2: {
            top: {
                times: [0, 0.7, 1],
                ease: ["easeOut","easeIn"]
            },
            default: {
                type: "tween",
                duration: 0.48,
                ease: "easeOut",
            },
        },
        fast: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut"
        },
        flash: {
            type: "tween",
            duration: 0,
            ease: "easeOut",
        },
        slow: {
            type: "tween",
            duration: 2,
            ease: "easeOut",
        },
        delay: (i) => ({
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.56 + i * 0.16,
        }),
        delyedBit: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.48,
        },
        delyed: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.64,
        },
        delyedMore: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.8,
        },
    }
}
