/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: any
  export default content
}

declare type Colors = {
  [key: string]: string
}

declare type BasicColor = {
  light: string
  dark: string
}

declare type Palette = {
  primary: string
  secondary: string
  accent: string
  contrast: string
  danger: BasicColor
  warning: BasicColor
  success: BasicColor
}

declare type Theme = {
  palette: Palette
  colors: Colors
}

/**
 * Display Panels
 */

declare type BaseDisplay = {}

declare type CharacterDisplay = {
  id: string
  title: string
  image: string
}
