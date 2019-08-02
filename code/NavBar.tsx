import * as React from "react"
import { Frame, Stack, useCycle } from "framer"

export function NavBar(props) {
    const { leftIcons, rightIcons, initial, transition, variants } = props

    return (
        <Stack
            name="Navigation Bar"
            direction="horizontal"
            distribution="space-between"
            height={24}
            width="100%"
            padding={16}
            initial={initial}
            transition={transition}
            variants={variants}
        >
            <Stack
                name="Left Icons"
                direction="horizontal"
                gap={16}
                height="100%"
                width="auto"
                distribution="start"
                background="rgba(255, 0, 0, .5)"
            >
                {...leftIcons}
            </Stack>
            <Stack
                name="Right Icons"
                direction="horizontal"
                gap={16}
                height="100%"
                width="auto"
                distribution="end"
                background="rgba(255, 0, 0, .5)"
            >
                {...rightIcons}
            </Stack>
        </Stack>
    )
}
