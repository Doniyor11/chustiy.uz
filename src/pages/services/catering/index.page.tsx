import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { MainGallery } from "@/features/main"
import { Benefits, ServiceTypes } from "@/features/services"

import { HeadBanner } from "@/shared/ui"

const CateringPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Katering </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Katering"}
          subtitle={"Katering xizmati kimlar uchun va nima uchun kerak"}
        />
        <ServiceTypes />
        <Benefits />

        <MainGallery />
      </main>
      <Contacts />
    </>
  )
}

export default CateringPage
