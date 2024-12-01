'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { BaseButtonPropsType } from '@/app/types/props'

const BaseButton: React.FC<BaseButtonPropsType> = ({ title = 'Default Button', actions, isDisable = false, icon, style, variant }) => {
  return (
    <Button 
      disabled={isDisable} 
      onClick={actions} 
      variant={variant}
      className={`${style} rounded-[4px]`}
    >
      {icon}
      {title}
    </Button> 
  )


}

export default BaseButton