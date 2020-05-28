export const isIntersectionObserverSupported = () =>
  typeof window !== 'undefined' && 'IntersectionObserver' in window
