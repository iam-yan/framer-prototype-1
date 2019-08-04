import * as React from "react"
import { useState, useEffect } from "react"
import { Frame, useCycle, addPropertyControls, ControlType } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function PlayItem(props) {
    // useEffect(() => console.log("hello"), [])
    const [state, setState] = useState(0)
    const [anotherState, setAnotherState] = useState(true)
    const { height, width } = props

    console.log("hi")

    return <Frame
        height={300}
        width={500}
        onTap={() => {
            if (state == 0) {
                setState(state + 1)
                console.log("envoke")
            }
        }}
    >
        <Frame
            height={100}
            width={100}
            onTap={() => {
                setState(0)
                console.log("close")
            }}
        />
    </Frame>
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
