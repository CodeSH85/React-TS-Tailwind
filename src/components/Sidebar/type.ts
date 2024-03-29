interface Props {
  mode: string
  getModule: Function
}
interface Side_bar {
  title: string,
  icon?: string,
  label: string,
  color?: string,
  type: string
}

export type { Props, Side_bar };