import { Carousel } from "@mantine/carousel"
import { Button, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useRef } from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageEight from "@/shared/assets/images/image-eight.jpg"
import ImageFive from "@/shared/assets/images/image-five.jpg"
import ImageFour from "@/shared/assets/images/image-four.jpg"
import ImageNine from "@/shared/assets/images/image-nine.jpg"
import ImageOne from "@/shared/assets/images/image-one.jpg"
import ImageSeven from "@/shared/assets/images/image-seven.jpg"
import ImageSix from "@/shared/assets/images/image-six.jpg"
import ImageThree from "@/shared/assets/images/image-three.jpg"
import ImageTwo from "@/shared/assets/images/image-two.jpg"

import s from "./styles.module.scss"

export const MainGallery = () => {
  const router = useRouter()
  const matches = useMediaQuery("(max-width: 992px)")

  const autoplay = useRef(Autoplay({ delay: 700, stopOnInteraction: false }))
  return (
    <>
      <div className={s.sectionWrapper}>
        <Text className={"section-title sm"}>Rasm va videolar</Text>
        <Text className={"section-subtitle"}>
          Turli mamlakatlarda tashkil etilgan nufuzli tadbirlar, yirik
          festivallar hamda xalqaro miqyosdagi loyihalarda amalga oshirgan
          xizmatlarimizdan olingan eng yorqin lahzalarni siz bilan baham
          ko‘ramiz. Ushbu surat va video lavhalarda bizning professional
          jamoamizning mehnati, mahorati hamda iliq muhitni his etishingiz
          mumkin. Ularni bemalol tomosha qilib, biz yaratgan unutilmas
          taassurotlar bilan tanishishingiz mumkin.
        </Text>

        <div className={s.cards}>
          <div className={s.topRectangle} />

          <Carousel
            loop
            align="start"
            height={matches ? 400 : 400}
            withControls={false}
            slideGap={matches ? 12 : 20}
            slideSize={matches ? "100%" : 320}
            plugins={[autoplay.current]}
            slidesToScroll={matches ? 1 : "auto"}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <Image className={s.image} src={ImageOne} alt={"ImageOne"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageTwo} alt={"ImageTwo"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageThree} alt={"ImageThree"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageFour} alt={"ImageFour"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                className={cx(s.image, s.ImageFive)}
                src={ImageFive}
                alt={"ImageFive"}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageSix} alt={"ImageSix"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageSeven} alt={"ImageSeven"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageEight} alt={"ImageEight"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image className={s.image} src={ImageNine} alt={"ImageNine"} />
            </Carousel.Slide>
          </Carousel>

          <div className={s.bottomRectangle} />
        </div>
        {(router.pathname === "/" || router.pathname === "/main") && (
          <Button
            className={cx(s.moreBtn, "btn-outline")}
            rightSection={<IconRight />}
          >
            Batafsil
          </Button>
        )}
      </div>
    </>
  )
}
