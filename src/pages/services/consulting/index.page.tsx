import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { Consulting } from "@/features/services"

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
      <Contacts />
    </>
  )
}

export default ConsultingPage
