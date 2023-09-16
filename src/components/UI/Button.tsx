// import { VariantProps, cva } from 'class-variance-authority';

// const buttonVariants = cva()

interface Buttons {
  type?: string;
  children?: React.ReactNode;
  [othersOptions: string] : unknown;
}

type style = {
  
};

const ButtonComp = (props: Buttons) => {
  const { type, children, ...other } = props;

  const styles: object = {
    primary: 'px-2 py-1 bg-blue-500 text-white',
    second: '',
    danger: '',
  };

  const style2 = {
    outlined: '',
    disabled: ''
  };

  return (
    <button
      {...other}
      className="px-2 py-1 bg-blue-500 text-white"
    >
      { children }
    </button>
  ) 
}

export default ButtonComp;
