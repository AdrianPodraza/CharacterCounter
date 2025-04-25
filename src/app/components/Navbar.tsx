'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // unikamy błędu SSR/CSR z ikonami

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className='flex items-center justify-between px-4 py-2'>
      <Image
        src={resolvedTheme === 'dark' ? '/images/logo-dark-theme.svg' : '/images/logo-light-theme.svg'}
        alt='logo'
        width={245}
        height={40}
      />
      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className='cursor-pointer rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600'
      >
        {resolvedTheme === 'dark' ? <Sun className='h-5 w-5 text-white' /> : <Moon className='h-5 w-5 text-black' />}
      </Button>
    </nav>
  )
}

export default Navbar
