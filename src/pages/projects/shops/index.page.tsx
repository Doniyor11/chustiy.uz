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
        <title>chustiy.uz - Do’konlar </title>
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
            "Men 25 yildan ortiq oshpazlik va restoran sohasida faoliyat yuritib kelaman, shu kungacha yuzlab tadbirlarni o'tkazganman, va tajribamdan kelib chiqgan holda aytamanki HoReCa yo'nalishida ishlaydigan har bir xodimning ko'rinishi va ustidagi kiyimi juda ham muhim, ko'p yillar davomida kiyim tiktirish biz uchun ozmi ko'pmi muammollar tug'dirgan shuning uchun o'zimizning \"Zapara\" brendimizga asos soldik!"
          }
        />
        <LocationInfo />
      </main>
      <Contacts />
    </>
  )
}

export default ShopsPage
