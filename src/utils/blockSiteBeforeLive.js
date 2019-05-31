// @todo remove after 2.06.2019
export const isSiteBlocked = () => {
  const now = Date.now()
  const zeroHour = new Date(Date.UTC(2019, 5, 3, 13, 0, 0))
  if (zeroHour >= now) {
    if (typeof window !== 'undefined' && window.prompt('', '') !== 'bldr') {
      return true
    }
  }
  return false
}
