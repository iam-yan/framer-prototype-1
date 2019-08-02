import { Data, animate, Animatable, Override } from "framer"

const colors = {
    enable: "#FF6888",
    disable: "#463D61",
}
const scales = {
    mid: 0.9,
    small: 0.7,
}
const shadows = {
    light: "0px 8px 32px rgba(255, 41, 87, 0.48)",
    dark: "0px 8px 32px rgba(70, 61, 98, 0.48)",
}

const data = Data({
    color: colors.enable,
    toggleColor: "white",
    isEnable: true,
    transX: 0,
    cardScale: 1,
    shadow: shadows.light,
})

export function TapToggle(): Override {
    return {
        onTap: () => {
            data.isEnable = !data.isEnable
            data.color = data.isEnable ? colors.enable : colors.disable
            data.transX = data.isEnable ? 0 : 32
            data.shadow = data.isEnable ? shadows.light : shadows.dark
            data.toggleColor = data.isEnable ? "white" : colors.disable
        },
    }
}

export function Card(): Override {
    return {
        animate: {
            background: data.color,
            boxShadow: data.shadow,
        },
    }
}

export function AniToggle(): Override {
    return {
        animate: {
            x: data.transX,
            background: data.toggleColor,
        },
        transition: {
            ease: "easeOut",
            duration: 0.24,
        },
    }
}
