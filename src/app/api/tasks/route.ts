import { NextRequest, NextResponse } from 'next/server';

// This is a simple in-memory storage for demonstration
// In a real app, you'd use a database
let tasks = [
    { id: 1, title: 'Learn Next.js basics', completed: true, priority: 'high' },
    { id: 2, title: 'Build a project', completed: false, priority: 'medium' },
    { id: 3, title: 'Deploy to Vercel', completed: false, priority: 'low' },
];

// GET /api/tasks - Get all tasks
export async function GET() {
    return NextResponse.json(tasks);
}

// POST /api/tasks - Create a new task
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const newTask = {
            id: tasks.length + 1,
            title: body.title,
            completed: false,
            priority: body.priority || 'medium',
        };
        tasks.push(newTask);
        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}

// DELETE /api/tasks - Delete all tasks (for testing)
export async function DELETE() {
    tasks = [];
    return NextResponse.json({ message: 'All tasks deleted' });
}
