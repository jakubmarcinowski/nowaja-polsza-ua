export const theme = {
  colors: {
    black: '#000',
    dark: '#111d22',
    greyLight: '#e5e5e5',
    primary: '#253e48',
    secondary: '#820204',
    white: '#fff',

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
    default: '.3s ease',
  },
  gradients: {
    default: `
    linear-gradient(
      to bottom,
      rgba(17, 29, 34, 0),
      rgba(17, 29, 34, 0.2) 40%,
      rgba(17, 29, 34, 0.85)
    )
    `,
  },
  fonts: {
    primary: `'Open Sans', sans-serif`,
    secondary: `'Merriweather', serif`,
  },
}
