'use client';

import { Task } from '@/types';

interface TaskItemProps {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
    const priorityColors = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-green-100 text-green-800',
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3 flex-1">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <div className="flex-1">
                    <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {task.title}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="ml-4 text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
            >
                Delete
            </button>
        </div>
    );
}
