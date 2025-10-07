import { Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import IconBlur from "@/shared/assets/images/icons/icon-blur.svg"
import IconClock from "@/shared/assets/images/icons/icon-clock.svg"
import IconCrown from "@/shared/assets/images/icons/icon-crown.svg"
import IconEmoji from "@/shared/assets/images/icons/icon-emoji-happy.svg"
import ImageOne from "@/shared/assets/images/image-about-2.png"

import s from "./styles.module.scss"

export const OurMission = () => {
  return (
    <div className={s.sectionWrapper}>
      <Text className={cx(s.sectionTitle, "section-title sm")}>
        <span>Bizning vazifamiz</span>
        Biz nafaqat mazali taomlar, balki unutilmas taassurotlar yaratamiz. Har
        bir buyurtma, har bir loyiha biz uchun o‘ziga xos ahamiyatga ega.
      </Text>

      <Flex className={s.box}>
        <Image
          width={642}
          height={586}
          src={ImageOne}
          alt={"image-about"}
          className={s.image}
        />
        <div className={s.boxRight}>
          <Text className={"section-title"}>Bizning qadriyatlarimiz nima?</Text>
          <div className={s.cards}>
            <div className={s.card}>
              <IconCrown />
              <Text className={s.cardTitle}>
                Sifatdan hech qachon chekinmaymiz
              </Text>
              <Text className={s.cardSubtitle}>
                Har bir detalda mukammallik. Chunki sifatdan hech qachon
                chekinmaymiz.
              </Text>
            </div>
            <div className={s.card}>
              <IconClock />
              <Text className={s.cardTitle}>Vaqt sinovidan o‘tgan</Text>
              <Text className={s.cardSubtitle}>
                Vaqt sinovidan o‘tgan mukammallik — har bir loyihamizda aks
                etadi.
              </Text>
            </div>
            <div className={s.card}>
              <IconBlur />
              <Text className={s.cardTitle}>Barqaror rivojlanish</Text>
              <Text className={s.cardSubtitle}>
                Doimiy o‘sish, yangilanish va mukammallikka intilish — barqaror
                rivojlanish yo‘limiz
              </Text>
            </div>
            <div className={s.card}>
              <IconEmoji />
              <Text className={s.cardTitle}>Mijozlarga g‘amxo‘rlik</Text>
              <Text className={s.cardSubtitle}>
                Biz nafaqat xizmat ko‘rsatamiz, balki har bir mijoz ehtiyojiga
                samimiy e’tibor beramiz.
              </Text>
            </div>
          </div>
        </div>
      </Flex>
    </div>
  )
}
