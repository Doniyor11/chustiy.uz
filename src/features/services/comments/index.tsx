import { Carousel } from "@mantine/carousel"
import { Flex, Rating, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import IconQuotes from "@/shared/assets/images/icons/icon-quotes.svg"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageAvatar from "@/shared/assets/images/image-avatar.png"

import s from "./styles.module.scss"

export const Comments = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>Ishonch bilan aytilgan so‘zlar</Text>

      <Carousel
        loop
        height={matches ? 332 : 400}
        slideGap={24}
        slideSize={matches ? "100%" : 528}
        align={matches ? "start" : "center"}
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
            <IconQuotes />
            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.cardBottom}>
              <Image
                className={s.image}
                src={ImageAvatar}
                alt={"image-avatar"}
                width={60}
                height={60}
              />
              <Flex className={s.info}>
                <Text className={s.name}>Nodira Qodirova</Text>
                <Rating value={5} size="md" color={"#FFC500"} />
              </Flex>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <IconQuotes />
            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.cardBottom}>
              <Image
                className={s.image}
                src={ImageAvatar}
                alt={"image-avatar"}
                width={60}
                height={60}
              />
              <Flex className={s.info}>
                <Text className={s.name}>Nodira Qodirova</Text>
                <Rating value={5} size="md" color={"#FFC500"} />
              </Flex>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <IconQuotes />
            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.cardBottom}>
              <Image
                className={s.image}
                src={ImageAvatar}
                alt={"image-avatar"}
                width={60}
                height={60}
              />
              <Flex className={s.info}>
                <Text className={s.name}>Nodira Qodirova</Text>
                <Rating value={5} size="md" color={"#FFC500"} />
              </Flex>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <IconQuotes />
            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.cardBottom}>
              <Image
                className={s.image}
                src={ImageAvatar}
                alt={"image-avatar"}
                width={60}
                height={60}
              />
              <Flex className={s.info}>
                <Text className={s.name}>Nodira Qodirova</Text>
                <Rating value={5} size="md" color={"#FFC500"} />
              </Flex>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
