import Typography from "typography"
import Moraga from "typography-theme-moraga"

Moraga.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: `#325d81`,
    },
  }
}

delete Moraga.googleFonts

const typography = new Typography(Moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
