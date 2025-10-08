import { Carousel } from "@mantine/carousel"
import { Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageBook4 from "@/shared/assets/images/aqlvoy_oshpaz.jpg"
import ImageBook3 from "@/shared/assets/images/book-image-3.png"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageBook5 from "@/shared/assets/images/o'zbek_book.png"
import ImageBook2 from "@/shared/assets/images/quyoshli_365_kun.jpg"

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
            <Image
              className={s.image}
              src={ImageBook2}
              alt={"Quyoshli 365 kun - Bahriddin chustiy"}
            />
            <Text>Quyoshli 365 kun</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image
              className={s.image}
              src={ImageBook3}
              alt={"Non - Bahriddin chustiy"}
            />
            <Text>Non</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image
              className={s.image}
              src={ImageBook4}
              alt={"Bolalar taomlari - Bahriddin chustiy"}
            />
            <Text>Bolalar taomlari</Text>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image
              className={s.image}
              src={ImageBook5}
              alt={"O'zbegim - Bahriddin chustiy"}
            />
            <Text>O'zbegim</Text>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
