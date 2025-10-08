import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageRestaurants from "@/shared/assets/images/restaurants-image.png"

import s from "./styles.module.scss"

export const MainMarkets = () => {
  const router = useRouter()
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Text className={"section-title sm"}>Do’konlar</Text>
          <Text className={"section-subtitle"}>
            Men 25 yildan ortiq oshpazlik va restoran sohasida faoliyat yuritib
            kelaman, shu kungacha yuzlab tadbirlarni o'tkazganman, va
            tajribamdan kelib chiqgan holda aytamanki HoReCa yo'nalishida
            ishlaydigan har bir xodimning ko'rinishi va ustidagi kiyimi juda ham
            muhim, ko'p yillar davomida kiyim tiktirish biz uchun ozmi ko'pmi
            muammollar tug'dirgan shuning uchun o'zimizning "Zapara" brendimizga
            asos soldik!
          </Text>
          <Button
            onClick={() => router.push("/projects/shops")}
            className={"btn-outline"}
            rightSection={<IconRight />}
          >
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
