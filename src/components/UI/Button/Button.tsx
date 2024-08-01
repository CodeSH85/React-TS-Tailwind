import { Button } from '@headlessui/react'
import type { ButtonsTypes } from './type';

const ButtonComp = (props: ButtonsTypes) => {
  const { variant, children, ...other } = props;
  return (
    <Button
      {...other}
      className="px-2 py-1 bg-blue-500 text-white"
    >
      { children }
    </Button>
  )
}

export default ButtonComp
