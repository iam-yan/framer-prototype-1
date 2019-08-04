import * as React from "react"
import { Frame, useAnimation } from "framer"
import { primitives } from "./Primitives"
import { ShoppingBag } from "react-feather"

export function Bag(props) {
    const { itemCount } = props
    return (
        <Frame
            name="Bag"
            size={24}
            background="null"
        >
            <Frame
                name="Container"
                size={64}
                center
                overflow="hidden"
                borderRadius={100}
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
            </Frame>
        </Frame>
    )
}