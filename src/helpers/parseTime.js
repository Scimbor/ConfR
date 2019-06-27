export function parseTime(time) {
  const hoursMinutes = time.split(/[.:]/)
  const hours = parseInt(hoursMinutes[0], 10)
  const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0
  return hours + minutes / 60
}
