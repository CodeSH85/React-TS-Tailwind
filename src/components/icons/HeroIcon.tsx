import React from "react";
import * as HIcons from '@heroicons/react/24/solid';
import { Icons } from "./type";

const HeroIcons = (props: Icons) => {

  const { ...icons } = HIcons;
  const { color } = props;
  // @ts-ignore
  const IconComp: TSX.Element = icons[props.icon];
  return(
    <>
    {/* { @ts-ignore } */}
    <IconComp className={`h-6 w-6 ${color}`} aria-hidden="true" />
    </>
  )
}

export default HeroIcons;