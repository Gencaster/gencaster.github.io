export default function (date_string) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(date_string).toLocaleDateString('en-US', options)
}
