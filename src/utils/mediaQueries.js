/* eslint-disable */
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

export const breakpoints = {
  phone: 320,
  phoneLandscape: 480,
  tablet: 768,
  desktop: 1024,
  large: 1280,
}
const { phoneLandscape, tablet, desktop, large } = breakpoints

export const mediaQueries = {
  phoneLandscape: `(min-width: ${phoneLandscape}px)`,
  tablet: `(min-width: ${tablet}px)`,
  desktop: `(min-width: ${desktop}px)`,
  large: `(min-width: ${large}px)`,

  phoneOnly: `(max-width: ${tablet - 1}px)`,
  tabletOnly: `(min-width: ${tablet}px) and  max-width: ${desktop - 1}px)`,
}
