import { Box, Text } from "@mantine/core"
import Image from "next/image"
import React, { FC } from "react"

import s from "./styles.module.scss"

interface IProps {
  title: string
  description: string
  image: any
}

export const ProjectsInfo: FC<IProps> = ({ description, title, image }) => {
  return (
    <div className={s.sectionWrapper}>
      <Box>
        <Text className={"section-title"}>{title}</Text>
        <Text className={"section-subtitle"}>{description}</Text>
      </Box>
      <Image
        src={image}
        alt={"image-chustiy"}
        className={s.image}
        width={642}
        height={428}
      />
    </div>
  )
}
