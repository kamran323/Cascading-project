export default function Blog() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
      
      <div className="grid gap-8">
        {/* Sample blog posts */}
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Getting Started with Next.js</h2>
          <p className="text-gray-600 mb-4">Learn how to build modern web applications with Next.js and React...</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>5 min read</span>
            <span className="mx-2">•</span>
            <span>Web Development</span>
          </div>
        </article>
        
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mastering Tailwind CSS</h2>
          <p className="text-gray-600 mb-4">Discover the power of utility-first CSS with Tailwind...</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>7 min read</span>
            <span className="mx-2">•</span>
            <span>CSS</span>
          </div>
        </article>
      </div>
    </div>
  )
}
