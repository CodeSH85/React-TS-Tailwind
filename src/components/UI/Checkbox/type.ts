export interface CheckBoxType {
  id?: string
  name?: string
  label?: string
  type?: string

  defaultValue?: string | number
  value?: any
  children?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}
