'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
  return (
    <SignIn.Root>
      <SignIn.Step name='start'>
        
        <h1>Sign in to your account</h1>
        <Clerk.Connection name='google'>
          Continue With Google
        </Clerk.Connection>
      </SignIn.Step>
    </SignIn.Root>
  )

}