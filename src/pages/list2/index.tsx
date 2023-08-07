'use client'
import {
  Container,
  HomeContainer,
  Img,
  Product,
  ContainerLink,
} from '../../styles/pages/list2'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import 'react-dom'

import Link from 'next/link'

import { GetStaticProps } from 'next'

import { useEffect, useState } from 'react'
import api from '../../service/api'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export default function Home() {
  const [dataProducts, setDataProducts] = useState([])
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  useEffect(() => {
    api
      .get('/products')
      .then(({ data }) => {
        console.log('Data:', data)
        setDataProducts(data)
        console.log(dataProducts)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Container>
        <ContainerLink>
          <Link href="/">
            <ArrowLeft color="white" size={40} />
          </Link>
          <Link href="/list3">
            <ArrowRight color="white" size={40} />
          </Link>
        </ContainerLink>

        {dataProducts.length > 0 && (
          <HomeContainer ref={sliderRef} className="keen-slider">
            {dataProducts.map((product: any) => (
              <Link
                key={product.product_id}
                href={`/product/${product.product_id}`}
                prefetch={false}
              >
                <Product className="keen-slider__slide">
                  <Img src={product.img_link} alt="" />
                  <footer>
                    <strong>{product.product_name}</strong>
                    <span>{product.actual_price}</span>
                  </footer>
                </Product>
              </Link>
            ))}
          </HomeContainer>
        )}
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/products')
  const products = response.data.map((product: any) => ({
    product_id: product.product_id,
    name: product.product_name,
    imageUrl: product.img_link,
    price: product.actual_price,
    about_product: product.about_product,
  }))

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
