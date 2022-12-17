import { styled } from '..'

export const CartContainer = styled('div', {
  display: 'none',
  width: 0,
  zIndex: 1,

  variants: {
    open: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
        padding: '1.5rem',
        width: '26rem',
        height: '100vh',
        backgroundColor: '$gray800',

        '.closeButton': {
          position: 'absolute',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          top: '1rem',
          right: '1rem',
          height: 28,
          width: 28,
          color: '$gray500',

          '&:hover': {
            color: '$gray100'
          }

        },

        h3: {
          fontSize: '$xl',
          marginBottom: '2rem',
        },

        '.productsSection': {
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          overflowY: 'scroll',
          height: '100%',
        },

        '.buySection': {
          marginTop: 'auto',
          paddingTop: '1rem',

          '.quantity': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          },

          '.price': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',

            span: {
              fontWeight: 700,
              fontSize: '$xl'
            }
          },

          button: {
            width: '100%',
            backgroundColor: '$green500',
            color: '$gray100',
            fontSize: '$lg',
            lineHeight: 1.6,
            fontWeight: 700,
            border: 'none',
            padding: '1.25rem',
            borderRadius: 6,
            cursor: 'pointer',

            '&:disabled': {
              opacity: 0.6,
              cursor: 'not-allowed',
            },

            '&:not(:disabled):hover': {
              backgroundColor: '$green300',
            }
          }
        }
      }
    }
  }
})

export const CartProduct = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  maxHeight: 100,

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  '.about': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    fontiSize: '$md',
    padding: '0.25rem 0',



    button: {
      background: 'none',
      border: 'none',
      color: '$green500',
      width: 'fit-content',
      fontWeight: 700,
      marginTop: 'auto',
      fontSize: '1rem',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      }
    }
  }

})