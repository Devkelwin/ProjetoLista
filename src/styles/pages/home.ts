import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: 'Black',
    marginBottom: 20,
    fontSize: 42,
  },
})

export const LinkContainer = styled('div', {
  justifyContent: 'flex-start',
  display: 'flex',
  width: '100%',
  padding: '5px',
})

export const Product = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const Img = styled('img', {
  objectFit: 'contain',
  objectPosition: 'center',
  height: 55,
  paddingInline: 30,
})

export const ItemContainer = styled('div', {
  backgroundColor: '#f7f7f7',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  margin: '10px',

  maxWidth: 1300,

  height: 50,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',

  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
})

export const ProductImage = styled('div', {
  position: 'relative',
  paddingBottom: '56.25%',
  paddingInline: 40,
})

export const ProductName = styled('span', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  maxLines: 1,
  paddingBlock: '1%',
  paddingInline: 30,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
})

export const ProductPrice = styled('span', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  paddingBlock: '1%',
  maxLines: 1,
  textAlign: 'center',
  justifyContent: 'center',
  paddingInline: 30,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

export const ProductDescription = styled('span', {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  paddingBlock: '1%',
  paddingInline: 30,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '35%',
})
