'use client'

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

import BaseButton from './base/BaseButton'
import SignUpItem from "./auth/SignUpItem"
import SignInItem from "./auth/SignInItem"

import { signInUser } from '@/app/api-repo/user'
interface IUserData {
  email: string
  password: string
}

const AuthUserCard = () => {
  const formMethods = useForm<IUserData>()
  const [authFlow, setAuthFlow] = useState<'sign in' | 'sign up' | 'forget password'>('sign in')

  const handleFlowChange = () => {
    setAuthFlow(prevFlow => prevFlow === 'sign in' ? 'sign up' : 'sign in')
    formMethods.reset()
  }

  const handleSubmit = async (data: IUserData) => {
    try {
      const result = await signInUser({ email: data.email, password: data.password })
      console.log(result)
    } catch (error) {
      // alert(error.response.data.message)
    }
    
    console.log('Form Submitted:', data)
  }

  const isSignIn = authFlow === 'sign in'
  const isSignUp = authFlow === 'sign up'

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <Card className="w-[585px] bg-white">
          <CardHeader>
            <CardTitle>{isSignIn ? 'Sign In' : 'Sign Up'}</CardTitle>
          </CardHeader>
          <CardContent>
            {isSignIn && <SignInItem />}
            {isSignUp && <SignUpItem />}
          </CardContent>
          <CardFooter className="flex flex-col gap-[40px]">
            <BaseButton
              title={isSignIn ? 'Sign In' : 'Sign Up'}
              actions={formMethods.handleSubmit(handleSubmit)}
              style="bg-[#3758F9] text-white w-full hover:bg-[#3758F9]/90 mt-[20px]"
            />
            <div className="w-full flex justify-between text-[#637381] text-[16px]">
              <p>
                {isSignIn ? "Don't have an account? " : 'Already have an account? '}
                <span
                  onClick={handleFlowChange}
                  className="hover:underline text-[#3758F9] cursor-pointer"
                >
                  {isSignIn ? 'Sign Up' : 'Sign In'}
                </span>
              </p>
            </div>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  )
}

export default AuthUserCard
