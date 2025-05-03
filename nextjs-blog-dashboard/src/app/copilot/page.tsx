export default function Copilot() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">AI Copilot</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg p-4">
                <p className="text-gray-900">How can I help you today?</p>
              </div>
            </div>
            
            {/* User input */}
            <div className="mt-6">
              <form className="flex space-x-4">
                <input
                  type="text"
                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Ask me anything..."
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Smart content suggestions</li>
            <li>• SEO optimization tips</li>
            <li>• Writing assistance</li>
            <li>• Topic research</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tips</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Ask specific questions</li>
            <li>• Use natural language</li>
            <li>• Request examples</li>
            <li>• Get writing feedback</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
