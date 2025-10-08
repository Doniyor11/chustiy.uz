import Head from "next/head"
import React from "react"

import { Contacts } from "@/widgets"

import { ProjectsInfo } from "@/features/projects"

import ImageThree from "@/shared/assets/images/aqlvoy_oshpaz_book.png"
import ImageTwo from "@/shared/assets/images/non_book.png"
import ImageFour from "@/shared/assets/images/o'zbegim_book.png"
import ImageOne from "@/shared/assets/images/quyoshli_365_kun-2.png"
import { HeadBanner } from "@/shared/ui"

const BooksPage = () => {
  return (
    <>
      <Head>
        <title>chustiy.uz - Kitoblar </title>
      </Head>
      <main className={"container"}>
        <HeadBanner
          title={"Kitoblar"}
          subtitle={
            "O'zmi ko'pmi yig'gan tajribalarimizdan kelib chiqgan holda shu paytgacha bir nechta kitoblar chop etdik va yana bir nechtasi ustida ish olib borilmoqda"
          }
        />
        <ProjectsInfo
          image={ImageOne}
          title={"Quyoshli 365 kun"}
          description={
            'Toshkentdagi "O\'zekspomarkaz"da o\'zbek milliy taomlari haqida ingliz tilidagi "365 days of Sun" va rus tilidagi "365 дней солнца" kitoblarining taqdimoti bo\'lib o\'tdi.<br/><br/>Dinara Do\'ltayeva (loyiha muallifi), Bahriddin Chustiy, Madina Ro\'zmatova (matn mualliflari), Andrey Arakelyan (suratlar muallifi) ning kitobi "Welcome to Uzbekistan" turkumidagi navbatdagi loyiha hisoblanadi. Ushbu kitobga mamlakatimizning turli hududlarida tayyorlangan 365 ta taom retsepti kiritilgan.'
          }
        />
        <ProjectsInfo
          image={ImageTwo}
          title={"Non"}
          description={
            '"NON" - o‘zbek nonlarining 50 ta retsepti, patir va tandir haqida hayratlanarli ma’lumotlarni o‘z ichiga olgan kitob. Bu kitob milliy taomlar, urf-odatlar va mehmondo‘stlik haqida. Unda taniqli o‘zbek oshpazi, ko‘p yillardan buyon an’anaviy taomlarni xorijda targ‘ib qilib kelayotgan inson, restorator Bahriddin Chustiyning bolalik xotiralari, sayohatlari va izlanishlari jamlangan.'
          }
        />
        <ProjectsInfo
          image={ImageThree}
          title={"Aqlvoy Oshpaz"}
          description={
            "Bolalarga sog'lom ovqatlanishni ta'minlash maqsadida\n" +
            'maktabgacha ta\'lim muassasalari uchun "AQLVOY OSHPAZ"\n' +
            "retseptlar kitobi taniqli oshpaz Bahriddin Chustiy bilan\n" +
            "hamkorlikda mamlakatimiz maktabgacha ta'lim\n" +
            "tizimi uchun ishlab chiqildi."
          }
        />
        <ProjectsInfo
          image={ImageFour}
          title={"O'zbegim"}
          description={
            "O'zbegim kitobi Komil Allamjonov boshchiligada yozilgan va unda millatimizning madaniyati, turmush tarzi, milliy taomlari, va o'ziga xosligi eng chiroyli lavhalarda aks etgan! Kitobdagi taomga aloqador barsa sahifalar Bahriddin Chustiy qalamiga mansub va suratlar Andrey Arakelyan tomonidan olingan!"
          }
        />
      </main>
      <Contacts />
    </>
  )
}

export default BooksPage
