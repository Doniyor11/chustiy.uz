import Head from "next/head"
import React from "react"

import { FullRecipe } from "@/features/projects"

import { HeadBanner } from "@/shared/ui"

const RecipePage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Retseptlar </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Retseptlar"}
          subtitle={
            "Shu kungacha yuzlab retspetlarni sinab ko'rib tayyorlaganmiz, va eng saralarini siz azizlarga taqdim qilamiz"
          }
        />
        <FullRecipe />
      </main>
    </>
  )
}

export default RecipePage
