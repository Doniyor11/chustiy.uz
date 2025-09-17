import { Anchor, Box, Flex, SegmentedControl, Text } from "@mantine/core"
import cx from "clsx"
import React, { useState } from "react"
import { Case, Switch } from "react-if"

import {
  EmailForm,
  PhoneNumberForm,
  TelegramForm,
} from "@/features/contact-forms"

import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconX from "@/shared/assets/images/icons/icon-x.svg"
import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"

import s from "./styles.module.scss"

const ContactsPage = () => {
  const [value, setValue] = useState("email")

  return (
    <div className={cx(s.sectionWrapper, "container")}>
      <div className={s.sectionLeft}>
        <Text className={"section-title md"}>Contact Our Sales Team</Text>
        <Text className={"section-subtitle"}>
          We’re here to help you every step of the way. Whether you have
          questions about our products, need assistance with an order, or want
          to share your feedback, we’d love to hear from you!
        </Text>
        <Flex className={s.contacts}>
          <Box className={s.contactBox}>
            <Text className={s.label}>Reach Us Directly</Text>

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
          </Box>
          <Box className={s.contactBox}>
            <Text className={s.label}>Business Hours</Text>

            <Text className={s.text}>
              {" "}
              <span>Monday to Friday:</span> 9 AM - 6 PM
            </Text>
            <Text className={s.text}>
              {" "}
              <span>Saturday:</span> 10 AM - 4 PM
            </Text>
            <Text className={s.text}>
              {" "}
              <span>Sunday:</span> Closed
            </Text>
          </Box>
        </Flex>

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
      </div>
      <div className={s.sectionRight}>
        <Text className={"section-title sm"}>Biz bilan bog’lanish</Text>
        <Text className={"section-subtitle"}>
          Xizmatlarimiz, buyurtmalarimiz yoki hamkorlik imkoniyatlari haqida
          savollaringiz bormi? Bizning jamoamiz doimo sizga yo&apos;l
          ko&apos;rsatish va to&apos;g&apos;ri yordam berish uchun shu yerda.
        </Text>

        <SegmentedControl
          value={value}
          onChange={setValue}
          className={s.controlRoot}
          classNames={{
            control: s.control,
            label: s.controlLabel,
            indicator: s.controlIndicator,
          }}
          data={[
            { label: "Email", value: "email" },
            { label: "Telefon raqam", value: "tel-num" },
            { label: "Telegram", value: "telegram" },
          ]}
        />
        <Switch>
          <Case condition={value === "email"}>
            <EmailForm />
          </Case>
          <Case condition={value === "tel-num"}>
            <PhoneNumberForm />
          </Case>
          <Case condition={value === "telegram"}>
            <TelegramForm />
          </Case>
        </Switch>
      </div>
    </div>
  )
}

export default ContactsPage
