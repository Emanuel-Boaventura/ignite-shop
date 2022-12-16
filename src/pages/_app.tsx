/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import { Container, Header, CartButton } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const itemQuantity = 1;

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />

        <CartButton hasItem={itemQuantity > 0}>
          <Handbag size={24} weight='bold' />

          <span>{itemQuantity}</span>
        </CartButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
