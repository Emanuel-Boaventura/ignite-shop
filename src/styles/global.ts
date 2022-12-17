/* eslint-disable import/prefer-default-export */
import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',


  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '::-webkit-scrollbar': {
    width: '0.5rem',
    background: 'transparent'
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray300',
    borderRadius: '100px',
  }
})