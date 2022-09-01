import { Button } from '../Button/Button'
import styles from './Input.module.css'

export function Input() {
  return (
    <section className={styles.section}>
      <input
        className={styles.input}
        type="text" 
        placeholder="Adicione uma nova tarefa"
      />
      <Button />
    </section>
  )
}