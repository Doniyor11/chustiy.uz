import { Carousel } from "@mantine/carousel"
import { Anchor, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"
import IconMail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"

import s from "./styles.module.scss"

export const FestivalsList = () => {
  const matches = useMediaQuery("(max-width: 992px)")

  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>Festival ro’yxati</Text>

      <Carousel
        loop
        height={matches ? 320 : 420}
        slideGap={24}
        slideSize={matches ? "100%" : 528}
        align={matches ? "start" : "center"}
        slidesToScroll={"auto"}
        classNames={{
          controls: s.carouselControls,
          control: s.carouselControl,
        }}
        nextControlIcon={<ImageRight />}
        previousControlIcon={<ImageRight />}
      >
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.title}>Yangi yoshlar festivali</Text>

            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.festivalContact}>
              <Text className={s.label}>Festival kontaktlari</Text>

              <Flex gap={4} mb={12}>
                <Anchor className={s.link} href={"tel:(021) 8272 3922"}>
                  <IconPhone /> (021) 8272 3922
                </Anchor>
                <Anchor className={s.link}>
                  <IconWhatsapp /> 0812 3456 7890 (Whatsapp)
                </Anchor>
              </Flex>
              <Anchor className={s.link} href={"mailto:support@chustiy.id"}>
                <IconMail />
                support@chustiy.id
              </Anchor>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.title}>Yangi yoshlar festivali</Text>

            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.festivalContact}>
              <Text className={s.label}>Festival kontaktlari</Text>

              <Flex gap={4} mb={12}>
                <Anchor className={s.link} href={"tel:(021) 8272 3922"}>
                  <IconPhone /> (021) 8272 3922
                </Anchor>
                <Anchor className={s.link}>
                  <IconWhatsapp /> 0812 3456 7890 (Whatsapp)
                </Anchor>
              </Flex>
              <Anchor className={s.link} href={"mailto:support@chustiy.id"}>
                <IconMail />
                support@chustiy.id
              </Anchor>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.title}>Yangi yoshlar festivali</Text>

            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.festivalContact}>
              <Text className={s.label}>Festival kontaktlari</Text>

              <Flex gap={4} mb={12}>
                <Anchor className={s.link} href={"tel:(021) 8272 3922"}>
                  <IconPhone /> (021) 8272 3922
                </Anchor>
                <Anchor className={s.link}>
                  <IconWhatsapp /> 0812 3456 7890 (Whatsapp)
                </Anchor>
              </Flex>
              <Anchor className={s.link} href={"mailto:support@chustiy.id"}>
                <IconMail />
                support@chustiy.id
              </Anchor>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.title}>Yangi yoshlar festivali</Text>

            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.festivalContact}>
              <Text className={s.label}>Festival kontaktlari</Text>

              <Flex gap={4} mb={12}>
                <Anchor className={s.link} href={"tel:(021) 8272 3922"}>
                  <IconPhone /> (021) 8272 3922
                </Anchor>
                <Anchor className={s.link}>
                  <IconWhatsapp /> 0812 3456 7890 (Whatsapp)
                </Anchor>
              </Flex>
              <Anchor className={s.link} href={"mailto:support@chustiy.id"}>
                <IconMail />
                support@chustiy.id
              </Anchor>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={s.card}>
            <Text className={s.title}>Yangi yoshlar festivali</Text>

            <Text className={s.description}>
              “Taomlar juda mazali, xizmat esa yuqori darajada! Menyuni bizga
              moslab tuzishdi, hammasi halal va vaqtida yetkazildi. Yana albatta
              buyurtma beramiz!”
            </Text>
            <div className={s.festivalContact}>
              <Text className={s.label}>Festival kontaktlari</Text>

              <Flex gap={4} mb={12}>
                <Anchor className={s.link} href={"tel:(021) 8272 3922"}>
                  <IconPhone /> (021) 8272 3922
                </Anchor>
                <Anchor className={s.link}>
                  <IconWhatsapp /> 0812 3456 7890 (Whatsapp)
                </Anchor>
              </Flex>
              <Anchor className={s.link} href={"mailto:support@chustiy.id"}>
                <IconMail />
                support@chustiy.id
              </Anchor>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
