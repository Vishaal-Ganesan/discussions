// import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const UiProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
        {/* <NextUIProvider> */}
                {children}
        {/* </NextUIProvider> */}
        </SessionProvider>
    )
}

export default UiProvider