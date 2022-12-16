import { styled } from '..';

export const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
})

export const Header = styled('header', {
  display: 'flex',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '90vw',
  margin: '0 auto'
})

export const MainContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  margin: 'auto 0',
})

export const CartButton = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  color: '$gray300',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  lineHeight: 0,

  span: {
    display: 'none'
  },

  variants: {
    hasItem: {
      true: {
        span: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.625rem',
          height: '1.625rem',
          borderRadius: "100%",
          position: 'absolute',
          backgroundColor: '$green500',
          color: '$gray300',
          border: '3px solid #121214',
          top: 0,
          right: 0,
          transform: 'translate(25%,-25%)'
        }
      }
    }
  },

  '&:hover': {
    color: '$gray100',
  }
})

export const Cart = styled('div', {
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
        padding: '3rem',
        width: '30rem',
        height: '100vh',
        backgroundColor: '$gray800',
        gap: '2rem',

        h3: {
          fontSize: '$xl'
        },

        '.productsSection': {
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          overflowY: 'scroll',

          '&::-webkit-scrollbar': {
            width: '0.5rem',
            background: 'transparent'
          },

          '&::-webkit-scrollbar-thumb': {
            background: '$gray300',
            borderRadius: '100px',
          }
        },

        '.buySection': {
          marginTop: 'auto',

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
          }
        }
      }
    }
  }
})

export const CartProduct = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  '.about': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
    fontiSize: '$md',
    padding: '0.5rem 0',


    button: {
      background: 'none',
      border: 'none',
      color: '$green500',
      width: 'fit-content',
      fontWeight: 700,
      marginTop: 'auto',
      fontSize: '1rem',

      '&:hover': {
        color: '$green300',
      }
    }
  }

})