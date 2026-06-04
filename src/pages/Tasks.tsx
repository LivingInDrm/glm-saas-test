import { useState } from 'react';
import { Plus, Circle, Clock, CheckCircle2 } from 'lucide-react';
import { tasks as initialTasks } from '../data/mockData';

type TaskStatus = 'todo' | 'in-progress' | 'completed';
type Priority = 'high' | 'medium' | 'low';

const priorityStyles: Record<Priority, string> = {
  high: 'bg-red-50 text-red-700 border-red-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-gray-50 text-gray-600 border-gray-200',
};

const statusIcons: Record<TaskStatus, typeof Circle> = {
  todo: Circle,
  'in-progress': Clock,
  completed: CheckCircle2,
};

const statusColors: Record<TaskStatus, string> = {
  todo: 'text-gray-400',
  'in-progress': 'text-amber-500',
  completed: 'text-green-500',
};

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<Priority>('medium');
  const [showAdd, setShowAdd] = useState(false);

  const handleStatusToggle = (id: number) => {
    setTasks(prev =>
      prev.map(t => {
        if (t.id !== id) return t;
        const next: Record<TaskStatus, TaskStatus> = { todo: 'in-progress', 'in-progress': 'completed', completed: 'todo' };
        return { ...t, status: next[t.status] };
      })
    );
  };

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    setTasks(prev => [
      {
        id: Date.now(),
        title: newTitle.trim(),
        priority: newPriority,
        status: 'todo' as const,
        dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
      },
      ...prev,
    ]);
    setNewTitle('');
    setNewPriority('medium');
    setShowAdd(false);
  };

  const columns: { status: TaskStatus; label: string }[] = [
    { status: 'todo', label: 'To Do' },
    { status: 'in-progress', label: 'In Progress' },
    { status: 'completed', label: 'Completed' },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-500 mt-1">Organize and track your work</p>
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          <Plus size={16} />
          Add Task
        </button>
      </div>

      {showAdd && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Task title..."
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAdd()}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
            <select
              value={newPriority}
              onChange={e => setNewPriority(e.target.value as Priority)}
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button
              onClick={handleAdd}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {columns.map(({ status, label }) => {
          const columnTasks = tasks.filter(t => t.status === status);
          return (
            <div key={status}>
              <div className="flex items-center gap-2 mb-4">
                {(() => { const Icon = statusIcons[status]; return <Icon size={16} className={statusColors[status]} />; })()}
                <h3 className="text-sm font-semibold text-gray-900">{label}</h3>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{columnTasks.length}</span>
              </div>
              <div className="space-y-3">
                {columnTasks.map(task => (
                  <div
                    key={task.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleStatusToggle(task.id)}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className={`text-sm font-medium ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                        {task.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${priorityStyles[task.priority]}`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-400">Due {task.dueDate}</span>
                    </div>
                  </div>
                ))}
                {columnTasks.length === 0 && (
                  <div className="text-center py-8 text-sm text-gray-400">No tasks</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
