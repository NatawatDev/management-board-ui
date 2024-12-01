'use client'

import BaseInput from '../base/BaseInput'
import { requireEmail, requirePassword } from '@/app/validator'

const SignUp = () => (
  <div className="flex flex-col gap-[30px]">
    <BaseInput
      title="Firstname"
      name="firstname"
      placeholder="Enter your firstname"
      validate={{ required: 'This field is required' }}
    />
    <BaseInput
      title="Lastname"
      name="lastname"
      placeholder="Enter your lastname"
      validate={{ required: 'This field is required' }}
    />
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

export default SignUp
