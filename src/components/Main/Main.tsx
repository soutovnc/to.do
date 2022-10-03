import React, { FormEvent, useContext, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { TaskContext } from '../../context/TaskContext'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './Main.module.css'

export const Main = () => {
  const { doneTasks, totalTasks, onAddTask } = useContext(TaskContext)
  const [newTask, setNewTask] = React.useState('')

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()
    onAddTask(newTask)
    setNewTask('')
  }

  return (
    <div className={styles.container}>
      <form>
        <Input />
        
      </form>
      <div className={styles.toDoList}>
        <div className={styles.toDoHeader}>
          <div className={styles.totalTask}>
            Tarefas criadas
            <span>{totalTasks}</span>
          </div>
          <div className={styles.doneTasks}>
            Concluídas
            <span>{`${doneTasks} de ${totalTasks}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}