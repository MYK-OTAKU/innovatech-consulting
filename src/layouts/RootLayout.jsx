import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="flex-1 pt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default RootLayout
