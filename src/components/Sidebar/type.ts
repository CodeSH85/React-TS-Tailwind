interface Props {
  mode: string
  test: number
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