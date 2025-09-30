import { Box, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageOne from "@/shared/assets/images/image-about-1.png"

import s from "./styles.module.scss"

export const AboutSection = () => {
  return (
    <div className={s.sectionWrapper}>
      <Box>
        <Text className={"section-title md"}>
          Taom bu – nafaqat ovqat, bu — tuyg‘u, xotira va san’at.
        </Text>
        <Text className={"section-subtitle"} mb={12}>
          Men — oshpazlikka oshno bo‘lgan, har bir taomni qalbdan his qilib
          tayyorlaydigan shaxsman. Yigirma besh yildan ortiq tajribam davomida
          turli oshxonalar bilan ishladim: milliy an’anaviy taomlardan tortib,
          zamonaviy fusion yo‘nalishlarigacha. Har bir mehmon uchun shaxsiy
          yondashuv va mukammal ta’m — mening ustuvor vazifamdir.
        </Text>
      </Box>
      <Image
        src={ImageOne}
        alt={"ImageOne"}
        width={638}
        height={428}
        className={s.image}
      />
    </div>
  )
}
