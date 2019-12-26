import { createGlobalStyle } from 'styled-components'
import { resetCss } from './reset'

export const GlobalStyles = createGlobalStyle`

  ${resetCss}

  /* benchnine-regular - latin */
  @font-face {
    font-family: 'BenchNine';
    font-style: normal;
    font-weight: 400;
    src: local('BenchNine Regular'), local('BenchNine-Regular'),
       url('/static/fonts/benchnine-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/static/fonts/benchnine-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
/* benchnine-700 - latin */
  @font-face {
    font-family: 'BenchNine';
    font-style: normal;
    font-weight: 700;
    src: local('BenchNine Bold'), local('BenchNine-Bold'),
        url('/static/fonts/benchnine-v8-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/benchnine-v8-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

/* noto-sans-regular - latin */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Noto Sans'), local('NotoSans'),
       url('/static/fonts/noto-sans-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/static/fonts/noto-sans-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* noto-sans-700 - latin */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
       url('/static/fonts/noto-sans-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/static/fonts/noto-sans-v9-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'beauty';
    src: url('/static/fonts/beauty.woff');
  }

  #app {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    overflow: hidden;
    color: #f6f5f5;
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  :root {
    --font-headings: 'BenchNine'
  }
`

export default GlobalStyles
