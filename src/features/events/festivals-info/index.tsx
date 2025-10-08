import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { useFormModalStore } from "@/widgets/form-modal/model"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageOne from "@/shared/assets/images/main-image-2.png"

import s from "./styles.module.scss"

export const FestivalsInfo = () => {
  const { setOpenModal } = useFormModalStore()
  return (
    <div className={s.sectionWrapper}>
      <div className={s.box}>
        <Box>
          <Text className={"section-title sm"}>
            Sizning bayramingiz — bizning mas’uliyatimiz
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering — bu nafaqat taomlar, balki unutilmas taassurotlar.
            Biz sizning to‘y, yubiley, korporativ va boshqa bayramlaringizni
            mazali va chiroyli tashkil qilish uchun barcha zarur xizmatlarni
            taqdim etamiz. Mahalliy va milliy taomlarning betakror lazzati,
            sifatli xizmat va yuksak mehmon do‘stlik — bizning asosiy
            qadriyatlarimiz.
          </Text>
          <Button
            className={"btn-outline"}
            rightSection={<IconRight />}
            onClick={() => setOpenModal(true)}
          >
            Ariza qoldirish
          </Button>
        </Box>
        <Image
          src={ImageOne}
          alt={"image-one"}
          width={642}
          height={540}
          className={s.image}
        />
      </div>
      <div className={s.box}>
        <Box>
          <Text className={"section-title sm"}>
            Sizning bayramingiz — bizning mas’uliyatimiz
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering — bu nafaqat taomlar, balki unutilmas taassurotlar.
            Biz sizning to‘y, yubiley, korporativ va boshqa bayramlaringizni
            mazali va chiroyli tashkil qilish uchun barcha zarur xizmatlarni
            taqdim etamiz. Mahalliy va milliy taomlarning betakror lazzati,
            sifatli xizmat va yuksak mehmon do‘stlik — bizning asosiy
            qadriyatlarimiz.
          </Text>
          <Button
            className={"btn-outline"}
            rightSection={<IconRight />}
            onClick={() => setOpenModal(true)}
          >
            Ariza qoldirish
          </Button>
        </Box>
        <Image
          src={ImageOne}
          alt={"image-one"}
          width={642}
          height={540}
          className={s.image}
        />
      </div>
    </div>
  )
}
