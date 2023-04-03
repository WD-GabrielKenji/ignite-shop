import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  maxWidth: 1180,
  margin: '0 auto',
  gap: '4rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 576,
  height: 656,
  padding: '0.25rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    display: 'block',
    marginTop: '1rem',
    color: '$green300',
    fontSize: '$2xl',
  },

  p: {
    marginTop: '2.5rem',
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    padding: '1.25rem',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    cursor: 'pointer',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
