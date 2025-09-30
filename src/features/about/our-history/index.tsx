import { Text, Timeline } from "@mantine/core"
import AOS from "aos"
import "aos/dist/aos.css"
import cx from "clsx"
import React, { useEffect } from "react"

import s from "./styles.module.scss"

export const OurHistory = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])

  return (
    <div className={s.sectionWrapper}>
      <Text className={"section-title sm"}>
        Tarixga nazar solamiz. O’tmishdan hozirgi vaqtgacha qilgan ishlarimiz
      </Text>
      <div className={s.timelineWrapper}>
        <Timeline
          className={s.timeline}
          active={1}
          bulletSize={22}
          color={"#FFA80A"}
          lineWidth={4}
          classNames={{
            itemBullet: s.timelineBullet,
            item: s.timelineItem,
          }}
        >
          <Timeline.Item h={210} />
          <Timeline.Item h={210} />
          <Timeline.Item h={210} />
          <Timeline.Item h={210} />
          <Timeline.Item h={210} />
          <Timeline.Item h={210} />
        </Timeline>
        <div className={s.boxes}>
          <div className={cx(s.box, s.active)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2020</Text>
              <Text className={s.title}>Texnologik yuksalish</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Dunyo pandemiya bilan kurashayotgan bir paytda, biz raqamli
              yechimlarga bo‘lgan talab ortganini sezib, masofaviy xizmat
              ko‘rsatishni rivojlantirdik. Yangi mahsulotlar yaratildi va bir
              nechta muhim hamkorliklar yo‘lga qo‘yildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2021</Text>
              <Text className={s.title}>
                Innovatsiyalar va yangi yo‘nalishlar
              </Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Bu yil innovatsiyalarga katta urg‘u berildi. Sun’iy intellekt va
              avtomatlashtirish yo‘nalishlarida ishlay boshladik. Mijozlarga
              taqdim etilayotgan xizmatlar sifat jihatdan yangi bosqichga
              ko‘tarildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2022</Text>
              <Text className={s.title}>
                Muvaffaqiyatli loyihalar va kengayish
              </Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Yirik korxona va tashkilotlar bilan hamkorlik qilgan holda, bir
              nechta muvaffaqiyatli loyihalar hayotga tatbiq etildi.
              Kompaniyamiz tarkibi kengayib, yangi ofis ochildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2023</Text>
              <Text className={s.title}>Mahalliydan globalga</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Bizning xizmatlarimiz nafaqat O‘zbekiston bozorida, balki xalqaro
              darajada ham talab qilina boshladi. Tashqi hamkorlar bilan ishlash
              tajribasi ortdi, eksport salohiyati oshdi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2024</Text>
              <Text className={s.title}>
                Transformatsiya va raqamli o‘zgarishlar
              </Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Ichki tizimlar raqamlashtirildi, biznes jarayonlar
              avtomatlashtirildi. Biz xizmat ko‘rsatish tezligi va sifatini
              sezilarli darajada yaxshiladik. Mahsulotlarimiz soni va sifati
              jihatdan sezilarli yutuqlarga erishildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2025</Text>
              <Text className={s.title}>Yetakchilik sari dadil qadamlar</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Bugun biz yurtimizdagi ilg‘or IT kompaniyalaridan biriga
              aylanganmiz. Yangi avlod texnologiyalariga asoslangan yechimlar,
              zamonaviy mahsulotlar va kuchli jamoa bizni kelajak sari
              ilhomlantirmoqda. Biz nafaqat xizmat ko‘rsatamiz, balki sanoatni
              o‘zgartirayotgan kuchga aylanyapmiz.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
