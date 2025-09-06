import { Box, Text } from "@mantine/core"
import React, { FC } from "react"

import s from "./styles.module.scss"

interface IProps {
  title: string
  subtitle: string
  m?: number | string
}

export const HeadBanner: FC<IProps> = ({ subtitle, title, m = "24px 0 0" }) => {
  return (
    <Box className={s.box} m={m}>
      <Text className={"section-title md"}>{title}</Text>
      <Text className={s.subtitle}>{subtitle}</Text>
    </Box>
  )
}
