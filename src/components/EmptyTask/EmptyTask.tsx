import { ClipboardText } from 'phosphor-react'
import styles from './EmptyTask.module.css'

export const EmptyTask = () => {
  return (
    <div className={styles.container}>
      <ClipboardText size={56} className={styles.icon} />
      <h1>Você não possui tarefas cadastradas</h1>
      <h2>Crie tarefas e organize os seus itens a fazer!</h2>
    </div>
  )
}