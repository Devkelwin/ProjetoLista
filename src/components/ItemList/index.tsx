import { Product } from '@/src/styles/pages/list3'
import Image from 'next/image'
import ImagemCabo from '../../assets/images/USB.png'
export function ItemList() {
  return (
    <Product>
      <Image src={ImagemCabo} width={380} height={380} alt="" />
      <footer>
        <strong>Cabo USB</strong>
        <span>R$20,00</span>
      </footer>
    </Product>
  )
}
