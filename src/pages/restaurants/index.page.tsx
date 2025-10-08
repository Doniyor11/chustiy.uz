import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { MainGallery } from "@/features/main"

import { RestaurantsInfo } from "@/entities"

import { HeadBanner } from "@/shared/ui"

const RestaurantsPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Restoranlar </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Restoranlarim mening hayotim"}
          subtitle={
            "Men — oshpazlikka oshno bo‘lgan, har bir taomni qalbdan his qilib tayyorlaydigan shaxsman. Yigirma besh yildan tajribam davomida turli oshxonalar bilan ishladim: milliy an’anaviy taomlardan tortib, zamonaviy fusion yo‘nalishlarigacha. Har bir mehmon uchun shaxsiy yondashuv va mukammal ta’m — mening ustuvor vazifamdir."
          }
        />
        <RestaurantsInfo />
        <MainGallery />
      </main>
      <Contacts />
    </>
  )
}
export default RestaurantsPage
