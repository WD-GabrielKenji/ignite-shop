import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'
import { Cart } from '../Cart'

import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== '/success'

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showCartButton && <Cart />}
    </HeaderContainer>
  )
}
