import * as React from "react"
import { addPropertyControls, ControlType, Frame, useCycle } from "framer"
import { url } from "framer/resource"
import { primitives } from "./Primitives"

//i, variants, initial, transition,

// interface ItemConfig {
//     height: number
//     productName: string
//     price: string
//     img: string
// }

// interface ItemProps {
//     onTap: any
//     itemConfig: ItemConfig
// }

export function ItemCard(props) {
    const { productName } = props
    return (
        <Frame
            name="Container"
            height={248}
            width="100%"
            overflow="hidden"
            // custom={i}
            // variants={variants}
            // initial={initial}
            // transition={transition}
            // onTap={onTap}
            background="null"
            style={{ paddingLeft: 16, borderRadius: 8 }}
        >
            <Frame
                name="Deco Rect"
                background={primitives.color.tint}
                width="1000%"
                bottom={0}
                right={0}
                x="50%"
                y="50%"
                rotate={4}
                height={120 * 2}
            />
            <Frame
                name="Product Img"
                width="100%"
                height={168}
                right={0}
                bottom={80}
                background={{ src: url("code/images/1.png") }}
            />
            <Frame
                name="Spec Container"
                height={56}
                width={104}
                bottom={16}
                background="null"
            >
                <Frame
                    name="Name"
                    top={0}
                    height="auto"
                    width="100%"
                    background="null"
                    style={{
                        fontSize: 12,
                        fontWeight: 600,
                        lineHeight: "16px",
                    }}
                >
                    <span>{productName}</span>
                </Frame>
                <Frame
                    name="Price"
                    top={32}
                    height="auto"
                    width="100%"
                    background="null"
                    style={{
                        fontSize: 12,
                        fontWeight: 300,
                        lineHeight: "24px",
                    }}
                >
                    <span>$127.00</span>
                </Frame>
            </Frame>
        </Frame>
    )
}

export function TestCard() {
    return <ItemCard productName="TEINT COUTURE EVERWEAR" />
}

const config = (height, name, price, imgName) => {
    return {
        height: height,
        name: name,
        price: `$${price}.00`,
        img: url(`code/images/${imgName}.png`),
    }
}

const itemConfigs = []

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
