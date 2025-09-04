import { Box, Button, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageOne from "@/shared/assets/images/main-image-1.png"
import ImageTwo from "@/shared/assets/images/main-image-2.png"

import s from "./styles.module.scss"

export const MainBanner = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <Box className={s.sectionLeft}>
          <Text className={"section-title"}>
            Dunyoni o‘zbek kapkiri bilan zabt etish mumkin.
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Group - o‘zbek oshpazlik san’ati va milliy taomlarini butun
            dunyo qalbidan iliq joy olib kelayotgan jamoa. Har bir taomimizda
            mehru e’tibor, milliy an’analar va zamonaviy ta’m uyg‘unligi
            mujassam.
          </Text>
          <Flex align={"center"} gap={20}>
            <Button className={"btn-filled__back"}>Biz haqimizda</Button>

            <Button w={147} className={"btn-outline"}>
              Kontaktlar
            </Button>
          </Flex>
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
          <Text className={"section-title sm"}>
            Xalqaro mezonida mukammal catering xizmati
          </Text>
          <Text className={"section-subtitle"}>
            Chustiy Catering - xalqaro darajada xizmat ko‘rsatib kelayotgan
            professional jamoa. Biz yurtimizda ham, uning tashqarisida ham yirik
            gastronomik loyihalarni ishonch va mahorat bilan amalga oshiramiz.
            Har bir tadbir bu mukammal reja, nozik ta’m uyg‘unligi va estetik
            taqdimotning uyg‘unlashuvi. Chustiy Catering bilan sizning
            bayramingiz xalqaro mezonlarda, milliy ruhda va unutilmas
            taassurotlar bilan o‘tadi.
          </Text>
          <Button className={"btn-outline"} rightSection={<IconRight />}>
            Batafsil
          </Button>
        </Box>
      </div>
    </>
  )
}
