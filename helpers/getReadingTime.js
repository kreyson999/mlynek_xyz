export default function getReadingTime(number) {
  const time = number / 200
  const seconds = (time % 1) * 60
  if (seconds < 30) {
    return Math.floor(time)
  } else {
    return Math.ceil(time)
  }
}