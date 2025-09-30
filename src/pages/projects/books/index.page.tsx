import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { BooksList, ProjectsInfo } from "@/features/projects"

import ImageOne from "@/shared/assets/images/image-books-page.png"
import { HeadBanner } from "@/shared/ui"

const BooksPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Biz haqimizda </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Kitoblar"}
          subtitle={
            "Bu mijozlar buyurtmasiga ko‘ra turli tadbirlar uchun (to‘y, yubiley, korporativ, seminar, tug‘ilgan kun va h.k.) joyida yoki oldindan tayyorlab taom pishiradigan professional oshpazdir."
          }
        />
        <ProjectsInfo
          image={ImageOne}
          title={"Kitoblar"}
          description={
            "Men — oshpazlikka oshno bo‘lgan, har bir taomni qalbdan his qilib tayyorlaydigan shaxsman. O‘n yildan ortiq tajribam davomida turli oshxonalar bilan ishladim: milliy an’anaviy taomlardan tortib, zamonaviy fusion yo‘nalishlarigacha. Har bir mehmon uchun shaxsiy yondashuv va mukammal ta’m — mening ustuvor vazifamdir."
          }
        />
        <BooksList />
      </main>
      <Contacts />
    </>
  )
}

export default BooksPage
