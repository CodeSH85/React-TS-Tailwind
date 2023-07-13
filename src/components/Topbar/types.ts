interface Props {
  mode: string
  currentModule: string
}
interface Top_bar {
  title: string,
  icon?: string,
  label: string,
  color?: string,
  type: string
}

export type { Props, Top_bar };