import { Button, Flex, Input, Textarea } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { useSendMessageQuery } from "@/features/contact-forms/api/query"
import { IEmailFormTypes } from "@/features/contact-forms/email-form/types"

import s from "../styles.module.scss"

export const EmailForm = () => {
  const matches = useMediaQuery("(max-width: 992px)")

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IEmailFormTypes>()

  const { mutate, isPending } = useSendMessageQuery(() => {
    reset({
      fullName: "",
      email: "",
      message: "",
    })
  })

  const onSubmit = (data: IEmailFormTypes) => {
    mutate(
      `<b>Ma’lumot:</b>\n` +
        `<b>Ism:</b> ${data.fullName}\n` +
        `<b>Email:</b> ${data.email}\n` +
        `<b>Message:</b> ${data.message}\n`,
    )
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap={matches ? 16 : 20}
        mb={16}
        direction={matches ? "column" : "row"}
      >
        <Controller
          name={"fullName"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper label={"Ism"} className={s.inputWrapper}>
              <Input required placeholder={"Enter your name"} {...field} />
            </Input.Wrapper>
          )}
        />

        <Controller
          name={"email"}
          control={control}
          render={({ field }) => (
            <Input.Wrapper label={"Email"} className={s.inputWrapper}>
              <Input
                required
                type={"email"}
                placeholder={"E.g name@email.com"}
                {...field}
              />
            </Input.Wrapper>
          )}
        />
      </Flex>

      <Controller
        name={"message"}
        control={control}
        render={({ field }) => (
          <Textarea
            required
            label={"Message"}
            placeholder={"Type your message here"}
            className={s.textarea}
            {...field}
          />
        )}
      />

      <Flex justify={"flex-end"} mt={32}>
        <Button
          w={160}
          type={"submit"}
          className={"btn-filled__back"}
          loading={isPending}
          disabled={!isDirty || !isValid}
        >
          Send
        </Button>
      </Flex>
    </form>
  )
}
