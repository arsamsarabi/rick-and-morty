const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  tuna: '#33313b',
  morning: '#9BC5DE',
  cancan: '#D99AB5',
  sand: '#f6f5f5',
  pomegranate: '#c0392b',
  alizarin: '#e74c3c',
  orange: '#f39c12',
  sun: '#f1c40f',
  nephritis: '#27ae60',
  emerald: '#2ecc71',
}

const palette: Palette = {
  primary: colors.tuna,
  secondary: colors.morning,
  accent: colors.cancan,
  contrast: colors.sand,
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
