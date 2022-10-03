import React, { useContext } from 'react'

import styles from './TaskItem.module.css'
import { TaskContext } from '../../context/TaskContext'
import { Trash } from 'phosphor-react'

interface TaskProps {
  id: string,
  isDone: boolean,
  text: string,
}

interface TaskItemProps {
  task: TaskProps,
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { id, isDone, text } = task;
  const { onDeleteTask, onFinishTask } = useContext(TaskContext)

  return (
    <li className={isDone?styles.Done:''}>
      <div className={styles.checkbox}>
        <input 
          id={id} 
          type="checkbox" 
          checked={isDone} 
          onClick={() => onFinishTask(id)} 
        />
        <label htmlFor={id} className={styles.text}>{text}</label>
      </div>
      <button type='button' onClick={() => onDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </li>
  )
}