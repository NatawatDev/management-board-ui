'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { BaseInputPropsType } from "@/app/types/props"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BaseInput: React.FC<BaseInputPropsType> = ({ title = '', validate, name = '', isDisable = false, placeholder, type='text', style='' }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='flex flex-col gap-[10px] relative'>
      <Label>{title}</Label>      
      <Input 
        className={`placeholder:text-slate-400 rounded border-[#DFE4EA] ${style} ${errors[name] ? 'border-red-500' : 'focus:border-[#3758F9]'}`}
        type={type}
        placeholder={placeholder}
        {...register(name, validate)}
        name={name}
        disabled={isDisable} 
      />
      {errors[name] && <p className="text-sm absolute bottom-[-20px] text-red-500">{(errors[name] as any).message}</p>}
    </div>
  )
}

export default BaseInput