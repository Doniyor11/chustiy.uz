import {Box, Button, Text} from "@mantine/core"
import Image from "next/image"
import React from "react"

import {useFormModalStore} from "@/widgets/form-modal/model"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageOne from "@/shared/assets/images/main-image-2.png"

import s from "./styles.module.scss"

export const Consulting = () => {
    const {setOpenModal} = useFormModalStore()
    return (
        <div className={s.sectionWrapper}>
            <div className={s.box}>
                <Image
                    src={ImageOne}
                    alt={"image-one"}
                    width={642}
                    height={540}
                    className={s.image}
                />
                <Box>
                    <Text className={"section-title sm"}>Restoran ochish</Text>
                    <Text className={"section-subtitle"}>
                        Biz xalqaro miqyosda faoliyat yuritayotgan professional restoran consulting kompaniyasimiz.
                        Hozirga qadar 7 ta muvaffaqiyatli restoran loyihasini yaratganmiz:
                        Oshxona.uz, Sal Sal, Chustiy Cousiniy, Aksu, Kebab and Rice va Afsona.family, Parvarda.
                        Har bir loyiha o‘ziga xos konsept, ta’m va dizayni bilan mehmonlar mehrini qozongan va bozorda
                        muvaffaqiyatli faoliyat yuritmoqda.Bizning jamoamiz nafaqat O‘zbekistonda, balki xorijda ham
                        muvaffaqiyatli loyihalarni amalga
                        oshirgan. Hozirgacha biz quyidagi davlatlarda restoranlarni yaratishda ishtirok
                        etganmiz:
                        <b>Saudiya Arabistoni (Madina)</b><br/>
                        <b>Qozog‘iston (Aktobe, Almata, Astana, Aterao)</b><br/>

                        <b>O‘zbekiston (Toshkent, Namangan)</b><br/>

                        <b>Bu tajriba bizga turli madaniyatlar, bozor sharoitlari va mijozlar didini chuqur tushunish
                            imkonini berdi.</b>
                    </Text>
                    <Button
                        className={"btn-outline"}
                        rightSection={<IconRight/>}
                        onClick={() => setOpenModal(true)}
                    >
                        Ariza qoldirish
                    </Button>
                </Box>
            </div>
            <div className={s.box}>
                <Image
                    src={ImageOne}
                    alt={"image-one"}
                    width={642}
                    height={540}
                    className={s.image}
                />
                <Box>
                    <Text className={"section-title sm"}>Menyu yaratish</Text>
                    <Text className={"section-subtitle"}>
                        Bizning consulting xizmatimiz restoran ochish yoki mavjud loyihani rivojlantirishni istagan
                        tadbirkorlar uchun to‘liq yechim taklif qiladi.Biz quyidagilarni amalga oshiramiz:
                        <br/>
                        <b>- Konsept va menyu ishlab chiqish – auditoriyangiz didiga mos original g‘oya va menyu yaratamiz.</b>
                        <br/>
                        <b>- Biznes-reja va moliyaviy hisob-kitob – investitsiya, xarajat va daromadlarni aniq rejalashtiramiz.</b>
                        <br/>
                        <b>- Interyer va brending bo‘yicha maslahatlar – dizayn va vizual yechim orqali brend imijini mustahkamlaymiz.</b>
                        <br/>
                        <b>- Ishchi kuchi tanlash va o‘qitish – professional jamoa shakllantiramiz va xizmat madaniyatini oshiramiz.</b>
                        <br/>
                        <b>- Marketing va reklama strategiyasi – bozorda brendingizni tanitish va mijozlar oqimini oshirish uchun strategiya ishlab chiqamiz.</b>
                        <br/>
                        <b>- Ishga tushirish jarayonida to‘liq qo‘llab-quvvatlash – ochilishdan to barqaror ishlashgacha siz bilan birga bo‘lamiz.</b>
                        <br/>
                       Bizning maqsadimiz — har bir mijoz g‘oyasini muvaffaqiyatli, rentabelli va sevimli restoran brendiga aylantirish.
                    </Text>
                    <Button
                        className={"btn-outline"}
                        rightSection={<IconRight/>}
                        onClick={() => setOpenModal(true)}
                    >
                        Ariza qoldirish
                    </Button>
                </Box>
            </div>
        </div>
    )
}
