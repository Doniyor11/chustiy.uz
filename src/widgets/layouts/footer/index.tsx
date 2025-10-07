import { Anchor, Box, Flex, Text } from "@mantine/core"
import Link from "next/link"

import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"

import s from "./styles.module.scss"

export const Footer = () => {
  return (
    <div className={s.footerWrapper}>
      <div className={s.footer}>
        <Box className={s.aboutBox}>
          <Link className={s.logo} href="/">
            Chustiy
          </Link>
          <Text className={s.text}>
            Bahriddin Chustiy – oshpazlik bu mening hayotimning ajralmas qismi.
            Yillar davomida pishirgan har bir taomimda xalqimizning
            urf-odatlari, mehr va samimiyati mujassam bo‘lgan. Restoranlarda,
            festivallarda va kitoblarimda bir maqsadim bor: milliy taomlarimizni
            dunyo bilan bo‘lishish va ularning qadriyatini yanada keng yoyish.
          </Text>
        </Box>

        <Flex className={s.boxWrapper}>
          <Flex gap={32} w={"100%"}>
            <Box maw={140} className={s.contactBox}>
              <Text className={s.label}>Sahifalar</Text>

              <Link href={"/"} className={s.link}>
                Biz haqimizida
              </Link>
              <Link href={"/"} className={s.link}>
                Catering
              </Link>
              <Link href={"/"} className={s.link}>
                Konsalting
              </Link>
              <Link href={"/"} className={s.link}>
                Restoranlar
              </Link>
            </Box>
            <Box maw={260} className={s.contactBox}>
              <Text className={s.label}>Sahifalar</Text>

              <Link href={"/"} className={s.link}>
                Kitoblar
              </Link>
              <Link href={"/"} className={s.link}>
                Media
              </Link>
              <Link href={"/"} className={s.link}>
                Do’konlar
              </Link>
              <Link href={"/"} className={s.link}>
                Loyihalar
              </Link>
              <Link href={"/"} className={s.link}>
                Retseptlar
              </Link>
            </Box>
          </Flex>
          <Box maw={270} className={s.contactBox}>
            <Text className={s.label}>Biz bilan bog’lanish</Text>

            <Anchor href={"tel:+998970950019"} className={s.link}>
              <IconPhone />
              +998 97 095 00 19
            </Anchor>
            <Anchor href={"tel:+998901190055"} className={s.link}>
              <IconWhatsapp />
              +998 90 119 00 55 (Whatsapp)
            </Anchor>
            <Anchor href={"mailto:hello@chustiy.com"} className={s.link}>
              <IconEmail />
              hello@chustiy.com
            </Anchor>
            <Flex className={s.socials} align={"center"} gap={20}>
              <Anchor
                href={
                  "https://www.facebook.com/share/16yKMkxjwv/?mibextid=wwXIfr"
                }
                target={"_blank"}
              >
                <IconFacebook />
              </Anchor>
              <Anchor
                href={
                  "https://www.instagram.com/chustiy.uz?igsh=ZTBpdmZmZnZ6bTEx"
                }
                target={"_blank"}
              >
                <IconInstagram />
              </Anchor>
              <Anchor
                href={"https://youtube.com/@ochoqboshida?si=PmltLr8A2nV_9WvX"}
                target={"_blank"}
              >
                <IconYoutube />
              </Anchor>
            </Flex>
          </Box>
        </Flex>
      </div>
      <Flex className={s.bottomTexts}>
        <Text>© 2025 Chustiy. All rights reserved worldwide</Text>
        <Text>
          Powered by{" "}
          <Link href={"https://www.qalam.agency/"}>Qalam Agency</Link>
        </Text>
      </Flex>
    </div>
  )
}
