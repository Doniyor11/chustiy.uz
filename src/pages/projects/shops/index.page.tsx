import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { ProjectsInfo } from "@/features/projects"

import { LocationInfo } from "@/entities"

import ImageOne from "@/shared/assets/images/image-about-1.png"
import { HeadBanner } from "@/shared/ui"

const ShopsPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Biz haqimizda </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Do’konlar"}
          subtitle={
            "Bu mijozlar buyurtmasiga ko‘ra turli tadbirlar uchun (to‘y, yubiley, korporativ, seminar, tug‘ilgan kun va h.k.) joyida yoki oldindan tayyorlab taom pishiradigan professional oshpazdir."
          }
        />
        <ProjectsInfo
          image={ImageOne}
          title={"Do’konlar"}
          description={
            "Men — oshpazlikka oshno bo‘lgan, har bir taomni qalbdan his qilib tayyorlaydigan shaxsman. O‘n yildan ortiq tajribam davomida turli oshxonalar bilan ishladim: milliy an’anaviy taomlardan tortib, zamonaviy fusion yo‘nalishlarigacha. Har bir mehmon uchun shaxsiy yondashuv va mukammal ta’m — mening ustuvor vazifamdir."
          }
        />
        <LocationInfo />
      </main>
      <Contacts />
    </>
  )
}

export default ShopsPage
