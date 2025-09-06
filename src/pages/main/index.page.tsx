import Head from "next/head"

import { Contacts } from "@/widgets"

import {
  Books,
  ConsultingService,
  MainBanner,
  MainGallery,
  MainMarkets,
  MainRecipes,
} from "@/features/main"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Asosiy </title>
      </Head>
      <main className={"container"}>
        <MainBanner />
        <ConsultingService />
        <Books />
        <MainGallery />
        <MainMarkets />
        <MainRecipes />
      </main>
      <Contacts />
    </>
  )
}

export default HomePage
