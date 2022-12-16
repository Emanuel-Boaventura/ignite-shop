/* eslint-disable @next/next/no-img-element */
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import { useState } from 'react';
import { globalStyles } from '../styles/global';
import logoImg from '../assets/logo.svg';
import {
  MainContentContainer,
  Header,
  HeaderContent,
  CartButton,
  Cart,
  CartProduct,
  PageContainer,
} from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const itemQuantity = 1;
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <Image src={logoImg} alt='' />

          <CartButton
            onClick={() => setOpen((state) => !state)}
            hasItem={itemQuantity > 0}
          >
            <Handbag size={24} weight='bold' />

            <span>{itemQuantity}</span>
          </CartButton>
        </HeaderContent>

        <Cart open={open}>
          <h3>Sacola de compras</h3>

          <div className='productsSection'>
            <CartProduct>
              <Image src={logoImg} width={100} height={100} alt='' />

              <div className='about'>
                <p>CamisetaXX</p>

                <strong>Price</strong>

                <button type='button'>Remover</button>
              </div>
            </CartProduct>
          </div>

          <div className='buySection'>
            <div className='quantity'>
              <p>Quantidade</p>

              <p>X itens</p>
            </div>

            <div className='price'>
              <strong>Valor total</strong>

              <span>XXXX</span>
            </div>

            <button onClick={() => setOpen((state) => !state)} type='button'>
              Finalizar a compra
            </button>
          </div>
        </Cart>
      </Header>

      <MainContentContainer>
        <Component {...pageProps} />
      </MainContentContainer>
    </PageContainer>
  );
}
