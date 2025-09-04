import { Button, Flex, Input, Textarea } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const matches = useMediaQuery("(max-width: 576px)")

  return (
    <form className={s.form}>
      <Flex
        gap={matches ? 16 : 20}
        mb={20}
        direction={matches ? "column" : "row"}
      >
        <Input.Wrapper label={"Ism"} className={s.inputWrapper}>
          <Input placeholder={"Enter your name"} />
        </Input.Wrapper>
        <Input.Wrapper label={"Email"} className={s.inputWrapper}>
          <Input type={"email"} placeholder={"E.g name@email.com"} />
        </Input.Wrapper>
      </Flex>
      <Textarea
        label={"Message"}
        placeholder={"Type your message here"}
        className={s.textarea}
      />
      <Flex justify={"flex-end"} mt={32}>
        <Button w={160} className={"btn-filled__back"} type={"submit"}>
          Send
        </Button>
      </Flex>
    </form>
  )
}
