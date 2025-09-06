import { Text } from "@mantine/core"
import React from "react"

import IconOne from "@/shared/assets/images/icons/icon-car.svg"
import IconThree from "@/shared/assets/images/icons/icon-certificate.svg"
import IconFour from "@/shared/assets/images/icons/icon-chef-hat.svg"
import IconTwo from "@/shared/assets/images/icons/icon-clipboard-list.svg"

import s from "./styles.module.scss"

export const Benefits = () => {
  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title"} ta={"center"}>
        Afzalliklar
      </Text>
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.icon}>
            <IconOne />
          </div>
          <Text className={s.cardTitle}>
            Tezkor va ishonchli yetkazib berish{" "}
          </Text>
          <Text className={s.cardSubtitle}>
            Buyurtmalaringizni belgilangan vaqtda, issiq va tayyor holda
            yetkazamiz — hech qanday kechikishlarsiz.
          </Text>
        </div>
        <div className={s.card}>
          <div className={s.icon}>
            <IconTwo />
          </div>
          <Text className={s.cardTitle}>Sizga mos menyu – har bir detalda</Text>
          <Text className={s.cardSubtitle}>
            Tadbir turiga, didingizga va mehmonlar ehtiyojiga mos maxsus
            menyularni birga ishlab chiqamiz.
          </Text>
        </div>
        <div className={s.card}>
          <div className={s.icon}>
            <IconThree />
          </div>
          <Text className={s.cardTitle}>
            Halal kafolat — ishonch bilan tanlang
          </Text>
          <Text className={s.cardSubtitle}>
            Barcha mahsulotlar shariat talablariga mos. Halal sertifikatlangan
            va ishonchli manbalardan tanlab olingan.
          </Text>
        </div>
        <div className={s.card}>
          <div className={s.icon}>
            <IconFour />
          </div>
          <Text className={s.cardTitle}>
            Ustalar jamoasi — taom va xizmatda sifat
          </Text>
          <Text className={s.cardSubtitle}>
            Oshpazlarimiz va xizmat ko‘rsatuvchi jamoamiz tajribali, e’tiborli
            va har bir tafsilotga jiddiy yondashadi.
          </Text>
        </div>
      </div>
    </div>
  )
}
