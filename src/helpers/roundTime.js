import moment from 'moment'

export function roundTime(time, addTime) {
  const remainder = 30 - (time.minute() % 30)
  const floorTime = moment(time).add(remainder, 'minutes')
  const ceilTime = moment(time).add(remainder + 30, 'minutes')
  return { floorTime, ceilTime }
}
