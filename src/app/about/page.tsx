import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">About TaskMaster</h1>

                    <div className="prose prose-lg">
                        <p className="text-gray-700 mb-4">
                            TaskMaster is a learning project built with Next.js 15, designed to help developers
                            understand modern web development concepts.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Technologies Used</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li><strong>Next.js 15:</strong> React framework with App Router</li>
                            <li><strong>TypeScript:</strong> Type-safe JavaScript</li>
                            <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
                            <li><strong>React Server Components:</strong> Server-side rendering</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">File-based Routing</h3>
                                <p className="text-sm text-gray-600">
                                    Next.js uses the file system for routing. Each file in the app directory
                                    automatically becomes a route.
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-800 mb-2">Server Components</h3>
                                <p className="text-sm text-gray-600">
                                    Components render on the server by default, reducing JavaScript sent to the client.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-purple-800 mb-2">Client Components</h3>
                                <p className="text-sm text-gray-600">
                                    Add interactivity with "use client" directive for components that need state or effects.
                                </p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-orange-800 mb-2">API Routes</h3>
                                <p className="text-sm text-gray-600">
                                    Build backend endpoints directly in your Next.js app with route handlers.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Folder Structure</h2>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                            {`learning-nextjs/
├── src/
│   ├── app/              # App Router (pages & layouts)
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   ├── dashboard/    # Dashboard route
│   │   ├── about/        # About route
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── public/               # Static assets
└── package.json`}
                        </pre>

                        <div className="mt-8">
                            <Link
                                href="/dashboard"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Try the Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
