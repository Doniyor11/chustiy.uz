import { Burger, Select } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import { MenuData } from "@/widgets/layouts/navbar/libs.ts"

import IconGlobal from "@/shared/assets/images/icons/icon-global.svg"

import s from "./styles.module.scss"

export const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const matches = useMediaQuery("(max-width: 576px)")

  return (
    <div className={cx(s.navbarWrapper, "container")}>
      <Link href={"/"} className={s.logo}>
        Chustiy
      </Link>

      <ul className={s.menu}>
        {MenuData?.map((item, index) => {
          return (
            <li
              key={index}
              className={cx(s.link, {
                [s.active]: item?.path === router.pathname,
              })}
            >
              <Link href={item?.path}>{item?.text}</Link>
            </li>
          )
        })}
      </ul>

      <Select
        className={s.lang}
        defaultValue={"Uz"}
        data={["Ru", "Uz"]}
        leftSection={<IconGlobal />}
      />
      {matches && <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} />}
    </div>
  )
}
