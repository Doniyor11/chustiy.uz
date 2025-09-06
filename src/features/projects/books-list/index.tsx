import { Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageBook from "@/shared/assets/images/book-image.png"

import s from "./styles.module.scss"

export const BooksList = () => {
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
      <div className={s.card}>
        <Image className={s.image} src={ImageBook} alt={"ImageBook"} />
        <Text>Kitob 4</Text>
      </div>
    </div>
  )
}
