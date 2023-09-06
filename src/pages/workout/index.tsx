import { useState } from 'react'
import Timer from '../../components/timer'
import styles from './styles'

const Workout = () => {
  const [backgroundColor, setBackgroundColor] = useState<'blue' | 'red' | 'green'>('blue')

  return (
    <div style={{ ...styles.root, backgroundColor }}>
      <Timer setBackgroundColor={setBackgroundColor} />
    </div>
  )
}

export default Workout
