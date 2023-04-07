import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    maxWidth: 560,
    marginTop: '2rem',
    color: '$gray300',
    textAlign: 'center',
    fontSize: '$xl',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    color: '$green500',
    textDecoration: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: 'calc(-140px / 3)',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 140,
  maxWidth: 140,
  height: 145,
  marginTop: '4rem',
  padding: '0.25rem',
  borderRadius: '50%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  img: {
    objectFit: 'cover',
  },
})
