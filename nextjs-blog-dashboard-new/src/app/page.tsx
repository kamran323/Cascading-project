export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to BlogDash</h1>
      <p className="text-xl text-gray-600">Your modern blog and dashboard solution with AI-powered features.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Blog Platform</h2>
          <p className="text-gray-600">Share your thoughts and ideas with our beautiful blog platform.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Smart Dashboard</h2>
          <p className="text-gray-600">Manage your content with our intuitive dashboard interface.</p>
        </div>
      </div>
    </div>
  )
}
