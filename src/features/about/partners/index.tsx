import {Carousel} from "@mantine/carousel"
import {Text} from "@mantine/core"
import {useMediaQuery} from "@mantine/hooks"
import Autoplay from "embla-carousel-autoplay"
import Image, {StaticImageData} from "next/image"
import React, {memo, useMemo, useRef} from "react"

import ImageArtel from "@/shared/assets/images/artel_logo.png"
import ImageHilton from "@/shared/assets/images/Hilton-logo.png"
import ImageMursak from "@/shared/assets/images/mursak-logo.png"
import ImageNasa from "@/shared/assets/images/nasa-logo.png"
import ImageTurizm from "@/shared/assets/images/Uzbekistan_Turizm.png"

import s from "./styles.module.scss"

interface Partner {
    id: string
    src: StaticImageData
    alt: string
}

const PARTNERS_DATA: Partner[] = [
    {id: "mursak", src: ImageMursak, alt: "Mursak"},
    {id: "hilton", src: ImageHilton, alt: "Hilton"},
    {id: "nasa", src: ImageNasa, alt: "Nasa"},
    {id: "turizm", src: ImageTurizm, alt: "Uzbekistan Turizm"},
    {id: "artel", src: ImageArtel, alt: "Artel"},
    {id: "mursak", src: ImageMursak, alt: "Mursak"},
    {id: "hilton", src: ImageHilton, alt: "Hilton"},
    {id: "nasa", src: ImageNasa, alt: "Nasa"},
    {id: "turizm", src: ImageTurizm, alt: "Uzbekistan Turizm"},
    {id: "artel", src: ImageArtel, alt: "Artel"},
]

export const Partners = memo(() => {
    const isMobile = useMediaQuery("(max-width: 992px)")
    const autoplay = useRef(Autoplay({delay: 1500, stopOnInteraction: false}))

    const carouselConfig = useMemo(
        () => ({
            slideGap: isMobile ? 12 : 20,
            slideSize: isMobile ? 200 : 243,
        }),
        [isMobile]
    )

    return (
        <div className={s.sectionWrapper}>
            <Text className="section-title sm">
                <span>Hamkorlar</span>
                Biz shu kungacha ko'plab mashhur brendlar bilan birgalikda ishlaganmiz
                va ularga o'z xizmatlarimizni taqdim qilganmiz
            </Text>

            <Carousel
                loop
                align="start"
                withControls={false}
                slideGap={carouselConfig.slideGap}
                slideSize={carouselConfig.slideSize}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {PARTNERS_DATA.map((partner) => (
                    <Carousel.Slide key={partner.id}>
                        <Image src={partner.src} alt={partner.alt} className={s.image}/>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
})

Partners.displayName = "Partners"