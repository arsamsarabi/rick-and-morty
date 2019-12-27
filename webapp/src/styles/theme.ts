const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  space: '#253238',
  malibu: '#82D2F2',
  violet: '#c51062',
  vista: '#fafafa',
  pomegranate: '#c0392b',
  alizarin: '#e74c3c',
  orange: '#f39c12',
  sun: '#f1c40f',
  nephritis: '#27ae60',
  emerald: '#2ecc71',
}

const palette: Palette = {
  primary: colors.space,
  secondary: colors.violet,
  accent: colors.malibu,
  contrast: colors.vista,
  danger: {
    light: colors.alizarin,
    dark: colors.pomegranate,
  },
  warning: {
    light: colors.sun,
    dark: colors.orange,
  },
  success: {
    light: colors.emerald,
    dark: colors.nephritis,
  },
}

export const theme: Theme = {
  palette,
  colors,
}
