import { contentWidth } from './contentWidth'

export const theme = {
  colors: {
    black: '#000',
    dark: '#111d22',
    greyDark: '#999999',
    greyLight: '#e5e5e5',
    primary: '#253e48',
    secondary: '#820204',
    white: '#fff',
    menuBackground: 'rgba(17, 29, 34, 0.98)',
    listItemBackground: 'rgba(155, 155, 155, 0.1)',
    whiteSmoke: '#f5f5f5',
    pickledBluewood: '#263E48',

    highlighted: {
      darkGreyBlue: '#8c9c9b',
      dullOrange: '#d7973c',
      greyTeal: '#588b8b',
      plum: '#b42121',
      rouge: '#ce6879',
      terraCotta: '#c8553d',
      multimediaColor: '#83b420',
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
      darkGreyBlue:
        'linear-gradient(to bottom, rgba(140, 156, 155, .85), rgba(17, 29, 34, 0.85))',
      dullOrange:
        'linear-gradient(to bottom, rgba(215, 151, 60, .85), rgba(17, 29, 34, 0.85))',
      greyTeal:
        'linear-gradient(to bottom, rgba(88, 139, 139, .85), rgba(17, 29, 34, 0.85))',
      plum:
        'linear-gradient(to bottom, rgba(180, 33, 33, .85), rgba(17, 29, 34, 0.85))',
      rouge:
        'linear-gradient(to bottom, rgba(206, 104, 121, .85), rgba(17, 29, 34, 0.85))',
      terraCotta:
        'linear-gradient(to bottom, rgba(200, 85, 61, .85), rgba(17, 29, 34, 0.85))',
      multimediaColor:
        'linear-gradient(to bottom, rgba(131, 180, 32, .85), rgba(17, 29, 34, 0.85))',
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
