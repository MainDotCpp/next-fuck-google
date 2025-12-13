import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page 2',
  description: 'This is Page 2',
}

export default async function Page2() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page 2</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Welcome to Page 2</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          This page is mapped from /c
        </p>
      </div>
    </div>
  )
}
