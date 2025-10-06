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
        Tarixga nazar solamiz. Oxirgi 5 yil ichida qilgan loyihalarimiz!
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
              <Text className={s.year}>2021</Text>
              <Text className={s.title}>
                {" "}
                Dubay "Ekspo-2020"da tayyorlangan 1000 kg mega palov
              </Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              2021-yilda Dubayda oʻtkazilgan "Ekspo-2020" butunjahon
              koʻrgazmasida Oʻzbekiston kuni doirasida 1000 kilogramlik mega
              palov tayyorlagan
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2022</Text>
              <Text className={s.title}>
                Donald Lu bilan tayyorlangan palov
              </Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              O‘zbekiston palovsiz taom emas: Janubiy va Markaziy Osiyo ishlari
              bo‘yicha vazir yordamchisi Donald Lu dunyoga mashhur oshpaz
              Bahriddin Chustiy bilan sevimli milliy taomni tayyorladi. Yaxshi
              taom va an’analarni baham ko‘rish bizni -- amerikaliklar va
              o‘zbekistonliklarni -- birlashtiradi!
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2023</Text>
              <Text className={s.title}>Mahalliydan globalga</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              2023-yilning 17-18-iyun kunlari Londondagi Potters Fields bog‘ida
              O‘zbekiston madaniyati va taomlari festivali 2023 bo‘lib o‘tdi,
              unda 2000kg osh tayyorlandi, o‘zbek madaniyati, oshxonasi va
              hunarmandchiligi keng auditoriyaga namoyish etildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2024</Text>
              <Text className={s.title}>Uzbek Culture and Food Festival</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              2024-yilning 8-9-iyun kunlari Londondagi Tower Bridge ko'prigi
              oldida O‘zbekiston madaniyati va taomlari festivali 2024 bo‘lib
              o‘tdi, unda 2000kg osh tayyorlandi, o‘zbek madaniyati, oshxonasi
              va hunarmandchiligi keng auditoriyaga namoyish etildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2025</Text>
              <Text className={s.title}>Caravan of Uzbekistan loyihasi</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Turizm sohasini rivojlantirish va xalqaro sayyohlarda katta
              qiziqish uyg‘otish maqsadida O‘zbekiston Turizm qo‘mitasi va
              "Chustiy Group" kompaniyasi tomonidan 5-17 iyun kunlari Buyuk
              Britaniyaning 6 ta yirik shahrida "O‘zbekiston karvoni" nomli
              madaniy-gastronomik sayohat tashkil etildi.
            </Text>
          </div>
          <div className={cx(s.box)}>
            <div data-aos="fade-right" className={s.texts}>
              <Text className={s.year}>2025</Text>
              <Text className={s.title}>Yangi loyiha "Parvarda"</Text>
            </div>
            <Text data-aos="fade-left" className={s.description}>
              Bahriddin Chustiy boshchiligada Toshkentning markaziy
              ko'chalaridan birida, ilk bor o'zbek milliy shirinliklari qahvaxonasi
              ochilmoqda, va "Parvarda" deb nomlanadi!
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
