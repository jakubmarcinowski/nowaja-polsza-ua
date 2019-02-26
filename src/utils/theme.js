export const theme = {
  colors: {
    black: '#000',
    dark: '#111d22',
    greyLight: '#e5e5e5',
    primary: '#253e48',
    secondary: '#820204',
    white: '#fff',
    menuBackground: 'rgba(17, 29, 34, 0.98)',
    authorBackground: 'rgba(155, 155, 155, 0.1)',

    highlighted: {
      darkGreyBlue: '#263e48',
      dullOrange: '#d7973c',
      greyTeal: '#588b8b',
      plum: '#711423',
      rouge: '#a01c32',
      terraCotta: '#c8553d',
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
        'linear-gradient(to bottom, rgba(38, 62, 72, .85), rgba(17, 29, 34, 0.85))',
      dullOrange:
        'linear-gradient(to bottom, rgba(215, 151, 60, .85), rgba(17, 29, 34, 0.85))',
      greyTeal:
        'linear-gradient(to bottom, rgba(88, 139, 139, .85), rgba(17, 29, 34, 0.85))',
      plum:
        'linear-gradient(to bottom, rgba(113, 20, 35, .85), rgba(17, 29, 34, 0.85))',
      rouge:
        'linear-gradient(to bottom, rgba(160, 28, 50, .85), rgba(17, 29, 34, 0.85))',
      terraCotta:
        'linear-gradient(to bottom, rgba(200, 85, 61, .85), rgba(17, 29, 34, 0.85))',
    },
  },
  fonts: {
    primary: `'Merriweather', serif`,
    secondary: `'Open Sans', sans-serif`,
  },
}
