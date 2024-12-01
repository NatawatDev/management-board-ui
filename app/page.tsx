'use client'

import React from 'react'
import AuthUserCard from '@/components/AuthUserCard'

const page = () => {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <AuthUserCard />
      </div>
    </div>
  )
}

export default page