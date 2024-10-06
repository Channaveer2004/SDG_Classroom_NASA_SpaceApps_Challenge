'use client'

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"

const questions = [
  {
    id: 1,
    question: 'Which SDG aims to end poverty in all its forms everywhere?',
    options: ['SDG 1: No Poverty', 'SDG 2: Zero Hunger', 'SDG 3: Good Health and Well-Being', 'SDG 4: Quality Education'],
    answer: 'SDG 1: No Poverty',
  },
  {
    id: 2,
    question: 'Which SDG focuses on ensuring access to affordable, reliable, sustainable, and modern energy for all?',
    options: ['SDG 6: Clean Water and Sanitation', 'SDG 7: Affordable and Clean Energy', 'SDG 8: Decent Work and Economic Growth', 'SDG 9: Industry, Innovation, and Infrastructure'],
    answer: 'SDG 7: Affordable and Clean Energy',
  },
  {
    id: 3,
    question: 'What is the goal of SDG 13?',
    options: ['Climate Action', 'Life Below Water', 'Life on Land', 'Partnerships for the Goals'],
    answer: 'Climate Action',
  },
  {
    id: 4,
    question: 'Which SDG is dedicated to achieving gender equality and empowering all women and girls?',
    options: ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities', 'SDG 16: Peace, Justice and Strong Institutions'],
    answer: 'SDG 5: Gender Equality',
  },
  {
    id: 5,
    question: 'Which SDG aims to ensure healthy lives and promote well-being for all at all ages?',
    options: ['SDG 2: Zero Hunger', 'SDG 3: Good Health and Well-Being', 'SDG 6: Clean Water and Sanitation', 'SDG 8: Decent Work and Economic Growth'],
    answer: 'SDG 3: Good Health and Well-Being',
  },
  {
    id: 6,
    question: 'What is the focus of SDG 14?',
    options: ['Affordable and Clean Energy', 'Climate Action', 'Life Below Water', 'Clean Water and Sanitation'],
    answer: 'Life Below Water',
  },
  {
    id: 7,
    question: 'Which SDG seeks to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation?',
    options: ['SDG 8: Decent Work and Economic Growth', 'SDG 9: Industry, Innovation, and Infrastructure', 'SDG 12: Responsible Consumption and Production', 'SDG 11: Sustainable Cities and Communities'],
    answer: 'SDG 9: Industry, Innovation, and Infrastructure',
  },
  {
    id: 8,
    question: 'Which SDG focuses on ending hunger, achieving food security, and promoting sustainable agriculture?',
    options: ['SDG 2: Zero Hunger', 'SDG 3: Good Health and Well-Being', 'SDG 6: Clean Water and Sanitation', 'SDG 12: Responsible Consumption and Production'],
    answer: 'SDG 2: Zero Hunger',
  },
  {
    id: 9,
    question: 'SDG 6 is about ensuring availability and sustainable management of what?',
    options: ['Clean Water and Sanitation', 'Affordable and Clean Energy', 'Decent Work and Economic Growth', 'Life on Land'],
    answer: 'Clean Water and Sanitation',
  },
  {
    id: 10,
    question: 'How many SDGs are there in total?',
    options: ['15', '16', '17', '18'],
    answer: '17',
  }
];

export default function QuizApp() {
  const [selectedAnswers, setSelectedAnswers]: any = useState({})
  const [score, setScore] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAnswerClick = (questionId: any, option: any) => {
    if (selectedAnswers[questionId] !== undefined) return // Prevent multiple clicks

    const isCorrect = option === questions.find((q) => q.id === questionId)?.answer;

    setSelectedAnswers((prev: any) => ({ ...prev, [questionId]: option }))

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  const progress = (Object.keys(selectedAnswers).length / questions.length) * 100

  if (!mounted) return null

  return (
    <>
      <div className="min-h-screen bg-black text-gray-300 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-100">Interactive Quiz on SDG</h1>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-800 text-gray-300 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="bg-gray-900 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-100">{q.question}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {q.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswerClick(q.id, option)}
                          className={`w-full p-3 rounded-md text-left transition-colors duration-200 ${selectedAnswers[q.id] === option
                              ? option === q.answer
                                ? 'bg-green-800 text-white'
                                : 'bg-red-900 text-white'
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                            }`}
                          disabled={selectedAnswers[q.id] !== undefined}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-900 rounded-lg shadow-md p-6 sticky top-8 transition-colors duration-200">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">Quiz Progress</h2>
                <div className="mb-4">
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {Object.keys(selectedAnswers).length} of {questions.length} questions answered
                </p>
                <div className="text-4xl font-bold mb-2 text-gray-100">{score} / {questions.length}</div>
                <p className="text-sm text-gray-400">Current Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}