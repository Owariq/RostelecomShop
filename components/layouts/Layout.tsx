import { ReactNode } from 'react'
import Header from '../modules/Header/Header'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <div className='' />
  </>
)

export default Layout
