import { Buttons } from './types';

const buttons = (props:Buttons) => {
  const {type, children} = props;
  return (
    <>
    {
      type === 'primary' && <button className="px-2 py-1 bg-blue-500 text-white">{children}</button>
    }
    {
      type === 'danger' && <button className="px-2 py-1 bg-red-500 text-white">{children}</button>
    }
    </>
  ) 
}

export default buttons;

