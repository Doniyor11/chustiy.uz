import {Anchor, Box, Flex, SegmentedControl, Text} from "@mantine/core"
import cx from "clsx"
import React, {useState} from "react"
import {Case, Switch} from "react-if"

import {EmailForm, PhoneNumberForm, TelegramForm,} from "@/features/contact-forms"

import IconFacebook from "@/shared/assets/images/icons/icon-facebook.svg"
import IconInstagram from "@/shared/assets/images/icons/icon-instagram.svg"
import IconPhone from "@/shared/assets/images/icons/icon-phone.svg"
import IconEmail from "@/shared/assets/images/icons/icon-sms.svg"
import IconWhatsapp from "@/shared/assets/images/icons/icon-whatsapp.svg"
import IconYoutube from "@/shared/assets/images/icons/icon-youtube.svg"

import s from "./styles.module.scss"
import Link from "next/link";

const ContactsPage = () => {
    const [value, setValue] = useState("email")

    return (
        <div className={cx(s.sectionWrapper, "container")}>
            <div className={s.sectionLeft}>
                <Text className={"section-title md"}>Biz bilan bog'laning</Text>
                <Text className={"section-subtitle"}>
                    Biz sizga har bir bosqichda yordam berishga tayyormiz. Mahsulotlarimiz haqida savolingiz bo‘lsa,
                    xizmatlarimizga bog‘liq yordam kerak bo‘lsa yoki fikr-mulohazangizni bildirmoqchi bo‘lsangiz -
                    sizdan eshitishdan mamnun bo‘lamiz!
                </Text>
                <Flex className={s.contacts}>
                    <Box className={s.contactBox}>
                        <Text className={s.label}>Kontaklar</Text>

                        <Anchor href={"tel:+998 90 119 00 55"} className={s.link}>
                            <IconPhone/>
                            +998 90 119 00 55
                        </Anchor>
                        <Anchor href={"#"} className={s.link}>
                            <IconWhatsapp/>
                            0812 3456 7890 (Whatsapp)
                        </Anchor>
                        <Anchor href={"mailto:support@chustiy.id"} className={s.link}>
                            <IconEmail/>
                            support@chustiy.id
                        </Anchor>
                    </Box>
                    <Box className={s.contactBox}>
                        <Text className={s.label}>Ish vaqti</Text>
                        <Text className={s.text}>
                            Bizga 24/7 aloqaga chiqsangiz bo'ladi
                        </Text>
                    </Box>
                </Flex>

                <Flex className={s.socials} align={"center"} gap={20}>
                    <Link href={"https://www.facebook.com/chustiy.uz"}>
                        <IconFacebook/>
                    </Link>
                    <Link href={"https://www.instagram.com/chustiy.uz?igsh=ZTBpdmZmZnZ6bTEx"}>
                        <IconInstagram/>
                    </Link>
                    <Link href={"https://youtube.com/@ochoqboshida?si=VOx93YXAD7pAx5wb"}>
                        <IconYoutube/>
                    </Link>
                </Flex>
            </div>
            <div className={s.sectionRight}>
                <Text className={"section-title sm"}>Biz bilan bog’lanish</Text>
                <Text className={"section-subtitle"}>
                    Xizmatlarimiz, buyurtmalarimiz yoki hamkorlik imkoniyatlari haqida
                    savollaringiz bormi? Bizning jamoamiz doimo sizga yo&apos;l
                    ko&apos;rsatish va to&apos;g&apos;ri yordam berish uchun shu yerda.
                </Text>

                <SegmentedControl
                    value={value}
                    onChange={setValue}
                    className={s.controlRoot}
                    classNames={{
                        control: s.control,
                        label: s.controlLabel,
                        indicator: s.controlIndicator,
                    }}
                    data={[
                        {label: "Email", value: "email"},
                        {label: "Telefon raqam", value: "tel-num"},
                        {label: "Telegram", value: "telegram"},
                    ]}
                />
                <Switch>
                    <Case condition={value === "email"}>
                        <EmailForm/>
                    </Case>
                    <Case condition={value === "tel-num"}>
                        <PhoneNumberForm/>
                    </Case>
                    <Case condition={value === "telegram"}>
                        <TelegramForm/>
                    </Case>
                </Switch>
            </div>
        </div>
    )
}

export default ContactsPage
