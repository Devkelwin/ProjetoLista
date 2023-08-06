import React from 'react'
import { ItemList } from '@/src/components/ItemList'
import { ItemContainer } from '@/src/styles/pages/store2'

export default function Store2() {
  return (
    <>
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
    </>
  )
}
