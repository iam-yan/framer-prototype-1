import * as React from "react"
import { Frame, useAnimation } from "framer"
import { primitives } from "./Primitives"
import { Plus, Minus } from "react-feather"

export function Button() {
    const aniControls = useAnimation()
    const [itemCount, setItemCount] = React.useState(0)
    const variants = {
        primary: {
            default: {
                backgroundColor: primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 208,
                transition: primitives.transitions.default,
            },
            pressing: {
                backgroundColor: primitives.color.brand,
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                transition: primitives.transitions.flash,
            },
            config: {
                backgroundColor: primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 144,
                transition: primitives.transitions.default,
            }
        },
        primaryIcon: {
            default: {
                opacity: 1,
                right: 24,
                top: 24,
                size: 0,
            },
            config: {
                opacity: 1,
                right: 0,
                top: 0,
                size: 48,
            }
        },
        secondary: {
            default: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 24,
                top: 24,
                size: 0,
            },
            pressingMinus: {
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
            },
            config: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 0,
                top: 0,
                size: 48,
            }
        },
        textPre: {
            default: {
                // height: 48,
                // width: 108,
                y: 0,
                opacity: 1,
            },
            config: {
                // height: 0,
                // width: 0,
                y: 48,
                opacity: 0,
            },
        }
    }
    aniControls.start(itemCount == 0 ? "default" : "config")
    return (
        <Frame
            name="Button"
            background="null"
            center
            height={48}
            width={208}
            style={{
                fontFamily: "Open Sans"
            }}
        >
            <Frame
                name="Secondary Button"
                background="null"
                borderRadius={100}
                style={{
                    borderColor: primitives.color.dark,
                    borderStyle: "solid",
                    borderWidth: 2,
                }}
                animate={aniControls}
                initial={itemCount == 0 ? "default" : "pressing"}
                variants={variants.secondary}
                transition={primitives.transitions.default}
                overflow="hidden"
                onTapStart={() => {
                    aniControls.start("pressingMinus")
                }}
                onTap={() => {
                    setItemCount(itemCount - 1)
                }}
            >
                <Frame name="Icon Frame" background="null" size={24} center>
                    <Minus />
                </Frame>
            </Frame>
            <Frame
                name="Primary Button"
                right={0}
                borderRadius={100}
                height="100%"
                animate={aniControls}
                initial={itemCount == 0 ? "default" : "pressing"}
                variants={variants.primary}
                onTapStart={() => {
                    aniControls.start("pressing")
                }}
                onTap={() => {
                    setItemCount(itemCount + 1)
                }}
            >
                <Frame
                    name="Primary Button Icon"
                    background="null"
                    animate={aniControls}
                    initial={itemCount == 0 ? "default" : "config"}
                    variants={variants.primaryIcon}
                    transition={primitives.transitions.default}
                    overflow="hidden"
                >
                    <Frame name="Icon Frame" background="null" size={24} center>
                        <Plus color="white" />
                    </Frame>
                </Frame>
            </Frame>
            <Frame
                name="Text Pre"
                background="null"
                // animate={aniControls}
                // initial="default"
                // transition={primitives.transitions.default}
                // variants={variants.textPre}
                // overflow="hidden"
                color="white"
                height="100%"
                width="100%"
                // center
                style={{
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 24,
                }}
            >
                {itemCount == 0 ? "Add to Cart" : itemCount}
            </Frame>
        </Frame>
    )
}