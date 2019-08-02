import * as React from "react"
import { addPropertyControls, ControlType, Frame, useCycle } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ItemCard() {
    const [twist, cycle] = useCycle(
        { scale: 0.5, rotate: 0 },
        { scale: 1, rotate: 90 }
    )

    return <Frame animate={twist} onTap={() => cycle()} size={"100%"} />
}

const config = () => {}

addPropertyControls(ItemCard, {
    Photo: {
        type: ControlType.Image,
    },
    ProductH: {
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        unit: "px",
        step: 0.1,
        displayStepper: true,
    },
    Name: {
        type: ControlType.String,
        defaultValue: "Product Name",
        // placeholder: "Type something…",
    },
    Price: {
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        unit: "USD",
        step: 1,
        displayStepper: true,
    },
})
