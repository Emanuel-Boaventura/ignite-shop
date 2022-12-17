import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$xxl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  div: {
    width: '100%',
    maxWidth: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 100,
    padding: '0.25rem',
    margin: '4rem -4rem 0 0',
    border: '.25rem solid $gray900',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    img: {
      objectFit: 'cover',
    }
  },

  'div:last-child': {
    marginRight: 0
  }
});

