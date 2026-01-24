import Bottle from "@/assets/icons/bottle.svg";
import CoffeeCup from "@/assets/icons/coffeeCup.svg";
import Cup from "@/assets/icons/cup.svg";
import FancyGlass from "@/assets/icons/fancyGlass.svg";
import Glass from "@/assets/icons/glass.svg";
import Mug from "@/assets/icons/mug.svg";
import RoundedCup from "@/assets/icons/roundedCup.svg";

import { SvgProps } from "react-native-svg";

export type SvgIcon = React.ComponentType<SvgProps>;
export type WaterContainer = {
  id: string;
  label: string;
  ml: number;
  oz: number;
  Icon: SvgIcon;
};

export const waterContainers: WaterContainer[] = [
  {
    id: "small-cup",
    label: "Small Cup",
    ml: 200,
    oz: 6.8,
    Icon: Cup,
  },
  {
    id: "coffee-cup",
    label: "Coffee Cup",
    ml: 250,
    oz: 8.5,
    Icon: CoffeeCup,
  },
  {
    id: "glass",
    label: "Glass",
    ml: 300,
    oz: 10.1,
    Icon: Glass,
  },
  {
    id: "fancy-glass",
    label: "Fancy Glass",
    ml: 350,
    oz: 11.8,
    Icon: FancyGlass,
  },
  {
    id: "mug",
    label: "Mug",
    ml: 400,
    oz: 13.5,
    Icon: Mug,
  },
  {
    id: "rounded-cup",
    label: "Rounded Cup",
    ml: 450,
    oz: 15.2,
    Icon: RoundedCup,
  },
  {
    id: "bottle",
    label: "Bottle",
    ml: 500,
    oz: 16.9,
    Icon: Bottle,
  },
];
