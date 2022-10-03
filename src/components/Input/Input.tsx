import React, { FormEvent, useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext'
import { Button } from '../Button/Button'
import styles from './Input.module.css'

export function Input() {
  const {onAddTask} = useContext(TaskContext)
  const [newTask, setNewTask] = React.useState('')

  
  // const handleAddTask = (e: FormEvent) => {
  //   e.preventDefault()
  //   onAddTask(newTask)
  //   setNewTask('')
  // }

  return (
    <section className={styles.section}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e: FormEvent<HTMLInputElement>) => setNewTask(e.currentTarget.value)}
      />
      <Button />
    </section>
  )
}