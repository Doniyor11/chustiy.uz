import { Carousel } from "@mantine/carousel"
import { Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import React, { useRef } from "react"

import ImageSeven from "@/shared/assets/images/mursak-logo.png"
import ImageSex from "@/shared/assets/images/nasa-logo.png"
import ImageFive from "@/shared/assets/images/artel_logo.png"
import ImageThree from "@/shared/assets/images/nasa-logo.png"
import ImageOne from "@/shared/assets/images/mursak-logo.png"
import ImageTwo from "@/shared/assets/images/Hilton-logo.svg"
import ImageFour from "@/shared/assets/images/uzbekistan_travel-logo.png"
import s from "./styles.module.scss"

export const Partners = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  const autoplay = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }))
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>
        <span>Hamkorlar</span>
        Biz shu kungacha ko'plab mashhur brendlar bilan birgalikda ishlaganmiz
        va ularga o'z xizmatlarimizni taqdim qilganmiz
      </Text>

      <Carousel
        loop
        align="start"
        withControls={false}
        slideGap={matches ? 12 : 20}
        slideSize={matches ? 200 : 243}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Image src={ImageOne} alt="1" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="2" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="3" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageFour} alt="4" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageFive} alt="5" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageSex} alt="6" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageSeven} alt="7" className={s.image} />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
