import Navbar from './components/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <div className='flex min-h-screen flex-col items-center justify-center bg-neutral-900 bg-[url("/images/bg-light-theme.png")] bg-cover bg-center bg-no-repeat dark:bg-[url("/images/bg-dark-theme.png")]'>
            <section className='mt-12 flex w-full max-w-[990px] flex-col gap-9'>
              <Navbar />
              {children}
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
export default RootLayout
