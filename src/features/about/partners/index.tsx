import { Carousel } from "@mantine/carousel"
import { Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import React, { useRef } from "react"

import ImageThree from "@/shared/assets/images/image-amazon.png"
import ImageOne from "@/shared/assets/images/image-discord.png"
import ImageTwo from "@/shared/assets/images/image-facebook.png"

import s from "./styles.module.scss"

export const Partners = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  const autoplay = useRef(Autoplay({ delay: 700, stopOnInteraction: false }))
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>
        <span>Hamkorlar</span>
        Jamoamiz – bizning eng katta boyligimiz. Har bir muvaffaqiyat ortida
        sizning fidokorligingiz va mehnatingiz turibdi.
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
          <Image src={ImageOne} alt="ImageOne" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="ImageTwo" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="ImageThree" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageOne} alt="ImageOne" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="ImageTwo" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="ImageThree" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageOne} alt="ImageOne" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="ImageTwo" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="ImageThree" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageOne} alt="ImageOne" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="ImageTwo" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="ImageThree" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageOne} alt="ImageOne" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageTwo} alt="ImageTwo" className={s.image} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ImageThree} alt="ImageThree" className={s.image} />
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
