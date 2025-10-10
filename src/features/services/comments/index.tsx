import { Carousel } from "@mantine/carousel"
import { Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image, { StaticImageData } from "next/image"
import React, { memo, useMemo } from "react"

import ImageAvatar1 from "@/shared/assets/images/comments/Hakim_Ganiev.jpg"
import ImageAvatar2 from "@/shared/assets/images/comments/Murod_Nazarov.jpg"
import ImageAvatar3 from "@/shared/assets/images/comments/Zafar_Khashimov.jpg"
import IconQuotes from "@/shared/assets/images/icons/icon-quotes.svg"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"

import s from "./styles.module.scss"

interface CommentData {
  id: string
  text: string
  author: string
  avatar: StaticImageData
}

const COMMENTS_DATA: CommentData[] = [
  {
    id: "zafar",
    text: "Ijtimoiy tarmoqlar orqali juda ham ko'p do'st ortirganman, shu qatorda Bahriddin Chustiy bilan ham birinchi online tanishganmiz, yozgan postlari va fikrlari bilan juda ham katta qiziqish uyg'otgan va Bahriddin akani kuzatishni boshlaganman",
    author: "Zafar Khashimov",
    avatar: ImageAvatar3,
  },
  {
    id: "murod",
    text: "Bu insonni ijtomoiy tarmoqlarda ko'rib uni san'ati umuman o'zbek milliy taomlariga yondashuvini ko'rib qiziqish bildirib yurgan edim, keyin esa Bahriddin ochgan restoranlardan biriga Chustiy cuisine, keyin Sal-Sal ga borib haqiqatdan bu bolani mehri umuman san'atiga nisbatdan yondashuvi o'zgachaligini ko'rdim",
    author: "Murod Nazarov",
    avatar: ImageAvatar2,
  },
  {
    id: "xakim",
    text: "Bahriddin ser g'ayrat va tadbirkorlik qobiliyatiga ham ega inson. O'zbekistonda yangi uslubda ishlayotgn oshxonalarni ochib yoshlarga o'rnak bo'lib kelmoqda. O'zbek taomlari haqida internet tarmoqlarda ajoyib qilib so'zlamoqda",
    author: "Xakim Ganiev",
    avatar: ImageAvatar1,
  },
]

interface CommentCardProps {
  comment: CommentData
}

const CommentCard = memo(({ comment }: CommentCardProps) => (
  <div className={s.card}>
    <IconQuotes />
    <Text className={s.description}>{comment.text}</Text>
    <div className={s.cardBottom}>
      <Box className={s.cardBottomImg}>
        <Image
          className={s.image}
          src={comment.avatar}
          alt={comment.author}
          width={60}
          height={60}
        />
      </Box>
      <Flex className={s.info}>
        <Text className={s.name}>{comment.author}</Text>
      </Flex>
    </div>
  </div>
))

CommentCard.displayName = "CommentCard"

export const Comments = memo(() => {
  const isMobile = useMediaQuery("(max-width: 992px)")

  const carouselConfig = useMemo(
    () => ({
      height: isMobile ? 332 : 450,
      slideSize: isMobile ? "100%" : 528,
      align: isMobile ? "start" : "center",
    }),
    [isMobile],
  )

  return (
    <div className={s.sectionWrapper}>
      <Text className="section-title sm">Ishonch bilan aytilgan so'zlar</Text>

      <Carousel
        loop
        height={carouselConfig.height}
        slideGap={24}
        slideSize={carouselConfig.slideSize}
        align={carouselConfig.align as "start" | "center"}
        slidesToScroll="auto"
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        {COMMENTS_DATA.map((comment) => (
          <Carousel.Slide key={comment.id}>
            <CommentCard comment={comment} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
})

Comments.displayName = "Comments"
