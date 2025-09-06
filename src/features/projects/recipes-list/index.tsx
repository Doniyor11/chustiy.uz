import { Box, Button, Text } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import IconRight from "@/shared/assets/images/icons/icon-right.svg"
import ImageRecipes from "@/shared/assets/images/image-recipes.jpg"

import s from "./styles.module.scss"

export const RecipesList = () => {
  const router = useRouter()
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
      <div className={s.card}>
        <div className={s.cardTop}>
          <Box className={s.texts}>
            <Text className={s.topTitle}>Tovuqli palov</Text>
            <Text className={s.topSubtitle}>
              The Silvero Imperial Bowl is the perfect fusion of style and
              durability. Crafted from premium stainless steel, this bowl is
              designed to elevate your kitchen experience while standing the
              test of time.
            </Text>
          </Box>
          <Image src={ImageRecipes} alt={"ImageRecipes"} className={s.image} />
        </div>
        <div className={s.recipes}>
          <Text className={s.label}>Asosiy masalliqlar:</Text>
          <ul>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
            <li>
              <b>Tovuq go‘shti</b>: 500gr
            </li>
            <li>
              <b>Guruch</b>: 100gr
            </li>
          </ul>
        </div>

        <Button
          w={150}
          className={"btn-outline"}
          rightSection={<IconRight />}
          onClick={() => router.push("/projects/recipes/1")}
        >
          Batafsil
        </Button>
      </div>
    </div>
  )
}
