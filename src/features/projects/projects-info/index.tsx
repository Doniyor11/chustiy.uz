import { Box, Text } from "@mantine/core"
import Image from "next/image"
import React, { FC } from "react"

import ImageOne from "@/shared/assets/images/image-about-1.png"

import s from "./styles.module.scss"

interface IProps {
  title: string
  description: string
}

export const ProjectsInfo: FC<IProps> = ({ description, title }) => {
  return (
    <div className={s.sectionWrapper}>
      <Box>
        <Text className={"section-title"}>{title}</Text>
        <Text className={"section-subtitle"}>{description}</Text>
      </Box>
      <Image src={ImageOne} alt={"image-chustiy"} className={s.image} />
    </div>
  )
}
