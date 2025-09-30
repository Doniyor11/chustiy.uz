import { Anchor, Box, Collapse, Flex, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import IconDown from "@/shared/assets/images/icon-chevron-down-xl.svg"
import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconX from "@/shared/assets/images/icons/icon-x.svg"
import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"
import ImageRestaurants2 from "@/shared/assets/images/restaurants-image-3.jpg"
import ImageRestaurants1 from "@/shared/assets/images/restaurants-image-4.png"

import s from "./styles.module.scss"

export const RestaurantsInfo = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <div className={s.box}>
          <div className={s.map}>
            <Image src={ImageRestaurants1} alt={"ImageRestaurants1"} />
          </div>
          <div className={s.boxRight}>
            <Text className={"section-title sm"}>Aksu (Xalqlar do’stligi)</Text>
            <div className={s.descriptionWrapper}>
              <Text className={s.descriptionTarget}>
                Description <IconDown />
              </Text>
              <Collapse in={true}>
                <Text className={s.text}>
                  The Silvero Imperial Bowl is the perfect fusion of style and
                  durability. Crafted from premium stainless steel, this bowl is
                  designed to elevate your kitchen experience while standing the
                  test of time.
                </Text>
              </Collapse>
            </div>
            <Box className={s.contactBox}>
              <Text className={s.label}>Biz bilan aloqa</Text>

              <Anchor href={"tel:(021) 8272 3922"} className={s.link}>
                <IconPhone />
                (021) 8272 3922
              </Anchor>
              <Anchor href={"#"} className={s.link}>
                <IconWhatsapp />
                0812 3456 7890 (Whatsapp)
              </Anchor>
              <Anchor href={"mailto:support@chustiy.id"} className={s.link}>
                <IconEmail />
                support@chustiy.id
              </Anchor>
              <Flex className={s.socials} align={"center"} gap={20}>
                <Anchor h={"#"}>
                  <IconFacebook />
                </Anchor>
                <Anchor h={"#"}>
                  <IconInstagram />
                </Anchor>
                <Anchor h={"#"}>
                  <IconX />
                </Anchor>
                <Anchor h={"#"}>
                  <IconYoutube />
                </Anchor>
              </Flex>
            </Box>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.map}>
            <Image src={ImageRestaurants2} alt={"ImageRestaurants1"} />
          </div>
          <div className={s.boxRight}>
            <Text className={"section-title sm"}>Aksu (Navoiy ko’cha)</Text>
            <div className={s.descriptionWrapper}>
              <Text className={s.descriptionTarget}>
                Description <IconDown />
              </Text>
              <Collapse in={true}>
                <Text className={s.text}>
                  The Silvero Imperial Bowl is the perfect fusion of style and
                  durability. Crafted from premium stainless steel, this bowl is
                  designed to elevate your kitchen experience while standing the
                  test of time.
                </Text>
              </Collapse>
            </div>
            <Box className={s.contactBox}>
              <Text className={s.label}>Biz bilan aloqa</Text>

              <Anchor href={"tel:(021) 8272 3922"} className={s.link}>
                <IconPhone />
                (021) 8272 3922
              </Anchor>
              <Anchor href={"#"} className={s.link}>
                <IconWhatsapp />
                0812 3456 7890 (Whatsapp)
              </Anchor>
              <Anchor href={"mailto:support@chustiy.id"} className={s.link}>
                <IconEmail />
                support@chustiy.id
              </Anchor>
              <Flex className={s.socials} align={"center"} gap={20}>
                <Anchor h={"#"}>
                  <IconFacebook />
                </Anchor>
                <Anchor h={"#"}>
                  <IconInstagram />
                </Anchor>
                <Anchor h={"#"}>
                  <IconX />
                </Anchor>
                <Anchor h={"#"}>
                  <IconYoutube />
                </Anchor>
              </Flex>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}
