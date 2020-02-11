import React from 'react'
import AppHeader from './AppHeader'
import Container from '@material-ui/core/Container'
// import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils'

function AppLayout({children}) {
  return (
    <div className="App-layout">
      <AppHeader />
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default AppLayout
