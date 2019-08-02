import * as React from "react"
import {Frame } from "framer"
import { url } from "framer/resource"
import { primitives } from "./Primitives"
import { NavBar } from "./NavBar"
import { X } from "react-feather"

//i, variants, initial, transition,

export function ItemCard(props) {
    let { item, i, variants, initial, transition, onTap } = props
    const { name, height, price, img } = item

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
            onTap={onTap}
            background="null"
            style={{ paddingLeft: 16, borderRadius: 0 }}
        >
            <NavBar
                i={i}
                leftIcons={[<X />]}
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
            />
            <Frame
                name="Spec Container"
                height={56}
                width={120}
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
                        textTransform: "uppercase",
                    }}
                >
                    <span>{name}</span>
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
                    <span>{price}</span>
                </Frame>
            </Frame>
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
