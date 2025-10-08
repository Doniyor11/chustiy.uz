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
        <title>Chustiy.uz: O'zbek Milliy Taomlari, Retseptlar va Pazandalik Sirlari</title>
          <meta name="description" content="Chustiy.uz - Chust va O'zbekistonning betakror taomlari, eng sara retseptlar, qadimiy madaniyat sirlari va yangiliklari."/>
          <meta property="og:title" content="Taom bu – nafaqat ovqat, bu – tuyg'u, xotira va san'at." key="key-title" />
          <meta property="og:url" content="https://chustiy.uz/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.chustiy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-image-1.1ffaded4.png&w=640&q=75" />
          <meta property="og:description" content="Chustiy.uz - O'zbek Milliy Taomlari, Retseptlar va Pazandalik Sirlari." />
          <link rel="canonical" href="https://chustiy.uz/" />
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
