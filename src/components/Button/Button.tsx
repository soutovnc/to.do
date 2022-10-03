import React, { FormEvent, useContext, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi' 
import { TaskContext } from '../../context/TaskContext'

import styles from './Button.module.css'


export function Button() {
  const {onAddTask} = useContext(TaskContext)
  const [newTask, setNewTask] = useState('')

  
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()
    onAddTask(newTask)
    setNewTask('')
  }
  
  return (
    <button 
    type="submit" 
    className={styles.button}
    onClick={handleAddTask}
    disabled={!newTask}
    >
      Criar
      <FiPlusCircle size={16} color='#FFF' />
    </button>
  )
}