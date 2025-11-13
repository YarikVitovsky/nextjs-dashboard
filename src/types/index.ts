export interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
}

export interface User {
    id: number;
    name: string;
    email: string;
}
