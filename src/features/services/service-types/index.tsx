import { Box, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import ImageOne from "@/shared/assets/images/image-service-1.png"
import ImageTwo from "@/shared/assets/images/image-service-2.png"
import ImageThree from "@/shared/assets/images/image-service-3.png"

import s from "./styles.module.scss"

export const ServiceTypes = () => {
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title md"}>Xizmatlar turlari</Text>

      <Box className={s.box}>
        <Image
          src={ImageOne}
          alt={"image-service"}
          className={s.image}
          width={496}
          height={196}
        />
        <Box>
          <Text className={cx(s.boxTitle, "section-title sm")}>
            To’y va bazmlar
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering — bu nafaqat taomlar, balki unutilmas taassurotlar.
            Biz sizning to‘y, yubiley, korporativ va boshqa bayramlaringizni
            mazali va chiroyli tashkil qilish uchun barcha zarur xizmatlarni
            taqdim etamiz. Mahalliy va milliy taomlarning betakror lazzati,
            sifatli xizmat va yuksak mehmondo‘stlik — bizning asosiy
            qadriyatlarimiz.
          </Text>
        </Box>
      </Box>
      <Box className={s.box}>
        <Image
          src={ImageTwo}
          alt={"image-service"}
          className={s.image}
          width={496}
          height={196}
        />
        <Box>
          <Text className={cx(s.boxTitle, "section-title sm")}>
            Konferensiyalar
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering — bu nafaqat taomlar, balki unutilmas taassurotlar.
            Biz sizning to‘y, yubiley, korporativ va boshqa bayramlaringizni
            mazali va chiroyli tashkil qilish uchun barcha zarur xizmatlarni
            taqdim etamiz. Mahalliy va milliy taomlarning betakror lazzati,
            sifatli xizmat va yuksak mehmondo‘stlik — bizning asosiy
            qadriyatlarimiz.
          </Text>
        </Box>
      </Box>
      <Box className={s.box}>
        <Image
          src={ImageThree}
          alt={"image-service"}
          className={s.image}
          width={496}
          height={196}
        />
        <Box>
          <Text className={cx(s.boxTitle, "section-title sm")}>
            Maxsus kechalar
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering — bu nafaqat taomlar, balki unutilmas taassurotlar.
            Biz sizning to‘y, yubiley, korporativ va boshqa bayramlaringizni
            mazali va chiroyli tashkil qilish uchun barcha zarur xizmatlarni
            taqdim etamiz. Mahalliy va milliy taomlarning betakror lazzati,
            sifatli xizmat va yuksak mehmondo‘stlik — bizning asosiy
            qadriyatlarimiz.
          </Text>
        </Box>
      </Box>
    </div>
  )
}
