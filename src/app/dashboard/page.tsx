import TaskList from '@/components/TaskList';
import AddTaskForm from '@/components/AddTaskForm';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
                    <p className="text-gray-600">Manage your tasks efficiently</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-500 text-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
                        <p className="text-4xl font-bold">12</p>
                    </div>
                    <div className="bg-green-500 text-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-2">Completed</h3>
                        <p className="text-4xl font-bold">8</p>
                    </div>
                    <div className="bg-orange-500 text-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-2">Pending</h3>
                        <p className="text-4xl font-bold">4</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <TaskList />
                    </div>
                    <div>
                        <AddTaskForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
