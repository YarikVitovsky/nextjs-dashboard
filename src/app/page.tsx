import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to TaskMaster
        </h1>
        <p className="text-gray-600 mb-6">
          A simple task management app built with Next.js to help you learn modern web development.
        </p>

        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/about"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <h2 className="font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Task management with CRUD operations</li>
            <li>Multiple pages with Next.js routing</li>
            <li>Server and Client components</li>
            <li>Responsive design with Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
