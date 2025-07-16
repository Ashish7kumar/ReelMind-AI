import React from 'react'
import DasboardProvider from './provider'
const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <DasboardProvider>
  {children}
  </DasboardProvider>
  )
}

export default DashboardLayout