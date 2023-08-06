import Image from 'next/image'
import { styled } from '../../styles'
import {
  ImageContainer,
  Img,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { ArrowLeft } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import Head from 'next/head'

import Link from 'next/link'
import api from '../../service/api'
interface ProductProps {
  product: {
    product_id: string
    product_name: string
    img_link: string
    actual_price: string
    about_product: string
  }
}

export default function Product({ product }: ProductProps) {
  const [products, setProducts] = useState([])
  const [dataProducts, setDataProducts] = useState([])

  return (
    <>
      <Head>
        <title>{product.product_name}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Img src={product.img_link} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.product_name}</h1>
          <span>{product.actual_price}</span>
          <p>{product.about_product}</p>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { product_id: 'B0B6F7LX4C' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  any,
  { product_id: string }
> = async ({ params }) => {
  const productId = params!.product_id

  const dataProducts = await api.get('/products')

  const product = dataProducts.data.find(
    (item: any) => item.product_id === productId,
  )

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: {
        product_id: product.product_id,
        product_name: product.product_name,
        img_link: product.img_link,
        actual_price: product.actual_price,
        about_product: product.about_product,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}
