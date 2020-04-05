import { contentWidth } from './contentWidth'

export const theme = {
  colors: {
    black: '#000',
    dark: '#111d22',
    greyDark: '#999999',
    doveGray: '#6f6f6f',
    greyLight: '#e5e5e5',
    primary: '#253e48',
    secondary: '#820204',
    white: '#fff',
    menuBackground: 'rgba(17, 29, 34, 0.98)',
    listItemBackground: 'rgba(155, 155, 155, 0.1)',
    archiveBackground: 'rgba(17, 29, 34, 0.8)',
    whiteSmoke: '#f5f5f5',
    pickledBluewood: '#263E48',
    date: '#8c9c9b',
    authorLink: '#b42121',
    importantInfo: '#3681a1',

    highlighted: {
      dullRed: '#a13636',
      copperTwo: '#bd5f2e',
      dullOrange: '#a8680d',
      moss: '#627f4c',
      greyTeal: '#4c7f7f',
      flatBlue: '#337e9e',
      dusk: '#5a588b',
      duskyPurple: '#8b587f',
    },
  },
  animations: {
    default: '.3s ease-in',
    slow: '.5s ease-in',
  },
  gradients: {
    hero: `
    linear-gradient(
      to bottom,
      rgba(17, 29, 34, 0),
      rgba(17, 29, 34, 0.2) 20%,
      rgba(17, 29, 34, 0.85)
    )
    `,
    header: `linear-gradient(
      to bottom,
      rgba(17, 29, 34, 0.85),
      rgba(17, 29, 34, 0.85)
    ),
    linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56))`,
    article: `linear-gradient(to bottom, rgba(53, 53, 53, 0.57), rgba(0, 0, 0, 0.69))`,
    highlighted: {
      dullRed:
        'linear-gradient(to bottom, rgba(161, 54, 54, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      copperTwo:
        'linear-gradient(to bottom, rgba(189, 95, 46, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      dullOrange:
        'linear-gradient(to bottom, rgba(215, 151, 60, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      moss:
        'linear-gradient(to bottom, rgba(110, 139, 88, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      greyTeal:
        'linear-gradient(to bottom, rgba(88, 139, 139, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      flatBlue:
        'linear-gradient(to bottom, rgba(54, 129, 161, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      dusk:
        'linear-gradient(to bottom, rgba(90, 88, 139, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
      duskyPurple:
        'linear-gradient(to bottom, rgba(139, 88, 127, 0.2), rgba(0, 0, 0, 0.5)), linear-gradient(to bottom, rgba(54, 54, 54, 0), rgba(17, 29, 34, 0.56)), linear-gradient(to bottom, rgba(17, 29, 34, 0.6), rgba(17, 29, 34, 0.6))',
    },
    carouselArrowNext: `
      linear-gradient(
        to right,
        rgba(17, 29, 34, 0),
        rgba(17, 29, 34, 0.85)
      )
    `,
    carouselArrowPrev: `
    linear-gradient(
      to left,
      rgba(17, 29, 34, 0),
      rgba(17, 29, 34, 0.85)
    )
  `,
  },
  fonts: {
    primary: `'Merriweather', serif`,
    secondary: `'Open Sans', sans-serif`,
  },
  grid: {
    width: {
      big: `${contentWidth.big}px`,
      medium: `${contentWidth.medium}px`,
      small: `${contentWidth.small}px`,
    },
    paddings: {
      mobile: '20px',
      tablet: '40px',
      desktop: '60px',
      large: '80px',
    },
  },
}
