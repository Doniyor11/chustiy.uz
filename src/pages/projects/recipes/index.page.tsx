import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { ProjectsInfo, RecipesList } from "@/features/projects"

import ImageOne from "@/shared/assets/images/image-chustiy-3.png"
import { HeadBanner } from "@/shared/ui"

const RecipesPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Retseptlar </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Retseptlar"}
          subtitle={
            "Bu mijozlar buyurtmasiga ko‘ra turli tadbirlar uchun (to‘y, yubiley, korporativ, seminar, tug‘ilgan kun va h.k.) joyida yoki oldindan tayyorlab taom pishiradigan professional oshpazdir."
          }
        />
        <ProjectsInfo
          image={ImageOne}
          title={"Retseptlar"}
          description={
            "Men — oshpazlikka oshno bo‘lgan, har bir taomni qalbdan his qilib tayyorlaydigan shaxsman. O‘n yildan ortiq tajribam davomida turli oshxonalar bilan ishladim: milliy an’anaviy taomlardan tortib, zamonaviy fusion yo‘nalishlarigacha. Har bir mehmon uchun shaxsiy yondashuv va mukammal ta’m — mening ustuvor vazifamdir."
          }
        />
        <RecipesList />
      </main>
      <Contacts />
    </>
  )
}

export default RecipesPage
