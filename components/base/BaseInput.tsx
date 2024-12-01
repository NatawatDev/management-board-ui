'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { BaseInputPropsType } from "@/app/types/props"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BaseInput: React.FC<BaseInputPropsType> = ({ title = '', onChange, value = '', name = '', isDisable = false, placeholder, type='text', style='' }) => {
  return (
    <div className='flex flex-col gap-[10px]'>
      <Label>{title}</Label>      
      <Input 
        className={`placeholder:text-slate-400 rounded border-[#DFE4EA] focus:border-[#3758F9] ${style}`}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={isDisable} 
        onChange={onChange} 
      />
    </div>
  )
}

export default BaseInput