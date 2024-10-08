import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
    title: "Promptist",
    description: "Discover & Share AI Prompts",
    icons: {
        icon: "/logo.svg",
    }
}

const RootLayout = ({ children }) => {
  return (
    <html lang='eg'>
        <body>
            <Provider>
                <div id='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout