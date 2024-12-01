'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import BaseButton from './base/BaseButton'
import BaseInput from './base/BaseInput'


interface IUserData {
  email: string,
  password: string
}

const AuthUserCard = () => {  
  const [authFlow, setAuthFlow] = useState<string>('sign in')

  const isSignIn = authFlow === 'sign in'
  const isSignUp = authFlow === 'sign up'

  const titleText = isSignIn ? 'Sign In' : isSignUp ? 'Sign Up' : 'Forget Password'
  const buttonText = isSignIn ? 'Sign In' : isSignUp ? 'Sign Up' : 'Send Reset Link'
  const footerText = isSignIn
    ? "Don't have an account? "
    : isSignUp
    ? 'Already have an account? '
    : 'Remembered your password? '

  const footerLinkText = isSignIn
    ? 'Sign Up'
    : isSignUp
    ? 'Sign In'
    : 'Sign In'

  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleFlow = () => {
    if (authFlow === 'sign in') {
      setAuthFlow('sign up')
    } else if (authFlow === 'sign up') {
      setAuthFlow('sign in')
    } else if (authFlow === 'forget password') {
      setAuthFlow('sign in')
    }
  }

  const handleForgetPassword = () => {
    setAuthFlow('forget password')
  }



  return (
    <div>
      <Card className='w-[585px] bg-white'>
        <CardHeader>
          <CardTitle>{titleText}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-[40px]'>
            <div className='flex flex-col gap-[20px]'>
              <BaseInput
                title='Email Address'
                placeholder='example@gmail.com'
                name="email"
                value={userData.email}
                onChange={handleChange}
              />              
              {(isSignIn || isSignUp) && (
                <BaseInput
                  title='Your Password'
                  placeholder='Enter your password'
                  type='password'
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-[40px]">
          <BaseButton title={buttonText} style='bg-[#3758F9] text-white w-full hover:bg-[#3758F9]/90' />
          <div className='w-full flex justify-between text-[#637381] text-[16px]'>            
            {isSignIn && (
              <p onClick={handleForgetPassword} className='hover:underline cursor-pointer'>
                Forget Password?
              </p>
            )}
            <p>
              {footerText}
              <span onClick={handleFlow} className='hover:underline text-[#3758F9] cursor-pointer'>
                {footerLinkText}
              </span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AuthUserCard;
