'use client'

import BaseInput from '../base/BaseInput'
import { requireEmail, requirePassword } from '@/app/validator'

interface SignUpProps {
  isDisable: boolean
}

const SignUp: React.FC<SignUpProps> = ({isDisable}) => (
  <div className="flex flex-col gap-[30px]">
    <BaseInput
      title="Firstname"
      name="firstname"
      isDisable={isDisable}
      placeholder="Enter your firstname"
      validate={{ required: 'This field is required' }}
    />
    <BaseInput
      title="Lastname"
      name="lastname"
      isDisable={isDisable}
      placeholder="Enter your lastname"
      validate={{ required: 'This field is required' }}
    />
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

export default SignUp
