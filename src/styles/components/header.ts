import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  width: '100%',
  margin: '0 auto',
  boxShadow: '0px 4px 16px 0px rgba(32,128,32, 0.3)',
  zIndex: 1

})

export const CartButton = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  lineHeight: 0,

  span: {
    display: 'none'
  },

  svg: {
    color: '$gray500',
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
          color: '$gray100',
          border: '3px solid #121214',
          top: 0,
          right: 0,
          transform: 'translate(25%,-25%)',

        }
      }
    }
  },

  '&:hover': {
    svg: {
      color: '$gray100',
    },
  }
})