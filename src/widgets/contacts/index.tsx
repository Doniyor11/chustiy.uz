import { SegmentedControl, Text } from "@mantine/core"
import React, { useState } from "react"
import { Case, Switch } from "react-if"

import { EmailForm } from "@/features/contact-forms"

import s from "./index.module.scss"

export const Contacts = () => {
  const [value, setValue] = useState("email")

  return (
    <div className={s.sectionWrapper}>
      <div className={s.box}>
        <Text className={"section-title sm"}>Biz bilan bog’lanish</Text>
        <Text className={"section-subtitle"}>
          Xizmatlarimiz, buyurtmalarimiz yoki hamkorlik imkoniyatlari haqida
          savollaringiz bormi? Bizning jamoamiz doimo sizga yo'l ko'rsatish va
          to'g'ri yordam berish uchun shu yerda.
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
            <EmailForm />
          </Case>
          <Case condition={value === "telegram"}>
            <EmailForm />
          </Case>
        </Switch>
      </div>
    </div>
  )
}
