export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Page Not Found</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Access denied or page does not exist
        </p>
      </div>
    </div>
  )
}
