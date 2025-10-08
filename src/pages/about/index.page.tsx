import Head from "next/head"
import React from "react"

import {
  AboutSection,
  OurHistory,
  OurMission,
  OurStaff,
  Partners,
} from "@/features/about"
import { Comments } from "@/features/services"

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
      <Comments />
    </>
  )
}

export default AboutPage
