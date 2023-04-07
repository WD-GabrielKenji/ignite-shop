import { styled } from '../../styles'

export const CartButtonContainer = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  border: 'none',
  borderRadius: 6,

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
    top: 'calc(-1.5rem / 2)',
    right: 'calc(-1.5rem / 2)',
    borderRadius: '50%',
    background: '$green500',
    outline: '3px solid $gray900',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },

  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24,
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32,
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium',
  },
})
