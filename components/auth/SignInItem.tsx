'use client'

import BaseInput from '../base/BaseInput'
import { requireEmail, requirePassword } from '@/app/validator'

interface SignInProps {
  isDisable: boolean
}


const SignIn: React.FC<SignInProps> = ({ isDisable }) => (
  <div className="flex flex-col gap-[30px]">
    <BaseInput
      title="Email Address"
      name="email"
      isDisable={isDisable}
      placeholder="example@gmail.com"
      validate={requireEmail}
    />
    <BaseInput
      title="Your Password"
      type="password"
      name="password"
      isDisable={isDisable}
      placeholder="Enter your password"
      validate={requirePassword}
    />
  </div>
)

export default SignIn
