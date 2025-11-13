import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (same as parent route)
let tasks = [
    { id: 1, title: 'Learn Next.js basics', completed: true, priority: 'high' },
    { id: 2, title: 'Build a project', completed: false, priority: 'medium' },
    { id: 3, title: 'Deploy to Vercel', completed: false, priority: 'low' },
];

// GET /api/tasks/[id] - Get a specific task
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return NextResponse.json(
            { error: 'Task not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(task);
}

// PATCH /api/tasks/[id] - Update a task
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

    if (taskIndex === -1) {
        return NextResponse.json(
            { error: 'Task not found' },
            { status: 404 }
        );
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...body };
    return NextResponse.json(tasks[taskIndex]);
}

// DELETE /api/tasks/[id] - Delete a task
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));

    if (taskIndex === -1) {
        return NextResponse.json(
            { error: 'Task not found' },
            { status: 404 }
        );
    }

    tasks.splice(taskIndex, 1);
    return NextResponse.json({ message: 'Task deleted' });
}
