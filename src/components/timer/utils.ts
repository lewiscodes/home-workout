import { Round } from "../../types"

export const calculateRound = (remainingSeconds: number): Round => {
  switch (true) {
    case (remainingSeconds > 0 && remainingSeconds <= 120):
      return 1
    case (remainingSeconds > 120 && remainingSeconds <= 150):
      return 2
    case (remainingSeconds > 150 && remainingSeconds <= 180):
      return 3
    case (remainingSeconds > 180 && remainingSeconds <= 300):
      return 4
    case (remainingSeconds > 300 && remainingSeconds <= 330):
      return 5
    case (remainingSeconds > 330 && remainingSeconds <= 450):
      return 6
    case (remainingSeconds > 450 && remainingSeconds <= 480):
      return 7
    case (remainingSeconds > 480 && remainingSeconds <= 600):
      return 8
    case (remainingSeconds > 600 && remainingSeconds <= 630):
      return 9
    case (remainingSeconds > 630 && remainingSeconds <= 750):
      return 10
    case (remainingSeconds > 750 && remainingSeconds <= 780):
      return 11
    case (remainingSeconds > 780 && remainingSeconds <= 900):
      return 12
    case (remainingSeconds > 900 && remainingSeconds <= 930):
      return 13
    case (remainingSeconds > 930 && remainingSeconds <= 1050):
      return 14
    case (remainingSeconds > 1050 && remainingSeconds <= 1080):
      return 15
    case (remainingSeconds > 1080 && remainingSeconds <= 1200):
      return 16
    case (remainingSeconds > 1200 && remainingSeconds <= 1230):
      return 17
    case (remainingSeconds > 1230 && remainingSeconds <= 1350):
      return 18
    case (remainingSeconds > 1350 && remainingSeconds <= 1380):
      return 19
    case (remainingSeconds > 1380 && remainingSeconds <= 1500):
      return 20
    case (remainingSeconds > 1500 && remainingSeconds <= 1530):
      return 21
    case (remainingSeconds > 1530 && remainingSeconds <= 1650):
      return 22
    case (remainingSeconds > 1650 && remainingSeconds <= 1680):
      return 23
    default:
        return 24
  }
}

export const calculateBackgroundColor = (round: Round): "blue" | "red" | "green" => {
  if ([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23].includes(round)) { return "green" }

  if ([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22].includes(round)) { return "red" }

  return "blue"
}
