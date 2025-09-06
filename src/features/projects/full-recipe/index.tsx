import { Collapse, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import IconDown from "@/shared/assets/images/icon-chevron-down-xl.svg"
import ImageRecipes from "@/shared/assets/images/image-recipes.jpg"

import s from "./styles.module.scss"

export const FullRecipe = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className={s.recipeInfo}>
        <Image src={ImageRecipes} alt={"image-recipes"} className={s.image} />
        <div className={s.boxRight}>
          <Text className={"section-title sm"}>Tovuqli palov</Text>
          <div className={s.descriptionWrapper}>
            <Text className={s.descriptionTarget}>
              Description <IconDown />
            </Text>
            <Collapse in={true}>
              <Text className={s.text}>
                The Silvero Imperial Bowl is the perfect fusion of style and
                durability. Crafted from premium stainless steel, this bowl is
                designed to elevate your kitchen experience while standing the
                test of time.
              </Text>
            </Collapse>
          </div>
          <div className={s.descriptionWrapper}>
            <Text className={s.descriptionTarget}>
              Specification <IconDown />
            </Text>
            <Collapse in={true}>
              <ul>
                <li>
                  <b>Material:</b> High-grade stainless steel
                </li>
                <li>
                  <b>Diameter:</b> 25 cm (10 inches)
                </li>
                <li>
                  <b>Capacity:</b> 3 liters
                </li>
                <li>
                  <b>Finish:</b> Polished mirror finish
                </li>
                <li>
                  <b>Weight:</b> 1.2 kg
                </li>
              </ul>
            </Collapse>
          </div>
        </div>
      </div>

      <video className={s.video} controls preload="none">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        <track src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </video>
    </div>
  )
}
