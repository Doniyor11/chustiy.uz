import Head from "next/head"
import React from "react"

import {
  AboutSection,
  OurHistory,
  OurMission,
  OurStaff,
  Partners,
} from "@/features/about"

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Biz haqimizda </title>
      </Head>
      <main className={"container"}>
        <AboutSection />
        <OurMission />
        <OurHistory />
      </main>
      <OurStaff />
      <Partners />
    </>
  )
}

export default AboutPage
