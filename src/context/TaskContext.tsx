import { createContext, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

type Task = {
  id: string;
  text: string;
  isDone: boolean;
}

type TasksContextType = {
  tasks: Task[];
  totalTasks:number;
  doneTasks: number;
  onFinishTask: (id: string) => void;
  onDeleteTask: (name: string) =>void;
  onAddTask: (text: string) => void;
}

export const TaskContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: {children: React.ReactNode}) {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [doneTasks, setDoneTasks] = useState<number>(0);

  const onAddTask = useCallback((text: string) => {
    const id = uuid()

    const newTask = {
      id,
      isDone: false,
      text
    }

    setTaskList(state => [...state, newTask]);
  }, []);

  const onFinishTask = useCallback((id: string) => {
    setTaskList(state => state.map(task => {
      if(task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task
    }))
  }, []);

  const onDeleteTask = useCallback((id: string) => {
    setTaskList(state => state.filter(task => task.id !== id))
  }, []);

  useEffect(() => {
    setTotalTasks(taskList.length)
    setDoneTasks(taskList.filter(task => task.isDone).length)
  }, [taskList]);

  return (
    <TaskContext.Provider
      value={{
        tasks: taskList,
        onAddTask,
        onFinishTask,
        onDeleteTask,
        totalTasks,
        doneTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}