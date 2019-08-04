import * as React from "react"
import { Frame, useAnimation } from "framer"
import { primitives } from "./Primitives"
import { ShoppingBag } from "react-feather"

export function Bag(props) {
    const { itemCount, hidable = false } = props
    const aniControls = useAnimation()
    const variants = {
        container: {
            hide: {
                size: 0
            },
            reveal: {
                size: 64
            },
        },
    }
    let initial = hidable && itemCount == 0 ? "hide" : "reveal"
    aniControls.start(initial)
    return (
        <Frame
            name="Bag"
            size={24}
            background="null"
        >
            <Frame
                name="Container"
                center
                overflow="hidden"
                borderRadius={100}
                animate={aniControls}
                initial={initial}
                variants={variants.container}
                transition={primitives.transitions.fast}
                background="null"
            >
                <Frame
                    name="Icon Layout"
                    size={24}
                    center
                    overflow="hidden"
                    background="null"
                >
                    <ShoppingBag />
                </Frame>
                {itemCount == 0 && !hidable ?
                    null :
                    <Frame
                        name="Count BG"
                        size={20}
                        borderRadius={100}
                        backgroundColor={primitives.color.brand}
                        color="white"
                        style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            lineHeight: 20,
                        }}
                        center
                        x={10}
                        y={-10}
                    >
                        {itemCount}
                    </Frame>
                }
            </Frame>
        </Frame>
    )
}