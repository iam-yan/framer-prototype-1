import * as React from "react"
import { Scroll, Frame, useAnimation, useCycle } from "framer"
import { NavBar } from "./NavBar"
import { ChevronLeft, Menu, Heart, ShoppingBag, X } from "react-feather"

const gap = 16
const IsEven = i => i % 2 == 0
const toConfigs = hs => {
    let l = 0,
        r = 0
    return hs.map((h, i) => {
        let y
        if (i - 2 < 0) {
            y = 0
        } else {
            if (IsEven(i)) {
                l += hs[i - 2] + gap
                y = l
            } else {
                r += hs[i - 2] + gap
                y = r
            }
        }
        return { h: h, y: y }
    })
}
const scaleHs = (iniHs, iniW, scaledW, envokedI, envokedH) => {
    let newHs = iniHs.map((h, i) => (h * scaledW) / iniW)
    newHs[envokedI] = envokedH
    return newHs
}
const toState = (hs, invokedI) => ({
    invokedI: invokedI,
    configs: toConfigs(hs),
})

const testHs = [
    50,
    350,
    72,
    230,
    180,
    100,
    210,
    250,
    90,
    82,
    120,
    50,
    50,
    350,
    72,
    230,
    180,
    100,
    210,
    250,
    90,
    82,
    120,
    50,
]
const iniState = toState(testHs, -1)

export function App(props) {
    const [viewState, setViewState] = React.useState(iniState)
    const [current, cycle] = useCycle("initial", "envoked")
    const [current_out, cycle_out] = useCycle("initial_out", "envoked_out")
    const scrollControls = useAnimation()
    const { height, width } = props
    const subWidth = (width - gap * 3) / 2
    const newState = envokedI =>
        toState(scaleHs(testHs, subWidth, width, envokedI, height), envokedI)
    const transition = { type: "tween", duration: 0.24, ease: "easeOut" }
    const variants = {
        navBar: {
            initial_out: {
                y: 56,
                opacity: 1,
            },
            envoked_out: {
                y: 0,
                opacity: 0,
            },
        },
        scroll: {
            initial_out: {
                height: height - 56 - 24 - 16,
            },
            envoked_out: {
                height: height,
            },
        },
        container: {
            initial: {
                width: width - gap * 2,
                x: gap,
            },
            envoked: {
                width: width,
                x: IsEven(viewState.invokedI) ? 0 : -width - gap,
            },
        },
        item: {
            initial: i => ({
                height: iniState.configs[i].h,
                width: subWidth,
                x: IsEven(i) ? 0 : subWidth + gap,
                y: iniState.configs[i].y,
                opacity: 1,
            }),
            envoked: i => ({
                height: viewState.configs[i].h,
                width: width,
                x: IsEven(i) ? 0 : width + gap,
                y: viewState.configs[i].y,
                opacity: i == viewState.invokedI ? 1 : 0,
            }),
        },
    }

    const items = testHs.map((h, i) => (
        <Frame
            key={i}
            custom={i}
            variants={variants.item}
            initial="initial"
            transition={transition}
            onTap={() => {
                setViewState(newState(i))
                cycle()
                cycle_out()
            }}
        />
    ))
    if (viewState.invokedI >= 0) {
        scrollControls.start({
            y: -1 * viewState.configs[viewState.invokedI].y,
            transition: transition,
        })
    }

    return (
        <Frame
            height="100%"
            width="100%"
            background="null"
            position="relative"
            animate={current_out}
        >
            <NavBar
                leftIcons={[<ChevronLeft />, <Menu />]}
                rightIcons={[<Heart />, <ShoppingBag />]}
                initial="initial_out"
                transition={transition}
                variants={variants.navBar}
            />
            <Scroll
                bottom={0}
                width="100%"
                initial="initial_out"
                transition={transition}
                variants={variants.scroll}
                scrollAnimate={scrollControls}
            >
                <Frame
                    name="container"
                    background="null"
                    initial="initial"
                    transition={transition}
                    variants={variants.container}
                    animate={current}
                >
                    {items}
                </Frame>
            </Scroll>
        </Frame>
    )
}
