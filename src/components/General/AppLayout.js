import React from 'react'
import AppHeader from './AppHeader'

function AppLayout({children}) {
  return (
    <div className="App-layout">
      <AppHeader />
      {children}
    </div>
  )
}

export default AppLayout
