import { styled } from '..'

export const PageContainer = styled('main', {
  display: 'flex',
  padding: '2.5rem 4rem 0',
})

export const HomeContainer = styled('div', {
  display: 'flex',
  minHeight: 656,

  overflow: 'visible !important'

})

export const Product = styled('div', {
  figure: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
    maxWidth: 'fit-content',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'cover',
      cursor: 'pointer',
    },

    figcaption: {
      position: 'absolute',
      bottom: '0.25rem',
      left: '0.25rem',
      right: '0.25rem',
      padding: '1.25rem',

      borderRadius: 6,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      backgroundColor: 'rgba(0, 0, 0, 0.6)',

      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',

      '.about': {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        gap: '0.25rem',
      },

      strong: {
        fontSize: '$md',
        color: '$gray100'
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },

      button: {
        padding: '0.75rem',
        backgroundColor: '$green500',
        color: '$gray100',
        borderRadius: 6,
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        lineHeight: 0,

        '&:hover': {
          backgroundColor: '$green300',
        },
      }
    },

    '&:hover': {
      figcaption: {
        transform: 'translateY(0%)',
        opacity: 1,
      }
    },
  },

})