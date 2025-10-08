import { Anchor, Box, Collapse, Flex, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"

import IconDown from "@/shared/assets/images/icon-chevron-down-xl.svg"
// import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
// import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
// import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
// import IconX from "@/shared/assets/images/icons/icon-x.svg"
// import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"
import { range } from "@/shared/libs/functions.ts"

import s from "./styles.module.scss"

export const LocationInfo = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        {range(1).map((index) => (
          <div key={index} className={s.box}>
            <div className={s.map}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae23bed10cb0097d6c55947b8a2665fdefda02bf175608f8ca6c1aff47540ed57&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
              ></iframe>
            </div>
            <div className={s.boxRight}>
              <Text className={"section-title sm"}>Zapara by Chustiy</Text>
              <div className={s.descriptionWrapper}>
                <Text className={s.descriptionTarget}>
                  Zapara by Chustiy <IconDown />
                </Text>
                <Collapse in={true}>
                  <Text className={s.text}>
                    "Zapara by Chustiy" bilan uslub va did olamiga xush
                    kelibsiz! Bizning restoran xodimlari uchun formalarimiz
                    shunchaki kiyim emas, balki muassasangizning o‘ziga xosligi
                    va professionalligini ta’kidlaydigan san’atdir.
                  </Text>
                </Collapse>
              </div>
              <Box className={s.contactBox}>
                <Text className={s.label}>Biz bilan aloqa</Text>

                <Anchor href={"tel:+998 97 178 00 55"} className={s.link}>
                  <IconPhone />
                  +998 97 178 00 55
                </Anchor>
                {/*<Link href={"#"} className={s.link}>*/}
                {/*    <IconWhatsapp/>*/}
                {/*    0812 3456 7890 (Whatsapp)*/}
                {/*</Link>*/}
                {/*<Anchor href={"mailto:support@chustiy.id"} className={s.link}>*/}
                {/*    <IconEmail/>*/}
                {/*    support@chustiy.id*/}
                {/*</Anchor>*/}
                <Flex className={s.socials} align={"center"} gap={20}>
                  {/*<Anchor h={"#"}>*/}
                  {/*    <IconFacebook/>*/}
                  {/*</Anchor>*/}
                  <Link
                    href={
                      "https://www.instagram.com/zapara.uz?igsh=cnVkcnl2OWQ1MWFo"
                    }
                  >
                    <IconInstagram />
                  </Link>
                  {/*<Anchor h={"#"}>*/}
                  {/*    <IconX/>*/}
                  {/*</Anchor>*/}
                  {/*<Anchor h={"#"}>*/}
                  {/*    <IconYoutube/>*/}
                  {/*</Anchor>*/}
                </Flex>
              </Box>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
