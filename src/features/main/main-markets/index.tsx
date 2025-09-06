import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageRestaurants from "@/shared/assets/images/restaurants-image.png"

import s from "./styles.module.scss"

export const MainMarkets = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
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
