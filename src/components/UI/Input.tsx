import { Input } from './types';

const InputComp = (props:Input) => {
  const { type } = props;
  return (
    <>
      <input type={type} />
    </>
  )
}

export default InputComp;