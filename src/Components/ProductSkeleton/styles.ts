import { keyframes, styled } from '../../styles'

const skeletonAnimation = keyframes({
  '0%': {
    backgroundPosition: '-200px 0',
  },
  '100%': {
    backgroundPosition: 'calc(200px + 100%) 0',
  },
})

export const ProductSkeletonContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr 32px',
  width: 696,
  height: 656,
  gap: 24,

  div: {
    display: 'grid',
    gridTemplateColumns: '330px 100px',
    justifyContent: 'space-between',
  },
})

export const SkeletonItem = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: 8,
  backgroundColor: '$gray800',
  backgroundImage: 'linear-gradient(90deg, $gray800, $gray700, $gray800)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
})
