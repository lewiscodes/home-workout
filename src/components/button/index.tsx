import { PropsWithChildren } from 'react'
import styles from './styles'

interface IButtonProps {
  readonly id: string;
  readonly onClick: () => void;
}

const Button = ({ id, children, onClick }: PropsWithChildren<IButtonProps>) => {
  return (
    <button style={styles.button} id={id} onClick={onClick}>{children}</button>
  )
}

export default Button;
