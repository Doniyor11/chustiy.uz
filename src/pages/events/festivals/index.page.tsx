import Head from "next/head"
import React from "react"

import { Partners } from "@/features/about"
import { FestivalsInfo, FestivalsList } from "@/features/events"
import { MainGallery } from "@/features/main"

import { HeadBanner } from "@/shared/ui"

const FestivalsPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Festivallar </title>
      </Head>
      <main>
        <div className={"container"}>
          <HeadBanner
            title={"Festivallar"}
            subtitle={
              "Bu mijozlar buyurtmasiga ko‘ra turli tadbirlar uchun (to‘y, yubiley, korporativ, seminar, tug‘ilgan kun va h.k.) joyida yoki oldindan tayyorlab taom pishiradigan professional oshpazdir."
            }
          />
        </div>
        <FestivalsList />
        <div className={"container"}>
          <MainGallery />
          <FestivalsInfo />
        </div>
      </main>
      <Partners />
    </>
  )
}

export default FestivalsPage
