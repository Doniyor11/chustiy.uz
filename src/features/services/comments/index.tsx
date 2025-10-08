import {Carousel} from "@mantine/carousel"
import {Box, Flex, Rating, Text} from "@mantine/core"
import {useMediaQuery} from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import IconQuotes from "@/shared/assets/images/icons/icon-quotes.svg"
import ImageRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageAvatar1 from "@/shared/assets/images/comments/Hakim_Ganiev.jpg"
import ImageAvatar2 from "@/shared/assets/images/comments/Murod_Nazarov.jpg"
import ImageAvatar3 from "@/shared/assets/images/comments/Zafar_Khashimov.jpg"

import s from "./styles.module.scss"

export const Comments = () => {
    const matches = useMediaQuery("(max-width: 576px)")

    return (
        <div className={s.sectionWrapper}>
            <Text className={"section-title sm"}>Ishonch bilan aytilgan so‘zlar</Text>

            <Carousel
                loop
                height={matches ? 332 : 450}
                slideGap={24}
                slideSize={matches ? "100%" : 528}
                align={matches ? "start" : "center"}
                slidesToScroll={"auto"}
                classNames={{
                    controls: s.carouselControls,
                    control: s.carouselControl,
                }}
                nextControlIcon={<ImageRight/>}
                previousControlIcon={<ImageRight/>}
            >
                <Carousel.Slide>
                    <div className={s.card}>
                        <IconQuotes/>
                        <Text className={s.description}>
                            "Ijtimoiy tarmoqlar orqali juda ham ko'p do'st ortirganman, shu qatorda Bahriddin Chustiy
                            bilan ham birinchi online tanishganmiz, yozgan postlari va fikrlari bilan juda ham katta
                            qiziqish uyg'otgan va Bahriddin akani kuzatishni boshlaganman"
                        </Text>
                        <div className={s.cardBottom}>
                            <Box className={s.cardBottomImg}>
                                <Image
                                    className={s.image}
                                    src={ImageAvatar3}
                                    alt={"Zafar Khashimov"}
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Flex className={s.info}>
                                <Text className={s.name}>Zafar Khashimov</Text>
                                <Rating value={5} size="md" color={"#FFC500"}/>
                            </Flex>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={s.card}>
                        <IconQuotes/>
                        <Text className={s.description}>
                            "Bu insonni ijtomoiy tarmoqlarda ko'rib uni san'ati umuman o'zbek milliy
                            taomlariga yondashuvini ko'rib qiziqish bildirib yurgan edim, keyin esa Bahriddin ochgan
                            restoranlardan biriga Chustiy cuisine, keyin Sal-Sal ga borib haqiqatdan bu bolani mehri
                            umuman san'atiga nisbatdan yondashuvi o'zgachaligini ko'rdim
                        </Text>
                        <div className={s.cardBottom}>
                            <Box className={s.cardBottomImg}>
                                <Image
                                    className={s.image}
                                    src={ImageAvatar2}
                                    alt={"Murod Nazarov"}
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Flex className={s.info}>
                                <Text className={s.name}>Murod Nazarov</Text>
                                <Rating value={5} size="md" color={"#FFC500"}/>
                            </Flex>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className={s.card}>
                        <IconQuotes/>
                        <Text className={s.description}>
                            "Bahriddin ser g'ayrat va tadbirkorlik qobiliyatiga ham ega inson. O'zbekistonda yangi
                            uslubda ishlayotgn oshxonalarni ochib yoshlarga o'rnak bo'lib kelmoqda. O'zbek taomlari
                            haqida internet tarmoqlarda ajoyib qilib so'zlamoqda"
                        </Text>
                        <div className={s.cardBottom}>
                            <Box className={s.cardBottomImg}>
                                <Image
                                    className={s.image}
                                    src={ImageAvatar1}
                                    alt={"Xakim Ganiev"}
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Flex className={s.info}>
                                <Text className={s.name}>Xakim Ganiev</Text>
                                <Rating value={5} size="md" color={"#FFC500"}/>
                            </Flex>
                        </div>
                    </div>
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}
