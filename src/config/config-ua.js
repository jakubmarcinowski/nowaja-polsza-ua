import logo from 'static/logo-cprdip-extended-pl.png'
const meta = require('./../../meta')

export const logoCprdipExtended = logo

export const getArticleUrlInSecondLanguage = slug =>
  `${meta.ru.siteUrl}article/${slug}`

export const translations = {
  LOAD_PREVIOUS: 'jeszcze nie wyspecyfikowane',
  LOAD_MORE: 'Більше текстів',
  ALL_AUTHOR_TEXTS: 'Всі тексти автора',
  BRAND: 'НОВА ПОЛЬЩА',
  PUBLISHER: 'Видавець',
  ABOUT_PROJECT: 'Про проєкт',
  PRIVACY_POLICY: 'Політика конфіденційності',
  ACCESSIBILITY_POLICY: 'Політика доступності',
  SHOW_LESS: 'Дивитися менше',
  SHOW_MORE: 'Дивитися більше',
  RODO: 'Політика приватності',
  LIBRARY: 'Бібліотека',
  NO_ARTICLES: 'Немає публікацій',
  READ_ALSO: 'Читайте також',
  AUTHOR: 'Автор',
  AUTHORS: 'Автори',
  NO_EVENTS: 'Нет событий',
  FACEBOOK_EVENT: 'Подія у Фейсбуці',
  PAGE_NOT_FOUND:
    'Шкода, але цієї сторінки немає. Але на нашому сайті ви можете прочитати інші цікаві статті',
  LEARN_MORE: 'Дізнатися більше',
  OUR_PAGE: 'цікаві статті',
  READ_IN_SECOND_LANGUAGE: 'Читать по-русски',
}
