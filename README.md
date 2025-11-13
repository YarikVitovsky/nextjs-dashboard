# TaskMaster - Learn Next.js

A comprehensive Next.js learning project featuring a task management application. This project demonstrates key Next.js concepts including the App Router, Server Components, Client Components, API Routes, and more.

## ��� Features

- **File-based Routing**: Automatic routing based on folder structure
- **Server & Client Components**: Mix server and client rendering
- **API Routes**: Built-in backend API endpoints
- **TypeScript**: Full type safety
- **Tailwind CSS**: Modern, responsive styling
- **Task Management**: CRUD operations for tasks

## ��� Project Structure

```
learning-nextjs/
├── src/
│   ├── app/                    # App Router
│   │   ├── page.tsx           # Home page (/)
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── dashboard/         # Dashboard route (/dashboard)
│   │   │   └── page.tsx
│   │   ├── about/             # About route (/about)
│   │   │   └── page.tsx
│   │   └── api/               # API routes
│   │       └── tasks/
│   │           ├── route.ts   # /api/tasks
│   │           └── [id]/
│   │               └── route.ts  # /api/tasks/:id
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── TaskList.tsx      # Task list (client component)
│   │   ├── TaskItem.tsx      # Individual task
│   │   └── AddTaskForm.tsx   # Add task form (client component)
│   ├── lib/                   # Utility functions
│   │   └── utils.ts
│   └── types/                 # TypeScript types
│       └── index.ts
├── public/                    # Static assets
└── package.json
```

## ��� Key Concepts Demonstrated

### 1. **App Router**
- File-based routing in the `app/` directory
- Each folder creates a route segment
- `page.tsx` makes a route publicly accessible
- `layout.tsx` defines shared UI

### 2. **Server Components (Default)**
- Components render on the server by default
- No JavaScript sent to the client
- Direct database access possible
- Examples: `app/page.tsx`, `app/about/page.tsx`

### 3. **Client Components**
- Add `'use client'` directive at the top
- Required for interactivity (useState, useEffect, event handlers)
- Examples: `TaskList.tsx`, `AddTaskForm.tsx`

### 4. **API Routes**
- Create backend endpoints in `app/api/`
- Use `route.ts` files with HTTP methods (GET, POST, PATCH, DELETE)
- Return JSON responses with `NextResponse`

### 5. **TypeScript**
- Type definitions in `src/types/`
- Type-safe components and functions
- Better developer experience

### 6. **Styling with Tailwind**
- Utility-first CSS classes
- Responsive design out of the box
- Easy to customize

## ���️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ��� Learning Path

1. **Start with the Home Page** (`app/page.tsx`)
   - Understand basic Next.js component structure
   - Learn about Link component for navigation

2. **Explore the Layout** (`app/layout.tsx`)
   - See how layouts wrap pages
   - Understand metadata configuration

3. **Check the Navbar** (`components/Navbar.tsx`)
   - Simple server component
   - Navigation with Next.js Link

4. **Dashboard Page** (`app/dashboard/page.tsx`)
   - Composition of multiple components
   - Server component that renders client components

5. **Client Components** (`components/TaskList.tsx`, `AddTaskForm.tsx`)
   - useState and useEffect hooks
   - Fetching data from API routes
   - Form handling

6. **API Routes** (`app/api/tasks/route.ts`)
   - Creating RESTful endpoints
   - Handling different HTTP methods
   - Dynamic routes with `[id]`

7. **Types** (`types/index.ts`)
   - TypeScript interfaces
   - Type safety across the app

## ��� What You'll Learn

- How Next.js App Router works
- Difference between Server and Client Components
- Creating and using API routes
- TypeScript in Next.js
- Styling with Tailwind CSS
- State management in React
- Form handling
- CRUD operations
- Routing and navigation

## ��� Next Steps

After understanding this project:

1. Add a database (e.g., PostgreSQL with Prisma)
2. Implement authentication (e.g., NextAuth.js)
3. Add more features (filtering, sorting, search)
4. Deploy to Vercel
5. Add testing (Jest, React Testing Library)

## ��� Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## ��� Contributing

This is a learning project. Feel free to experiment, break things, and learn!

---

Happy Learning! ���
