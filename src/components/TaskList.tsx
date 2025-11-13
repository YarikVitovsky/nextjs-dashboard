'use client';

import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { Task } from '@/types';

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggleComplete = async (id: number) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !task.completed }),
            });

            if (response.ok) {
                setTasks(tasks.map(t =>
                    t.id === id ? { ...t, completed: !t.completed } : t
                ));
            }
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTasks(tasks.filter(t => t.id !== id));
            }
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Tasks</h2>
                <div className="text-center text-gray-500 py-8">Loading tasks...</div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Tasks</h2>

            {tasks.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    No tasks yet. Add one to get started!
                </div>
            ) : (
                <div className="space-y-3">
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggleComplete={handleToggleComplete}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
