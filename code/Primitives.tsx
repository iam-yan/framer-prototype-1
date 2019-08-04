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
        delyed: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.48,
        },
        delyedMore: {
            type: "tween",
            duration: 0.32,
            ease: "easeOut",
            delay: 0.64,
        },
        flash:{
            type: "tween",
            duration: 0,
            ease: "easeOut",
        },
        slow:{
            type: "tween",
            duration: 2,
            ease: "easeOut",
        }
    }
}
