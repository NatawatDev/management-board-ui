import { ReactNode } from 'react' 

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
  value: string,
  placeholder?: string,
  type?: string,
  title?: string,
  name?: string,
  style?: string,
  isDisable? : boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  actions?: (() => void),
}