import { Carousel } from "@mantine/carousel"
import { Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageBook from "@/shared/assets/images/book-image.png"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"

import s from "./styles.module.scss"

export const Books = () => {
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>Kitoblar</Text>

      <Carousel
        slideGap={28}
        slideSize={310}
        align={"start"}
        height={"auto"}
        slidesToScroll={"auto"}
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        <Carousel.Slide>
          <div className={s.card}>
            <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
            <Text>Kitob 4</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
            <Text>Kitob 4</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
            <Text>Kitob 4</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
            <Text>Kitob 4</Text>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
