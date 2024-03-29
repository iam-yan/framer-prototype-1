import * as React from "react"
import { Scroll, Frame, useAnimation, useCycle } from "framer"
import { NavBar } from "./NavBar"
import { ItemCard, itemConfigs } from "./ItemCard"
import { Bag } from "./Bag"
import { ChevronLeft, Menu, Heart, ShoppingBag } from "react-feather"
import { primitives } from "./Primitives"

const gap = 24
const transition = primitives.transitions.default
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
const toState = (hs, invokedI, isEnvoking) => ({
    invokedI: invokedI,
    configs: toConfigs(hs),
    isEnvoked: isEnvoking,
})

const defaultHs = itemConfigs.map(config => config.height)
const iniState = toState(defaultHs, -1, false)

export function App(props) {
    const [viewState, setViewState] = React.useState(iniState)
    const [sumCount, setSumCount] = React.useState(0)
    // const itemSumCount = React.useRef(0)
    const [current, cycle] = useCycle("initial", "envoked")
    const [current_out, cycle_out] = useCycle("initial_out", "envoked_out")
    const scrollControls = useAnimation()
    React.useEffect(() => {
        if (viewState.invokedI >= 0) {
            console.log("use effect")
            requestAnimationFrame(() => {
                cycle()
                cycle_out()
                let offset = viewState.isEnvoked ? viewState.configs[viewState.invokedI].y : iniState.configs[viewState.invokedI].y
                scrollControls.start({
                    transition: primitives.transitions.default,
                    y: -offset,
                })
            })
        }
    }, [viewState.isEnvoked])
    const { height, width } = props
    console.log("render")
    const subWidth = (width - gap * 3) / 2
    const newStateForEnvoke = envokedI =>
        toState(scaleHs(defaultHs, subWidth, width, envokedI, height), envokedI, true)
    const newStateForClose = () => ({
        invokedI: viewState.invokedI,
        configs: viewState.configs,
        isEnvoked: false,
    })
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
                top: [0, -40, 0],
                width: width - gap * 2,
                height: iniState.configs[iniState.configs.length - 1].y+320,
                x: gap,
            },
            envoked: {
                top: [0, 80, 0],
                width: width,
                height: 999999,
                x: IsEven(viewState.invokedI) ? 0 : -width - gap,
            },
        },
        item: {
            container: {
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
            navBar: {
                initial: {
                    y: 0,
                    opacity: 0,
                },
                envoked: i => ({
                    y: i == viewState.invokedI ? 56 : 0,
                    opacity: i == viewState.invokedI ? 1 : 0,
                }),
            },
            decoRect: {
                initial: {
                    rotate: 4,
                    height: 120 * 2,
                    backgroundColor: primitives.color.tint,
                },
                envoked: i => ({
                    rotate: i == viewState.invokedI ? -86 : 4,
                    height: i == viewState.invokedI ? 414 : 120 * 2,
                    backgroundColor: i == viewState.invokedI ? primitives.color.lightBrand : primitives.color.tint,
                }),
            },
            img: {
                initial: i => ({
                    width: "100%",
                    height: iniState.configs[i].h - 80,
                    bottom: 80,
                }),
                envoked: i => ({
                    width: i == viewState.invokedI ? "50%" : "100%",
                    height: i == viewState.invokedI ? 530 : viewState.configs[i].h - 80,
                    bottom: i == viewState.invokedI ? 216 : 80,
                }),
            },
            imgShadow: {
                initial: {
                    opacity: 0,
                },
                envoked: {
                    opacity: 1,
                },
            },
            specContainer: {
                initial: i => ({
                    height: 56,
                    width: 136,
                    // top: iniState.configs[i].h - 16 - 56,
                    // bottom: 16,
                    paddingLeft: 16,
                }),
                envoked: i => ({
                    height: i == viewState.invokedI ? height - 140 - 16 : 56,
                    width: i == viewState.invokedI ? 240 : 136,
                    // top: i == viewState.invokedI ? 140 : "auto",
                    // bottom: i == viewState.invokedI ? 16 : 16,
                    paddingLeft: i == viewState.invokedI ? 40 : 16,
                })
            },
            itemName: {
                initial: {
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "16px",
                },
                envoked: i => ({
                    fontSize: i == viewState.invokedI ? "32px" : "12px",
                    fontWeight: i == viewState.invokedI ? 800 : 600,
                    lineHeight: i == viewState.invokedI ? "40px" : "16px",
                }),
            },
            price: {
                initial: {
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: "24px",
                    marginTop: 0,
                    color: "black",
                },
                envoked: i => ({
                    fontSize: i == viewState.invokedI ? "20px" : "12px",
                    fontWeight: i == viewState.invokedI ? 800 : 300,
                    lineHeight: i == viewState.invokedI ? "40px" : "24px",
                    marginTop: i == viewState.invokedI ? 8 : 0,
                    color: i == viewState.invokedI ? primitives.color.brand : "black",
                }),
            },
            delay: {
                initial: {
                    y: 56,
                    opacity: 0,
                    transition: transition,
                },
                envoked: i => ({
                    y: 0,
                    opacity: 1,
                    transition: primitives.transitions.delay(i),
                }),
            },
        },
    }

    const items = itemConfigs.map((item, i) => (
        <ItemCard
            item={item}
            key={i}
            i={i}
            variants={variants.item}
            initial="initial"
            onTap={(e) => {
                if (!viewState.isEnvoked) {
                    setViewState(newStateForEnvoke(i))
                }
                else e.preventDefault()
            }}
            changeItemSumCount={(change) => setSumCount(sumCount + change)}
            currentSumCount={sumCount}
            justTapped={i == viewState.invokedI}
            closeFunc={() => {
                setViewState(newStateForClose())
            }}
        />
    ))

    return (
        <Frame
            height="100%"
            width="100%"
            background="null"
            position="relative"
            animate={current_out}
            style={{ fontFamily: "Open Sans" }}
        >
            <NavBar
                leftIcons={[<ChevronLeft />, <Menu />]}
                rightIcons={[<Heart />, <Bag itemCount={sumCount} />]}
                initial="initial_out"
                transition={transition}
                variants={variants.navBar}
            />
            <Scroll
                bottom={0}
                width="100%"
                initial="initial_out"
                transition={primitives.transitions.default}
                variants={variants.scroll}
                scrollAnimate={scrollControls}
                dragEnabled={!viewState.isEnvoked}
                wheelEnabled={!viewState.isEnvoked}
            >
                <Frame
                    name="container"
                    background="null"
                    initial="initial"
                    transition={primitives.transitions.default2}
                    variants={variants.container}
                    animate={current}
                >
                    {items}
                </Frame>
            </Scroll>
        </Frame>
    )
}
