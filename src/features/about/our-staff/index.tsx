import { Carousel } from "@mantine/carousel"
import { Box, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import ImageRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageOne from "@/shared/assets/images/image-chustiy.png"
import ImageTwo from "@/shared/assets/images/team-image-1.jpg"

import s from "./styles.module.scss"

export const OurStaff = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>
        <span>Bizning hodimlar</span>
        Jamoamiz – bizning eng katta boyligimiz. Har bir muvaffaqiyat ortida
        sizning fidokorligingiz va mehnatingiz turibdi.
      </Text>

      <Carousel
        slideGap={24}
        slideSize={matches ? "100%" : 457}
        align={matches ? "start" : "center"}
        height={matches ? 322 : 372}
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
              width={220}
              height={300}
              src={ImageOne}
              alt={"image-chustiy"}
            />
            <Box className={s.cardRight}>
              <Box>
                <Text className={s.name}>Bahriddin Chustiy</Text>
                <Text className={s.badge}>Asoschi, Shef</Text>
              </Box>
              <Text className={s.description}>
                Ichki tizimlar raqamlashtirildi, biznes jarayonlar
                avtomatlashtirildi. Biz xizmat ko‘rsatish tezligi va sifatini
                sezilarli darajada yaxshiladik. Mahsulotlarimiz soni va sifati
                jihatdan sezilarli yutuqlarga erishildi.
              </Text>
            </Box>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Image
              className={s.image}
              width={220}
              height={300}
              src={ImageTwo}
              alt={"image-chustiy"}
            />
            <Box className={s.cardRight}>
              <Box>
                <Text className={s.name}>Bahrom Babahanov</Text>
                <Text className={s.badge}>Shef</Text>
              </Box>
              <Text className={s.description}>
                Ichki tizimlar raqamlashtirildi, biznes jarayonlar
                avtomatlashtirildi. Biz xizmat ko‘rsatish tezligi va sifatini
                sezilarli darajada yaxshiladik. Mahsulotlarimiz soni va sifati
                jihatdan sezilarli yutuqlarga erishildi.
              </Text>
            </Box>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
