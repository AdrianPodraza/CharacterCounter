import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { Input } from '@/components/ui/input'

import { cn } from '@/lib/utils'

function InputField({
  input,
  setInput,
  excludeSpaces,
  setExcludeSpaces,
  characterLimitEnabled,
  setCharacterLimitEnabled,
  characterLimit,
  setCharacterLimit,
}: {
  input: string
  setInput: (input: string) => void
  excludeSpaces: boolean
  setExcludeSpaces: (value: boolean) => void
  characterLimitEnabled: boolean
  setCharacterLimitEnabled: (value: boolean) => void
  characterLimit: number
  setCharacterLimit: (value: number) => void
}) {
  const isOverLimit = characterLimitEnabled && input.length >= characterLimit

  return (
    <div className='flex flex-col gap-4 text-lg'>
      <Textarea
        className={cn(
          'min-h-[200px] w-full border-2 bg-neutral-200 dark:bg-neutral-800',
          isOverLimit
            ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500'
            : 'border-transparent focus-visible:ring-2 focus-visible:ring-neutral-500',
        )}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className='flex items-center justify-between'>
        <div className='flex flex-wrap items-center gap-4'>
          <label htmlFor='exclude_spaces' className='flex items-center gap-2 text-neutral-900 dark:text-neutral-200'>
            <Checkbox
              id='exclude_spaces'
              className='cursor-pointer'
              checked={excludeSpaces}
              onCheckedChange={(checked) => setExcludeSpaces(!!checked)}
            />
            Exclude spaces
          </label>

          <label htmlFor='character_limit' className='flex items-center gap-2 text-neutral-900 dark:text-neutral-200'>
            <Checkbox
              id='character_limit'
              className='cursor-pointer'
              checked={characterLimitEnabled}
              onCheckedChange={(checked) => setCharacterLimitEnabled(!!checked)}
            />
            Set Character Limit
          </label>

          {characterLimitEnabled && (
            <Input
              type='number'
              min={0}
              max={10000}
              value={characterLimit}
              onChange={(e) => setCharacterLimit(parseInt(e.target.value || ''))}
              className='w-[100px] bg-neutral-700 text-white'
            />
          )}
        </div>
        {characterLimitEnabled && (
          <p className={cn('text-sm', isOverLimit ? 'text-red-500' : 'text-neutral-400')}>
            Remaining: {(characterLimit || 0) - input.length} characters
          </p>
        )}
      </div>
    </div>
  )
}

export default InputField
