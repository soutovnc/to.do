import { FiPlusCircle } from 'react-icons/fi' 

import styles from './Button.module.css'

export function Button() {
  return (
    <button type="submit" className={styles.button}>
      Criar
      <FiPlusCircle size={16} color='#FFF' />
    </button>
  )
}