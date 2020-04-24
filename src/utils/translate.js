import { translations } from './../config'

export const t = key => {
  const msg = translations[key]
  if (!msg) {
    throw new Error(`Missing translation for key: '${key}'. Check config file.`)
  }
  return msg
}
