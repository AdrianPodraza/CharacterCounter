'use client'

import { Progress } from '@/components/ui/progress'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  input: string
}

function LetterDensity({ input }: Props) {
  const [expanded, setExpanded] = useState(false)

  const letterCounts: Record<string, number> = {}
  const lettersOnly = input.toUpperCase().replace(/[^A-Z]/g, '')

  for (const char of lettersOnly) {
    letterCounts[char] = (letterCounts[char] || 0) + 1
  }

  const totalLetters = lettersOnly.length

  const sortedLetters = Object.entries(letterCounts)
    .map(([char, count]) => ({ char, count }))
    .sort((a, b) => b.count - a.count)

  const visibleCount = 5

  if (!sortedLetters.length) {
    return <p className='text-neutral-200'>No characters found. Start typing to see letter density.</p>
  }

  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-2xl font-semibold text-neutral-900 dark:text-neutral-200'>Letter Density</h3>

      {sortedLetters.slice(0, visibleCount).map(({ char, count }) => (
        <div key={char} className='flex items-center justify-between gap-4'>
          <p className='w-[13px] text-lg text-neutral-900 dark:text-neutral-200'>{char}</p>
          <Progress
            value={(count / totalLetters) * 100}
            className='h-3 w-full flex-1 bg-neutral-800 [&>div]:bg-purple-500'
          />
          <span className='w-[70px] text-lg text-neutral-900 dark:text-neutral-200'>
            {count} ({Math.round((count / totalLetters) * 100)}%)
          </span>
        </div>
      ))}

      <AnimatePresence>
        {expanded && (
          <motion.div
            key='extra-letters'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='flex flex-col gap-3 overflow-hidden'
          >
            {sortedLetters.slice(visibleCount).map(({ char, count }) => (
              <div key={char} className='flex items-center justify-between gap-4'>
                <p className='w-[13px] text-lg text-neutral-900 dark:text-neutral-200'>{char}</p>
                <Progress
                  value={(count / totalLetters) * 100}
                  className='h-3 w-full flex-1 bg-neutral-800 [&>div]:bg-purple-500'
                />
                <span className='w-[70px] text-lg text-neutral-900 dark:text-neutral-200'>
                  {count} ({Math.round((count / totalLetters) * 100)}%)
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {sortedLetters.length > visibleCount && (
        <div
          className='flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition hover:text-neutral-200'
          onClick={() => setExpanded((prev) => !prev)}
        >
          <p className='text-neutral-900 dark:text-neutral-200'>{expanded ? 'See less' : 'See more'}</p>
          <button aria-label={expanded ? 'Collapse' : 'Expand'} className='flex h-6 w-6 cursor-pointer'>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      )}
    </div>
  )
}

export default LetterDensity
