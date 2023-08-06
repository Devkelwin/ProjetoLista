import { Product } from '@/src/styles/pages/store2'
import Image from 'next/image'
import ImagemCamisa from '../../assets/images/Camisa.png'
export function ItemList() {
  return (
    <Product>
      <Image src={ImagemCamisa} width={400} height={400} alt="" />
      <footer>
        <strong>Camisa Preta</strong>
        <span>R$20,00</span>
      </footer>
    </Product>
  )
}
