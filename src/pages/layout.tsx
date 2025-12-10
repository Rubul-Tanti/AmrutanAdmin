import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='flex gap-8 h-[calc(100vh-90px)]'>
    <Sidebar/>
    <Outlet/>
      </main>
    </>
  )
}

export default Layout
