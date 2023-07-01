import '@/styles/globals.css'
import { Children } from 'react'

export const metadata = {
    title: "Promptopia",
    description: "A website for prompt lovers",
}
const Layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default Layout