import Image from 'next/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { useContext } from 'react';
import {
  CartButton,
  HeaderContent,
  HeaderContainer,
} from '../styles/components/header';
import logoImg from '../assets/logo.svg';
import { CartContext } from '../hooks/CartContext';

interface IHeaderProps {
  displayCart: () => void;
}

function Header({ displayCart }: IHeaderProps) {
  const { cartItens } = useContext(CartContext);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href='/'>
          <Image src={logoImg} alt='' />
        </Link>

        <CartButton
          onClick={displayCart}
          hasItem={cartItens && cartItens.length > 0}
        >
          <Handbag size={24} weight='bold' />

          <span>{cartItens && cartItens.length}</span>
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
