import { ReactNode } from 'react' 
import { RegisterOptions } from "react-hook-form";

export interface BaseButtonPropsType {
  title?: string,
  name?: string,
  style?: string,
  icon?: ReactNode,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
  actions?: (() => void),
  isDisable? : boolean
}

export interface BaseInputPropsType {
  placeholder?: string,
  type?: string,
  title?: string,
  name?: string,
  style?: string,
  isDisable? : boolean
  validate?: RegisterOptions,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}