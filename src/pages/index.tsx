import React, { useEffect, useState } from 'react'

import {
  Container,
  Img,
  ItemContainer,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  LinkContainer,
} from '@/src/styles/pages/home' // Certifique-se de ajustar o caminho correto

import api from '@/src/service/api'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export default function Store2() {
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    api
      .get('/products')
      .then(({ data }) => {
        setDataProducts(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log('Data', dataProducts)
  return (
    <Container>
      <LinkContainer>
        <Link href="/list2">
          <ArrowRight color="black" size={35} />
        </Link>
      </LinkContainer>

      <h1>Lista de Produtos</h1>

      {dataProducts.length > 0 ? (
        dataProducts.map((product: any) => (
          <ItemContainer key={product.product_id}>
            <Product>
              <ProductImage>
                <Img src={product.img_link} alt="Imagem" />
              </ProductImage>
              <ProductName>Nome: {product.product_name}</ProductName>
              <ProductPrice>Preço: {product.actual_price}</ProductPrice>

              <ProductDescription>
                Descrição: {product.about_product}
              </ProductDescription>
            </Product>
          </ItemContainer>
        ))
      ) : (
        <p>Carregando Produtos</p>
      )}
    </Container>
  )
}
