import { Modal, SegmentedControl } from "@mantine/core"
import React, { useState } from "react"
import { Case, Switch } from "react-if"

import { useFormModalStore } from "@/widgets/form-modal/model"

import {
  EmailForm,
  PhoneNumberForm,
  TelegramForm,
} from "@/features/contact-forms"

import s from "./styles.module.scss"

export const FormModal = () => {
  const [value, setValue] = useState("email")
  const { openModal, setOpenModal } = useFormModalStore()
  return (
    <Modal
      centered
      size={600}
      radius={30}
      padding={26}
      title={"Ariza qoldirish"}
      opened={openModal}
      onClose={() => setOpenModal(false)}
      classNames={{
        title: "section-title sm",
      }}
    >
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
    </Modal>
  )
}
