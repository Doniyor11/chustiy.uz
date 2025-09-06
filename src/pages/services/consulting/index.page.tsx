import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { Comments, Consulting } from "@/features/services"

import { HeadBanner } from "@/shared/ui"

const ConsultingPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Konsalting </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Konsalting"}
          subtitle={
            "Konsultatsiya kimlar uchun va qanday muammolarni hal qiladi"
          }
        />
        <Consulting />
      </main>
      <Comments />
      <Contacts />
    </>
  )
}

export default ConsultingPage
