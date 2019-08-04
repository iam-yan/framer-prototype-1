import * as React from "react"
import { Frame, Stack } from "framer"
import { url } from "framer/resource"
import { primitives } from "./Primitives"
import { NavBar } from "./NavBar"
import { X, Heart } from "react-feather"
import { Button } from "./Button";

let transition = primitives.transitions.default

export function ItemCard(props) {
    let { item, i, variants, initial, onTap, justTapped, closeFunc } = props
    const { name, height, price, img, headline, detail, itemNo } = item

    const detailSpec = (
        <Stack
            name="Detail Container"
            custom={i}
            variants={variants.detailContainer}
            distribution="start"
            alignment="start"
            width={176}
            top={8}
            gap={0}
        >
            <Frame background="null" size={24}>
                <Heart />
            </Frame>
            <Frame
                name="Headline"
                // custom={i}
                // variants={variants.headline}
                // transition={transition}
                height="auto"
                width="100%"
                background="null"
                style={{
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "32px",
                    textTransform: "capitalize",
                    marginTop: "64px",
                }}
            >
                <span>{headline}</span>
            </Frame>
            <Frame
                name="Detail"
                // custom={i}
                // variants={variants.detail}
                // transition={transition}
                height="auto"
                width="100%"
                // top={16}
                background="null"
                style={{
                    fontSize: 15,
                    lineHeight: "24px",
                    margin: "16px 0",
                }}
            >
                <span>{detail}</span>
            </Frame>
            <Frame
                name="Item No."
                // custom={i}
                // variants={variants.itemNo}
                // transition={transition}
                height="auto"
                width="100%"
                background="null"
                style={{
                    fontSize: 12,
                    lineHeight: "24px",
                }}
            >
                <span>{itemNo}</span>
            </Frame>
        </Stack>
    )

    const button = (
        <Frame
            name="Button Container"
            variants={variants.button}
            background="null"
            height={48}
            width="100%"
            top={792}
        >
            <Button />
        </Frame>
    )

    const closeButton =
        <Frame
            background="null"
            size={24}
            onClick={(event) => {
                event.stopPropagation();
                closeFunc()
            }}
        >
            <X />
        </Frame>

    const imgShadow =
        <Frame
            name="Img Shadow"
            variants={variants.imgShadow}
            transition={transition}
            height="100%"
            width="100%"
            right={0}
            background={{ src: img }}
            style = {{
                filter: "drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.48))",
            }}
        />

    return (
        <Frame
            name="Container"
            // height={height}
            // width="100%"
            overflow="hidden"
            custom={i}
            variants={variants.container}
            initial={initial}
            transition={transition}
            onClick={onTap}
            background="null"
        // style={{ borderRadius: 0 }}
        >
            <NavBar
                i={i}
                leftIcons={[closeButton]}
                rightIcons={[]}
                initial={initial}
                transition={transition}
                variants={variants.navBar}
            />
            <Frame
                name="Deco Rect"
                custom={i}
                variants={variants.decoRect}
                initial={initial}
                transition={transition}
                background={primitives.color.tint}
                width="1000%"
                bottom={0}
                right={0}
                x="50%"
                y="50%"
            // rotate={4}
            // height={120 * 2}
            />
            <Frame
                name="Product Img"
                custom={i}
                variants={variants.img}
                transition={transition}
                right={0}
                background={{ src: img }}
            >
                {justTapped ? imgShadow : null}
            </Frame>
            <Stack
                name="Spec Container"
                custom={i}
                variants={variants.specContainer}
                transition={transition}
                alignment="start"
                distribution="start"
                // height={56}
                // width={120}
                bottom={16}
                gap={0}
            >
                <Frame
                    name="Name"
                    custom={i}
                    variants={variants.itemName}
                    transition={transition}
                    height="auto"
                    width="100%"
                    background="null"
                    style={{
                        // fontSize: 12,
                        // fontWeight: 600,
                        // lineHeight: "16px",
                        textTransform: "uppercase",
                    }}
                >
                    <span>{name}</span>
                </Frame>
                <Frame
                    name="Price"
                    custom={i}
                    variants={variants.price}
                    transition={transition}
                    height="auto"
                    width="100%"
                    background="null"
                >
                    <span>{price}</span>
                </Frame>
                {justTapped ? detailSpec : null}
            </Stack>
            {justTapped ? button : null}
        </Frame>
    )
}

export function TestCard() {
    return <ItemCard item={itemConfigs[1]} />
}

const item = (name, heightOffset, price, itemNo, headline, detail) => {
    return {
        name: name,
        height: 248 + heightOffset,
        price: `$${price}.00`,
        img: url(`code/images/${name.toUpperCase()}.png`),
        itemNo: `Item No. ${itemNo}`,
        headline: headline,
        detail: detail,
    }
}

export const itemConfigs = [
    item(
        "MISTER PRISME PRIMER",
        0,
        127,
        "P090516",
        "MATTIFYING PRIMER",
        "A soft skin primer that can be used alone or under makeup for a velvety smooth matte complexion."
    ),
    item(
        "L'INTERDIT ÉDITION COUTURE",
        -48,
        230,
        "P090495",
        "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT",
        "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."
    ),
    item(
        "VOLUME DISTURBIA",
        0,
        250,
        "P072590",
        "VOLUME & CURVE MASCARA 24 HOURS WEAR",
        "Volume Disturbia Excessive Volume & Curve mascara – 24-hours wear #MADETODISTURB"
    ),
    item(
        "MISTER MATIFYING STICK",
        0,
        250,
        "P090495",
        "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT",
        "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."
    ),
    item(
        "GENTLEMAN GIVENCHY",
        32,
        230,
        "P007085",
        "EAU DE TOILETTE",
        "Gentleman Givenchy Eau de Parfum, a new intensity for men who dance to their own beat. An elegant woody-floral Oriental reminiscent of nightfall, composed with an explosive signature. A floral played out in masculine notes."
    ),
    item(
        "MATISSIME VELVET FLUID",
        0,
        230,
        "P081931",
        "RADIANT MAT FLUID FOUNDATION SPF 20 - PA+++",
        "Givenchy turns the light on for matte, in a radiant-matte fluid foundation. Just like velvet, it absorbs and reflects light and is comfortable and soft. Long-lasting coverage for normal to combination skins."
    ),
    item(
        "TEINT COUTURE",
        0,
        230,
        "P090041",
        "EMBELLISHING CONCEALER",
        "A dual-toned practical concealer that hides imperfections and wakes up the eye area with light."
    ),
    item(
        "TEINT COUTURE RADIANT DROP",
        0,
        230,
        "P080463",
        "2-IN-1 HIGHLIGHTER",
        "With its two-in-one applicator, this liquid highlighter is applied in touches of light or all over the face for a dewy iridescent finish."
    ),
    item(
        "MISTER PRISME PRIMER",
        0,
        127,
        "P090516",
        "MATTIFYING PRIMER",
        "A soft skin primer that can be used alone or under makeup for a velvety smooth matte complexion."
    ),
    item(
        "L'INTERDIT ÉDITION COUTURE",
        -48,
        230,
        "P090495",
        "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT",
        "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."
    ),
    item(
        "VOLUME DISTURBIA",
        0,
        250,
        "P072590",
        "VOLUME & CURVE MASCARA 24 HOURS WEAR",
        "Volume Disturbia Excessive Volume & Curve mascara – 24-hours wear #MADETODISTURB"
    ),
    item(
        "MISTER MATIFYING STICK",
        0,
        250,
        "P090495",
        "MATIFYING STICK THAT UNIFIES COMPLEXION WITHOUT CAKING EFFECT",
        "A mattifying stick with a second-skin effect in a sheer shade that durably smooths the skin and reduces imperfections without a caking effect."
    ),
    item(
        "GENTLEMAN GIVENCHY",
        32,
        230,
        "P007085",
        "EAU DE TOILETTE",
        "Gentleman Givenchy Eau de Parfum, a new intensity for men who dance to their own beat. An elegant woody-floral Oriental reminiscent of nightfall, composed with an explosive signature. A floral played out in masculine notes."
    ),
    item(
        "MATISSIME VELVET FLUID",
        0,
        230,
        "P081931",
        "RADIANT MAT FLUID FOUNDATION SPF 20 - PA+++",
        "Givenchy turns the light on for matte, in a radiant-matte fluid foundation. Just like velvet, it absorbs and reflects light and is comfortable and soft. Long-lasting coverage for normal to combination skins."
    ),
    item(
        "TEINT COUTURE",
        0,
        230,
        "P090041",
        "EMBELLISHING CONCEALER",
        "A dual-toned practical concealer that hides imperfections and wakes up the eye area with light."
    ),
    item(
        "TEINT COUTURE RADIANT DROP",
        0,
        230,
        "P080463",
        "2-IN-1 HIGHLIGHTER",
        "With its two-in-one applicator, this liquid highlighter is applied in touches of light or all over the face for a dewy iridescent finish."
    ),
]
