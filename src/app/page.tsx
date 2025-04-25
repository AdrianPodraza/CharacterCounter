'use client'
import React, { useState, useEffect } from 'react'
import InputField from './components/InputField/InputField'
import Badge from '@/components/ui/badge'
import LetterDensity from './components/LetterDensity/LetterDensity'

function Home() {
  const [input, setInput] = useState<string>('')
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false)
  const [characterLimitEnabled, setCharacterLimitEnabled] = useState<boolean>(false)
  const [characterLimit, setCharacterLimit] = useState<number>(280)

  const totalCharacters = excludeSpaces ? input.replace(/\s/g, '').length : input.length

  const getWordCount = (input: string) => {
    return input
      .trim()
      .split(/\s+/)
      .filter((word) => word !== '').length
  }
  const getSentenceCount = (input: string) => {
    return input
      .trim()
      .split('.')
      .filter((word) => word !== '').length
  }

  const handleInputChange = (text: string) => {
    if (!characterLimitEnabled || text.length <= characterLimit) {
      setInput(text)
    }
  }

  useEffect(() => {
    if (characterLimitEnabled && input.length > characterLimit) {
      setInput(input.slice(0, characterLimit))
    }
  }, [characterLimit, characterLimitEnabled, input])

  const wordCount = getWordCount(input)
  const sentenceCount = getSentenceCount(input)
  return (
    <>
      <h1 className='text-center text-[64px] leading-[1] font-bold text-neutral-900 dark:text-white'>
        Analyze your text
        <br /> in real-time.
      </h1>
      <InputField
        input={input}
        setInput={handleInputChange}
        excludeSpaces={excludeSpaces}
        setExcludeSpaces={setExcludeSpaces}
        characterLimitEnabled={characterLimitEnabled}
        setCharacterLimitEnabled={setCharacterLimitEnabled}
        characterLimit={characterLimit}
        setCharacterLimit={setCharacterLimit}
      />
      <div className='flex w-full gap-4 max-sm:flex-col'>
        <Badge
          bgColor='bg-purple-400'
          title='Total Characters'
          imgSrc='./images/pattern-character-count.svg'
          value={totalCharacters}
        />
        <Badge bgColor='bg-yellow-500' title='Word Count' imgSrc='./images/pattern-word-count.svg' value={wordCount} />
        <Badge
          bgColor='bg-orange-500'
          title='Sentence Count'
          imgSrc='./images/pattern-sentence-count.svg'
          value={sentenceCount}
        />
      </div>
      <LetterDensity input={input} />
    </>
  )
}

export default Home
