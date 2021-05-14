import { MouseEventHandler } from "react"

export interface ButtonProps {
  children: React.ReactChild
  type: 'button' | 'submit'
  handleClick: MouseEventHandler
  theme?: string,
  wait?: boolean,
}
