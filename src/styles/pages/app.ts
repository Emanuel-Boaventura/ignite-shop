import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
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