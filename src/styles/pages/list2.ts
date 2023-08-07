import { styled } from '..'

export const Container = styled('div', {
  backgroundColor: '#121214',
  width: '100%',
  maxHeight: '100%',
  padding: '30px',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HomeContainer = styled('main', {
  display: 'flex',
  backgroundColor: '$gray900',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  maxHeight: '100%',
})

export const ContainerLink = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px',
})

export const Img = styled('img', {
  objectFit: 'contain',
  objectPosition: 'center',
  padding: '5%',
  height: '55%',
})

export const Product = styled('div', {
  backgroundColor: '#fff',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },
    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
