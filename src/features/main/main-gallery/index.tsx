import { Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageFour from "@/shared/assets/images/image-four.png"
import ImageOne from "@/shared/assets/images/image-one.png"
import ImageThree from "@/shared/assets/images/image-three.png"
import ImageTwo from "@/shared/assets/images/image-two.png"
import ImageRestaurants from "@/shared/assets/images/restaurants-image.png"

import s from "./styles.module.scss"

export const MainGallery = () => {
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
          <Image className={s.image} src={ImageOne} alt={"ImageOne"} />
          <Image className={s.image} src={ImageTwo} alt={"ImageTwo"} />
          <Image className={s.image} src={ImageThree} alt={"ImageThree"} />
          <Image className={s.image} src={ImageFour} alt={"ImageFour"} />
          <div className={s.bottomRectangle} />
        </div>
        <Button
          className={cx(s.moreBtn, "btn-outline")}
          rightSection={<IconRight />}
        >
          Batafsil
        </Button>
      </div>

      <div className={s.secondSectionWrapper}>
        <Box className={s.sectionLeft}>
          <Text className={"section-title sm"}>Do’konlar</Text>
          <Text className={"section-subtitle"}>
            Bahriddin Chustiy HoReCa sohasi uchun maxsus kiyim-kechak
            do‘konlarini tashkil etilgan, bu yerda restoran, kafe va
            mehmonxonalarda xizmat ko‘rsatuvchi xodimlar uchun zamonaviy va
            qulay uniformalar taqdim etiladi. Har bir libos nafaqat sifat va
            dizayni bilan, balki amaliy qulayligi bilan ham ajralib turadi. Siz
            ham ushbu do‘konlar bilan tanishib, jamoangiz uchun eng maqbul va
            zamonaviy uslubdagi kiyimlarni tanlashingiz mumkin.
          </Text>
          <Button className={"btn-outline"} rightSection={<IconRight />}>
            Batafsil
          </Button>
        </Box>
        <Image
          src={ImageRestaurants}
          alt={"ImageRestaurants"}
          width={555}
          height={555}
          className={s.image}
        />
      </div>
    </>
  )
}
