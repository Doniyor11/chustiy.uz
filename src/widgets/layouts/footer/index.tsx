import { Anchor, Box, Flex, Text } from "@mantine/core"
import Link from "next/link"

import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconX from "@/shared/assets/images/icons/icon-x.svg"
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
        </Flex>
      </div>
      <Flex className={s.bottomTexts}>
        <Text>© 2025 Chustiy. All rights reserved worldwide</Text>
        <Text>Powered by Qalam Agency</Text>
      </Flex>
    </div>
  )
}
