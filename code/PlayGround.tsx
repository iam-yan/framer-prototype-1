import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Frame, useCycle, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function PlayItem(props) {
    // useEffect(() => console.log("hello"), [])
    const [state, setState] = useState(0)
    const { height, width } = props
    useEffect(() => {
        console.log("hi")
    })

    return (
        <Frame
            height={300}
            width={500}
            onTap={
                state == 0 ?
                    () => {
                        if (state == 0) {
                            setState(state + 1)
                            console.log("envoke")
                        }
                    } :
                    null
            }
        >
            <Frame
                height={100}
                width={100}
                onTap={(e) => {
                    setState(0)
                    e.stopPropagation()
                    console.log("close")
                }}
            />
        </Frame>
    )
}

// export function PlayContainer(props) {
//     console.log(props.item.props.height)
//     return <Frame />
// }

// addPropertyControls(PlayContainer, {
//     item: {
//         type: ControlType.ComponentInstance,
//     },
// })
