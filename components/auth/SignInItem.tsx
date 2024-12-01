'use client'

import BaseInput from '../base/BaseInput'
import { requireEmail, requirePassword } from '@/app/validator'

const SignIn = () => (
  <div className="flex flex-col gap-[30px]">
    <BaseInput
      title="Email Address"
      name="email"
      placeholder="example@gmail.com"
      validate={requireEmail}
    />
    <BaseInput
      title="Your Password"
      type="password"
      name="password"
      placeholder="Enter your password"
      validate={requirePassword}
    />
  </div>
)

export default SignIn
