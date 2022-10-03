import React, { useContext } from "react"
import { FiTrash } from "react-icons/fi";
import { TaskContext } from "../../context/TaskContext";
import { EmptyTask } from "../EmptyTask/EmptyTask";
import { TaskItem } from "../TaskItem/TaskItem";

import styles from './Tasklist.module.css'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export const Tasklist = () => {
  const { tasks } = useContext(TaskContext)
  const hasTask = tasks.length > 0

  return (
    <div className={styles.container}>
      {hasTask ? (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ): (<EmptyTask />)}
    </div>
  )

}