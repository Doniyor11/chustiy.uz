import { Anchor, Box, Collapse, Flex, Text } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import ImageRestaurants3 from "@/shared/assets/images/parvarda-oshxona.png"
// import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
// import IconX from "@/shared/assets/images/icons/icon-x.svg"
// import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"
import ImageRestaurants2 from "@/shared/assets/images/restaurants-image-3.jpg"
import ImageRestaurants4 from "@/shared/assets/images/restaurants-image-4.png"

import s from "./styles.module.scss"

export const RestaurantsInfo = () => {
  return (
    <>
      <div className={s.sectionWrapper}>
        <div className={s.box}>
          <div className={s.map}>
            <Image src={ImageRestaurants3} alt={"Parvarda Restaurant"} />
          </div>
          <div className={s.boxRight}>
            <Text className={"section-title sm"}>Parvarda</Text>
            <div className={s.descriptionWrapper}>
              <Text className={s.descriptionTarget}>Parvarda pastry</Text>
              <Collapse in={true}>
                <Text className={s.text}>
                  O'zbek milliy shirinliklari, tez kunda Toshkentning markazi
                  bo'lgan C1 da ochiladi va mehmonlarni qabul qilishni
                  boshlaydi, Loyiha muallifi Bahriddin Chustiy va chef Yahyo
                  Allamov
                </Text>
              </Collapse>
            </div>
            <Box className={s.contactBox}>
              <Text className={s.label}>Biz bilan aloqa</Text>

              <Link href={"tel:+998333099995"} className={s.link}>
                <IconPhone />
                +998 33 309 99 95
              </Link>
              <Link href={"info@parvarda.uz"} className={s.link}>
                <IconEmail />
                info@parvarda.uz
              </Link>
              <Flex className={s.socials} align={"center"} gap={20}>
                <Link href={"https://www.facebook.com/par.var.da.pastry"}>
                  <IconFacebook />
                </Link>
                <Link
                  href={
                    "https://www.instagram.com/parvarda_pastry?igsh=MTN1cmZob28wMmRoMg=="
                  }
                >
                  <IconInstagram />
                </Link>
              </Flex>
            </Box>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.map}>
            <Image src={ImageRestaurants2} alt={"Aksu restaurant"} />
          </div>
          <div className={s.boxRight}>
            <Text className={"section-title sm"}>Aksu (Navoiy ko’cha)</Text>
            <div className={s.descriptionWrapper}>
              <Text className={s.descriptionTarget}>
                Aksu (Navoiy koʻcha) uchun tavsif
              </Text>
              <Collapse in={true}>
                <Text className={s.text}>
                  "Aksu (Navoiy koʻcha) – bu Oʻzbek va Qozoq milliy taomlarining
                  ajoyib uygʻunligi joyi. Mazali Beshbarmak, Uygʻur lazzatlari
                  va shinam, oilaviy muhit. Biz madaniyat va sifatni taomlarga
                  solamiz."
                </Text>
              </Collapse>
            </div>
            <Box className={s.contactBox}>
              <Text className={s.label}>Biz bilan aloqa</Text>

              <Anchor href={"tel:+998 71 209 33 22"} className={s.link}>
                <IconPhone />
                +998 55 518 33 22
              </Anchor>
              <Anchor href={"mailto:support@chustiy.id"} className={s.link}>
                <IconEmail />
                info@uzaksu.uz
              </Anchor>
              <Flex className={s.socials} align={"center"} gap={20}>
                <Link href={"https://www.facebook.com/AksubyChustiy"}>
                  <IconFacebook />
                </Link>
                <Link href={"https://www.instagram.com/aksu.uz/"}>
                  <IconInstagram />
                </Link>
                {/*<Anchor h={"#"}>*/}
                {/*  <IconX />*/}
                {/*</Anchor>*/}
                {/*<Anchor h={"#"}>*/}
                {/*  <IconYoutube />*/}
                {/*</Anchor>*/}
              </Flex>
            </Box>
          </div>
        </div>
        <div className={s.box}>
          <div className={s.map}>
            <Image src={ImageRestaurants4} alt={"Parvarda Restaurant"} />
          </div>
          <div className={s.boxRight}>
            <Text className={"section-title sm"}>Aksu (Chig'atoy)</Text>
            <div className={s.descriptionWrapper}>
              <Text className={s.descriptionTarget}>
                Aksu (Chig'atoy) uchun tavsif
              </Text>
              <Collapse in={true}>
                <Text className={s.text}>
                  Aksu restoranidagi zamonaviy va klassik o‘zbek taomlari
                  mashhur oshpaz Bahriddin Chustiy rahbarligida yangi va yengil
                  ko‘rinish kasb etmoqda.
                </Text>
              </Collapse>
            </div>
            <Box className={s.contactBox}>
              <Text className={s.label}>Biz bilan aloqa</Text>

              <Anchor href={"tel:+998 71 209 33 22"} className={s.link}>
                <IconPhone />
                +998 55 518 33 22
              </Anchor>
              <Anchor href={"mailto:support@chustiy.id"} className={s.link}>
                <IconEmail />
                info@uzaksu.uz
              </Anchor>
              <Flex className={s.socials} align={"center"} gap={20}>
                <Link href={"https://www.facebook.com/AksubyChustiy"}>
                  <IconFacebook />
                </Link>
                <Link href={"https://www.instagram.com/aksu.uz/"}>
                  <IconInstagram />
                </Link>
                {/*<Anchor h={"#"}>*/}
                {/*  <IconX />*/}
                {/*</Anchor>*/}
                {/*<Anchor h={"#"}>*/}
                {/*  <IconYoutube />*/}
                {/*</Anchor>*/}
              </Flex>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}
