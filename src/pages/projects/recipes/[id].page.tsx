import Head from "next/head"
import React from "react"

import { FullRecipe } from "@/features/projects"

import { HeadBanner } from "@/shared/ui"

const RecipePage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Biz haqimizda </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Retseptlar"}
          subtitle={
            "Bu mijozlar buyurtmasiga ko‘ra turli tadbirlar uchun (to‘y, yubiley, korporativ, seminar, tug‘ilgan kun va h.k.) joyida yoki oldindan tayyorlab taom pishiradigan professional oshpazdir."
          }
        />
        <FullRecipe />
      </main>
    </>
  )
}

export default RecipePage
