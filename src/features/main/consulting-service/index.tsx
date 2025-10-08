import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import ImageOne from "@/shared/assets/images/consulting-image.png"
import IconClock from "@/shared/assets/images/icons/icon-clock.svg"
import IconGps from "@/shared/assets/images/icons/icon-gps.svg"
import IconLike from "@/shared/assets/images/icons/icon-like.svg"
import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import IconUnlimited from "@/shared/assets/images/icons/icon-unlimited.svg"
import ImageTwo from "@/shared/assets/images/restaurants-image-2.png"

import s from "./styles.module.scss"

export const ConsultingService = () => {
  const router = useRouter()
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Text className={"section-title sm"}>Konsalting xizmati</Text>
          <Text className={"section-subtitle"}>
            Ko‘p yillik tajribaga ega oshpaz va restorator Bahriddin Chustiy
            tomonidan ochilgan consulting xizmati — restoran va umumiy
            ovqatlanish sohasida biznes yaratish, rivojlantirish hamda
            boshqarishda professional va samarali yechimlar taqdim etadi.
          </Text>
          <div className={s.cards}>
            <div className={s.card}>
              <IconUnlimited />
              <Text className={s.cardTitle}>Cheksiz imkoniyatlar</Text>
              <Text className={s.cardSubtitle}>
                Har bir mijoz uchun moslashtirilgan, chegarasiz yechimlar va
                strategiyalar
              </Text>
            </div>
            <div className={s.card}>
              <IconClock />
              <Text className={s.cardTitle}>Uzoq yillik tajribalar</Text>
              <Text className={s.cardSubtitle}>
                Restoran sohasida to‘plangan boy tajribalar va mukammal
                boshqaruv ko‘nikmalari.
              </Text>
            </div>
            <div className={s.card}>
              <IconGps />
              <Text className={s.cardTitle}>Aniq maqsad</Text>
              <Text className={s.cardSubtitle}>
                Rivojlanish strategiyasini to‘g‘ri belgilash va unga erishishda
                yo‘l-yo‘riq berish.
              </Text>
            </div>
            <div className={s.card}>
              <IconLike />
              <Text className={s.cardTitle}>Natija kafolati</Text>
              <Text className={s.cardSubtitle}>
                Sifatli maslahat va amaliy yordam orqali barqaror natija.
              </Text>
            </div>
          </div>
        </Box>
        <Image
          src={ImageOne}
          alt={"image-one"}
          width={555}
          height={555}
          className={s.image}
        />
      </div>

      <div className={s.sectionWrapper}>
        <Image
          src={ImageTwo}
          alt={"image-one"}
          width={555}
          height={555}
          className={s.image}
        />
        <Box className={s.sectionLeft}>
          <Text className={"section-title sm"}>Restoranlar</Text>
          <Text className={"section-subtitle"}>
            <b>Bahriddin Chustiy</b> o‘zining oshpazlik faoliyati davomida
            mehmonlarga nafaqat mazali taomlar, balki unutilmas taassurotlar
            taqdim etuvchi restoranlar tarmog‘ini yaratdi.{" "}
            <b>Oshxona.uz, Chustiy Cuisines, Tez Food, Sal-Sal, Parvarda, Kebab and Rice</b> va
            <b>Aksu</b> restoranlari shaharning turli nuqtalarida mehmonlarni
            doimo ochiq qo‘llar bilan kutib oladi.
          </Text>
          <Button
            className={"btn-outline"}
            rightSection={<IconRight />}
            onClick={() => router.push("/restaurants")}
          >
            Batafsil
          </Button>
        </Box>
      </div>
    </>
  )
}
