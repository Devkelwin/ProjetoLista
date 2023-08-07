import React from 'react'
import { ItemList } from '@/src/components/ItemList'
import {
  ItemContainer,
  Container,
  LinkContainer,
} from '@/src/styles/pages/list3'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'

export default function Store2() {
  return (
    <>
      <Container>
        <LinkContainer>
          <Link href="/list2">
            <ArrowLeft color="white" size={35} />
          </Link>
        </LinkContainer>

        <ItemContainer>
          <ItemList />
          <ItemList />
          <ItemList />
        </ItemContainer>

        <ItemContainer>
          <ItemList />
          <ItemList />
          <ItemList />
        </ItemContainer>
      </Container>
    </>
  )
}
