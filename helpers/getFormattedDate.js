export default function getFormattedDate(date) {
  const formattedDate = new Date(date).toLocaleString('pl', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return formattedDate
}