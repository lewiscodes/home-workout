import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import Button from "../button";
import { calculateBackgroundColor, calculateRound } from './utils';
import styles from './styles'
import { Round } from '../../types';

interface ITimerProps {
  readonly setBackgroundColor: Dispatch<SetStateAction<"blue" | "red" | "green">>
}

const Timer = ({ setBackgroundColor }: ITimerProps) => {
  const THIRTY_MINUTES_IN_SECONDS = 1800
  const [round, setRound] = useState<Round>()
  const [started, seStarted] = useState(false)
  const [startTime, setStartTime] = useState<Date>()
  const [remainingMinutes, setRemainingMinutes] = useState(30)
  const [remainingSeconds, setRemainingSeconds] = useState(0)
  const [totalRemainingSeconds, setTotalRemainingSeconds] = useState(THIRTY_MINUTES_IN_SECONDS)

  useEffect(() => {
    if (startTime && !started) {
      seStarted(true)
      const interval = setInterval(() => {
        const currentTime = new Date()
        const secondsElapsed = (currentTime.getTime() - startTime.getTime()) / 1000
        const dateDiff = Math.round(THIRTY_MINUTES_IN_SECONDS - secondsElapsed)
        const localRemainingMinutes = Math.floor(dateDiff / 60)

        setRemainingMinutes(localRemainingMinutes)
        setRemainingSeconds(dateDiff - (localRemainingMinutes * 60))
        setTotalRemainingSeconds(dateDiff)

      }, 1000)

      return () => {
        seStarted(false)
        clearInterval(interval)
      }
    }
  }, [startTime])

  useEffect(() => {
    const round = calculateRound(totalRemainingSeconds)
    setRound(round)
    setBackgroundColor(calculateBackgroundColor(round))
  }, [totalRemainingSeconds])

  useEffect(() => {
    if (!remainingMinutes && !remainingSeconds) {
      setStartTime(undefined)
      setRemainingMinutes(30)
    }

  }, [remainingMinutes, remainingSeconds])

  const handleStartStopClick = () => {
    if (startTime) {
      setStartTime(undefined)
      setRemainingMinutes(30)
      setRemainingSeconds(0)
    }

    setStartTime(new Date())
  }

  const formattedRemainingMinutes = remainingMinutes.toString().length === 1 ? `0${remainingMinutes}` : remainingMinutes
  const formattedRemainingSeconds = remainingSeconds.toString().length === 1 ? `0${remainingSeconds}` : remainingSeconds
  return (
    <div>
      <p style={styles.round}>{`Round ${round || '-'}`}</p>
      <p style={styles.timer}>{`${formattedRemainingMinutes}:${formattedRemainingSeconds}`}</p>
      <Button id='start_pause_stop_button' onClick={handleStartStopClick}>{started ? 'Stop/Reset' : 'Start'}</Button>
    </div>
  )
}

export default Timer;
