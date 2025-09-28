import { Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageBook2 from "@/shared/assets/images/book-image-2.png"
import ImageBook3 from "@/shared/assets/images/book-image-3.png"
import ImageBook4 from "@/shared/assets/images/book-image-4.png"
import ImageBook1 from "@/shared/assets/images/book-image.png"

import s from "./styles.module.scss"

export const BooksList = () => {
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook2} alt={"ImageBook"} />
        <Text>Kitob 1</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook1} alt={"ImageBook"} />
        <Text>Kitob 2</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook3} alt={"ImageBook"} />
        <Text>Kitob 3</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook4} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
    </div>
  )
}
