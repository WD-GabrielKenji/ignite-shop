import { styled } from '../../styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '3rem',
  height: '3rem',
  border: 'none',
  borderRadius: 6,
  background: '$gray800',
  color: '$gray500',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  svg: {
    fontSize: 24,
  },
})
