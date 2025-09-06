import { Anchor, Box, Collapse, Flex, Text } from "@mantine/core"
import React from "react"

import IconDown from "@/shared/assets/images/icon-chevron-down-xl.svg"
import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconX from "@/shared/assets/images/icons/icon-x.svg"
import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"
import { range } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const LocationInfo = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        {range(2).map((index) => (
          <div key={index} className={s.box}>
            <div className={s.map}>
              <iframe
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47974.15629348509!2d69.14957108637032!3d41.27872972651097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba0e6a03275%3A0xe466670d37a6aff0!2sAKSU!5e0!3m2!1sru!2s!4v1757157894843!5m2!1sru!2s"
              />
            </div>
            <div className={s.boxRight}>
              <Text className={"section-title sm"}>
                Aksu (Xalqlar do’stligi)
              </Text>
              <div className={s.descriptionWrapper}>
                <Text className={s.descriptionTarget}>
                  Description <IconDown />
                </Text>
                <Collapse in={true}>
                  <Text className={s.text}>
                    The Silvero Imperial Bowl is the perfect fusion of style and
                    durability. Crafted from premium stainless steel, this bowl
                    is designed to elevate your kitchen experience while
                    standing the test of time.
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
        ))}
      </div>
    </>
  )
}
