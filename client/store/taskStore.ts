import { create } from "zustand";

interface TaskState {
  assigned_tasks: Task[] | [];
  past_tasks: Task[] | [];
  current_task: Task | null;

  setAssignedTasks: (tasks: Task[]) => void;
  setPendingTasks: (tasks: Task[]) => void;
  setCurrentTask: (task: Task) => void;
}

export const useBillStore = create<TaskState>((set) => ({
  assigned_tasks: [],
  past_tasks: [],
  current_task: null,

  setAssignedTasks: (tasks: Task[]) => set({ assigned_tasks: tasks }),
  setPendingTasks: (tasks: Task[]) => set({ past_tasks: tasks }),
  setCurrentTask: (task: Task) => set({ current_task: task }),
}));
